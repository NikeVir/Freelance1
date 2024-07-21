'use client'
import Blog from "@/components/BlockSection";
import {  useSearchParams } from "next/navigation";

export default function Page() {
  const search_params = useSearchParams()
  const ref = search_params.get("text");
  console.log(ref)
  return (
    <main className="font-giest">
      <div className="mt-5">
        <Blog filter ={ref} />
      </div>
    </main>
  );
}
