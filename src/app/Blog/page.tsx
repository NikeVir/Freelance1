'use client'
import React, { Suspense } from 'react'; // Import Suspense
import Blog from "@/components/BlockSection";
import { useSearchParams } from "next/navigation";

export default function Page() {
  return (
    <main className="font-giest">
      <div className="mt-5">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogWithSearchParams />
        </Suspense>
      </div>
    </main>
  );
}

function BlogWithSearchParams() {
  const search_params = useSearchParams()
  const ref = search_params.get("text");
  return <Blog filter={ref} />;
}