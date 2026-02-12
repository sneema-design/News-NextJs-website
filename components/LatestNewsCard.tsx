import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
interface LatestNewsCardProps {
  title: string
  description: string
  category: string
  date: string
}
export function LatestNewsCard({  title,
  description,
  category,
  date,}:LatestNewsCardProps) {
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

          <p className="text-xs text-gray-500 mt-2">
            {date}• 5 min read
          </p>
        </div>
      </div>
    </Card>
  )
}
