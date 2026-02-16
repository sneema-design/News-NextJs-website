'use client';
import { useLibrary } from '@/app/context/LibaryContext';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Article } from '@/app/type/news';
import { useUser } from '@clerk/nextjs';
interface TrendingBlogCardProps {
  title: string;
  description: string;
  image?: string | null;
  category: string;
  date: string;
  item: Article;
}

export default function TrendingNewsCard({
  title,
  description,
  image,
  category,
  date,
  item,
}: TrendingBlogCardProps) {
  const { addToLibrary, removeFromLibrary, isSaved } = useLibrary();
  const saved = isSaved(item.url);
  const { isSignedIn } = useUser();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    saved ? removeFromLibrary(item.url) : addToLibrary(item);
  };
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
      {/* Image */}
      <div className="relative w-full h-48">
        {image && (
          <Image
            src={image}
            alt={title}
            loading="eager"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
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

        <div className="flex justify-between">
          <p className="text-xs text-muted-foreground pt-2">{date}</p>
          <div>
            {isSignedIn ? (
              <Button
                size="sm"
                variant={saved ? 'default' : 'secondary'}
                className="cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={(e) => handleClick(e)}
              >
                {saved ? 'Saved ✓' : 'Read Later'}
              </Button>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
