'use client'
import React, { Suspense } from 'react'; // Import Suspense
import Blog from "@/components/BlockSection";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const search_params = useSearchParams()
  const ref = search_params.get("text");
  return (
    <main className="font-giest">
      <div className="mt-5">
      <Blog filter={ref} />;
      </div>
    </main>
  );
}

