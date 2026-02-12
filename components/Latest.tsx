import {  LatestNewsCard } from "./LatestNewsCard";
import Link from "next/link";

export default function Latest() {
  const latestNews = [
  {
    id:1,
    title: "AI Revolution in 2026",
    description: "Artificial intelligence is now powering healthcare, finance, and automation at an unprecedented scale.",
    image: "https://picsum.photos/id/1015/600/400",
    category: "Technology",
    date: "Jan 15, 2026",
  },
  {
    id:2,
    title: "Hidden Beaches You Must Visit",
    description: "Discover some of the most peaceful and breathtaking beaches around the globe.",
    image: "https://picsum.photos/id/1016/600/400",
    category: "Travel",
    date: "Jan 12, 2026",
  },
  {
    id:3,
    title: "Smart Investment Strategies",
    description: "Experts share proven strategies to grow your wealth safely in uncertain markets.",
    image: "https://picsum.photos/id/1025/600/400",
    category: "Finance",
    date: "Jan 10, 2026",
  },
  { 
    id:4,
    title: "The Rise of Digital Art",
    description: "NFTs and digital galleries are transforming how artists showcase creativity.",
    image: "https://picsum.photos/id/1035/600/400",
    category: "Art",
    date: "Jan 8, 2026",
  },
  {
    id:5,
    title: "Space Missions in 2026",
    description: "New lunar missions and Mars exploration projects are gaining global attention.",
    image: "https://picsum.photos/id/1043/600/400",
    category: "Science",
    date: "Jan 6, 2026",
  },
];
  return (
    <section className="w-100 ">
      
      <h1 className="text-3xl font-bold mb-4 text-left">
        Latest News
      </h1>

      <div className="space-y-4">
        {/* <LatestNewsCard />
        <LatestNewsCard />
        <LatestNewsCard />
        <LatestNewsCard /> */}
        {
          latestNews.map((item)=>(
            <Link key={item.id} href={`news/${item.id}`}>
             <LatestNewsCard key={item.id} {...item}/>
            </Link>
           
          ))
        }
      </div>

    </section>
  )
}
