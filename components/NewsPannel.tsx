"use client";

import { useState } from "react";
import Link from "next/link";
import TrendingNewsCard from "./TrendingNewsCard";
import { useGetAllNews } from "@/app/services/headline/useHeadlineService";
import { NewsPagnination } from "./NewsPagination";

type props = {
  category: string | null;
};

export default function NewsPannel({ category }: props) {
  const { data: allNews, isPending, isError } =
    useGetAllNews(category ?? undefined);

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

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

  const totalArticles = allNews.articles.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = allNews.articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map((item) => (
            <Link
              key={item.url}
              href={`/news?title=${encodeURIComponent(item.title)}`}
            >
              <TrendingNewsCard
                title={item.title}
                description={item.description ?? "No description available"}
                category={item.source.name}
                date={new Date(item.publishedAt).toLocaleDateString()}
                image={item.urlToImage ?? undefined}
                item={item}
              />
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <NewsPagnination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}
