'use client'
import React, { Suspense } from 'react'; // Import Suspense
import Blog from "@/components/BlockSection";
import { useSearchParams } from "next/navigation";

export default function Home() {
  return (
    <main className="font-giest">
      <div className="mt-5">
        {/* Wrap Blog component in Suspense with a fallback */}
        <Suspense fallback={<div>Loading...</div>}>
          <BlogWithSearchParams />
        </Suspense>
      </div>
    </main>
  );
}

// Separate component for using useSearchParams
function BlogWithSearchParams() {
  const search_params = useSearchParams()
  const ref = search_params.get("text");
  console.log(ref)
  
  return <Blog filter={ref} />;
}