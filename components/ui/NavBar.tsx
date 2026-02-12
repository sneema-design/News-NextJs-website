import Link from "next/link"
import { Button } from "./button"

export default function NavBar() {
  const navItemLeft = [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "About", href: "/about" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-indigo-600">Global</span>News
        </Link>

        <div className="hidden md:flex items-start gap-6">
          {navItemLeft.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-700 font-medium relative group transition duration-300"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button className="rounded-full px-5 py-2 bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg">
            Profile
          </Button>
        </div>
      </div>
    </nav>
  )
}
