"use client"

import Link from "next/link";
import TrendingNewsCard from "./TrendingNewsCard";

export default function NewsPannel() {
 const blogs = [
  {
    title: "The Rise of AI in 2026",
    description: "Artificial intelligence is transforming industries faster than ever.",
    image: "https://picsum.photos/id/1015/600/400",
    category: "Technology",
    date: "Jan 15, 2026",
  },
  {
    title: "Top Travel Destinations",
    description: "Explore the most beautiful places around the world.",
    image: "https://picsum.photos/id/1016/600/400",
    category: "Travel",
    date: "Jan 12, 2026",
  },
  {
    title: "Invest Smart in 2026",
    description: "Learn how to grow your wealth with smart investments.",
    image: "https://picsum.photos/id/1025/600/400",
    category: "Finance",
    date: "Jan 10, 2026",
  },
  {
    title: "Modern Art Trends",
    description: "Discover the latest trends shaping the art world.",
    image: "https://picsum.photos/id/1035/600/400",
    category: "Art",
    date: "Jan 8, 2026",
  },
  {
    title: "The Future of Space",
    description: "New discoveries are reshaping our understanding of space.",
    image: "https://picsum.photos/id/1043/600/400",
    category: "Science",
    date: "Jan 6, 2026",
  },
  {
    title: "Global Politics Today",
    description: "An overview of the latest geopolitical shifts.",
    image: "https://picsum.photos/id/1050/600/400",
    category: "GeoPolitics",
    date: "Jan 5, 2026",
  },
];



  return (
    <section className="py-3">
      <div className="max-w-6xl mx-auto px-4">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {blogs.map((blog, index) => (
            <Link key={index} href={`news/${index}`}>
                  <TrendingNewsCard key={index} {...blog} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
