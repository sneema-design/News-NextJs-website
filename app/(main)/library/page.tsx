'use client';

import { useLibrary } from '@/app/context/LibaryContext';
import LibaryNewsCard from '@/components/LibraryNewsCard';
import Link from 'next/link';

export default function LibraryPage() {
  const { library } = useLibrary();

  return (
    <div className="min-h-screen bg-muted/30 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Heading */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">My Library</h1>
          <span className="text-sm text-muted-foreground">
            {library.length} saved article{library.length !== 1 && 's'}
          </span>
        </div>

        {/* Empty State */}
        {library.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-medium">No saved articles yet</p>
            <p className="text-sm text-muted-foreground mt-2">
              Start saving articles to read them later.
            </p>
          </div>
        )}

        {/* Grid */}
        {library.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {library.map((item) => (
              <Link
                key={item.url}
                href={`/news?title=${encodeURIComponent(item.title)}`}
                className="block"
              >
                <LibaryNewsCard
                  title={item.title}
                  description={item.description ?? 'No description available'}
                  category={item.source.name}
                  date={new Date(item.publishedAt).toLocaleDateString()}
                  image={item.urlToImage ?? undefined}
                  item={item}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
