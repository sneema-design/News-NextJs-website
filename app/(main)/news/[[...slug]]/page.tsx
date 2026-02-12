"use client";

import { useGetNewsByTitle } from "@/app/services/headline/useHeadlineService";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const decodedTitle = title ? decodeURIComponent(title) : "";

  const { data: newss, isPending, isError } =
    useGetNewsByTitle(decodedTitle);

  if (!decodedTitle)
    return <p className="text-center mt-10">No article selected</p>;

  if (isPending)
    return <p className="text-center mt-10 text-lg">Loading article...</p>;

  if (isError || !newss)
    return <p className="text-center mt-10 text-red-500">Failed to load article</p>;

  const news = newss.articles[0];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 shadow-lg">

        {/* Newspaper Header */}
        <div className="text-center mb-10 border-b pb-6">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {news.source?.name}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 leading-tight">
            {news.title}
          </h1>

          <p className="text-gray-500 mt-4 text-sm">
            {new Date(news.publishedAt).toLocaleDateString()} ·{" "}
            {news.author || "Staff Reporter"}
          </p>
        </div>

        {/* Featured Image */}
        {news.urlToImage && (
          <div className="mb-10">
            <Image
              src={news.urlToImage}
              alt={news.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-serif">

          {/* Drop Cap Effect */}
          <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
            {news.description}
          </p>

          <p>{news.content}</p>

        </div>

      </div>
    </div>
  );
}
