"use client";

import { useGetNewsByTitle } from "@/app/services/headline/useHeadlineService";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const decodedTitle = title ? decodeURIComponent(title) : "";

  const { data, isPending, isError } =
    useGetNewsByTitle(decodedTitle);

  if (!decodedTitle)
    return <p className="text-center mt-10">No article selected</p>;

  if (isPending)
    return <p className="text-center mt-10 text-lg">Loading article...</p>;

  if (isError || !data || !data.articles?.length)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load article
      </p>
    );

  const news = data.articles[0];

  return (
    <div className="bg-white min-h-screen">

      {/* Article Container */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Category */}
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          {news.source?.name}
        </p>

        {/* Headline */}
        <h2 className="text-5xl font-serif font-bold leading-tight mb-6">
          {news.title}
        </h2>

      
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-8 border-b pb-6">
          <span>{news.author || "Staff Reporter"}</span>
          <span>•</span>
          <span>
            {new Date(news.publishedAt).toLocaleDateString()}
          </span>
        </div>

      
        {news.urlToImage && (
          <div className="relative w-full h-[500px] mb-10">
            <Image
              src={news.urlToImage}
              alt={news.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        )}

  
        <div className="text-xl leading-relaxed font-serif text-gray-900
                        md:columns-2 md:gap-12">

          {news.description && (
            <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
              {news.description}
            </p>
          )}

          {news.content && <p className="mt-6">{news.content}</p>}

        </div>
      </div>
    </div>
  );
}
