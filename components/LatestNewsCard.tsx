'use client';
import { Article } from '@/app/type/news';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { useLibrary } from '@/app/context/LibaryContext';
import { useUser } from '@clerk/nextjs';
interface LatestNewsCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  item: Article;
}
export function LatestNewsCard({
  title,
  description,
  category,
  date,
  item,
}: LatestNewsCardProps) {
  const { addToLibrary, removeFromLibrary, isSaved } = useLibrary();
  const saved = isSaved(item.url);
  const { isSignedIn } = useUser();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    saved ? removeFromLibrary(item.url) : addToLibrary(item);
  };
  return (
    <Card className="p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-center justify-between gap-6">
        <div className="flex-1">
          <span className="text-xs font-medium px-2 py-1 rounded-md bg-indigo-100 text-indigo-600">
            {category}
          </span>

          <CardTitle className="text-lg font-semibold mt-2 hover:text-indigo-600 transition-colors">
            {title}
          </CardTitle>

          <CardDescription className="text-sm text-gray-600 mt-1 line-clamp-2">
            {description}
          </CardDescription>

          <div className="flex justify-between">
            <p className="text-xs text-gray-500 mt-2">{date}• 5 min read</p>
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
        </div>
      </div>
    </Card>
  );
}
