"use client"
import { useGetAllHeadline } from "@/app/services/headline/useHeadlineService";
import { LatestNewsCard } from "./LatestNewsCard";
import Link from "next/link";

export default function Latest() {
  const { data: latestNews, isPending, isError } = useGetAllHeadline();
  if (isPending){
    return(
      <p>Loading...</p>
    )
  }
  return (
    <section className="w-100 ">
      <h1 className="text-3xl font-bold mb-4 text-left">Latest News</h1>

      <div className="space-y-4">
       
        {latestNews?.articles.map((item) => (
          <Link
            key={item.url}
            href={`/news?title=${encodeURIComponent(item.title)}`}
          >
            <LatestNewsCard
              title={item.title}
              description={item.description ?? "No description available"}
              category={item.source.name}  
              date={new Date(item.publishedAt).toLocaleDateString()}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
