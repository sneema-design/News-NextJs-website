'use client';
import { useState } from 'react';
import Category from './Category';
import Latest from './Latest';
import NewsPannel from './NewsPannel';

export default function HomeClient() {
  const [category, setCategory] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-muted/30">
      <main className="max-w-7xl mx-auto py-1 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          <div className="lg:col-span-1 border-r ">
            <Latest />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2  lg:top-19  mx:1 border-d-2">
            <Category selected={category} onSelect={setCategory} />
            <NewsPannel category={category} />
          </div>
        </div>
      </main>
    </div>
  );
}
