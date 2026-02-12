import Category from "@/components/Category";
import Latest from "@/components/Latest";
import BlogPannel from "@/components/NewsPannel";

export default function Home() {
  return (
    <div className="min-h-screen bg-muted/30">
     

      <main className="max-w-7xl mx-auto py-1 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          <div className="lg:col-span-1 border-r ">
            <Latest />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2  lg:top-19  mx:1 border-d-2">
            <Category />
            <BlogPannel />
          </div>
        </div>
      </main>
    </div>
  );
}
