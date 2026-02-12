"use client"

import { Button } from "./ui/button"

export default function Category() {
  const categories = [
    "Travel",
    "Science",
    "Business",
    "Art",
    "Technology",
  ]

  return (
    <section className="w-full py-1">
      <div className="max-w-4xl mx-auto px-4">

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="outline"
              className="
                rounded-full 
                px-5 
                text-sm 
                font-medium 
                whitespace-nowrap
                transition-all 
                duration-300
                hover:bg-primary 
                hover:text-primary-foreground
                hover:shadow-md
              "
            >
              {cat}
            </Button>
          ))}
        </div>

      </div>
    </section>
  )
}
