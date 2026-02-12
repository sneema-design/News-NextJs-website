"use client"

import Image from "next/image"
import { Card, CardContent } from "./ui/card"

interface TrendingBlogCardProps {
  title: string
  description: string
  image: string
  category: string
  date: string
}

export default function TrendingNewsCard({
  title,
  description,
  image,
  category,
  date,
}: TrendingBlogCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
      
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <CardContent className="p-4 space-y-2">
        <span className="text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary">
          {category}
        </span>

        <h3 className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <p className="text-xs text-muted-foreground pt-2">
          {date}
        </p>
      </CardContent>
    </Card>
  )
}

