"use client";

import Link from "next/link";
import TrendingNewsCard from "./TrendingNewsCard";
import { useGetAllNews } from "@/app/services/headline/useHeadlineService";
type props={
  category:string|null
}
export default function NewsPannel({category}:props) {
  const { data: allNews, isPending, isError } = useGetAllNews(category??undefined);

  if (isPending) {
    return (
      <section className="py-10 text-center">
        <p className="text-lg">Loading news...</p>
      </section>
    );
  }

  if (isError || !allNews?.articles?.length) {
    return (
      <section className="py-10 text-center text-red-500">
        <p>Failed to load news</p>
      </section>
    );
  }

  return (
    <section className="py-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allNews.articles.map((item) => (
            <Link
              key={item.url}
              href={`/news?title=${encodeURIComponent(item.title)}`}
            >
              <TrendingNewsCard
                title={item.title}
                description={
                  item.description ?? "No description available"
                }
                category={item.source.name}
                date={new Date(item.publishedAt).toLocaleDateString()}
                image={item.urlToImage ?? undefined}
                item={item}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

