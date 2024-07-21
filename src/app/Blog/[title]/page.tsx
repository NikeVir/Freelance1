'use client'
import React from 'react'
import {  useParams, usePathname, useSearchParams } from "next/navigation";
import BlogContent from '@/components/BlogContent';
export default function page() {
    const search_params = useParams()
    
  return (
    <div className='min-h-[50vh]'>
        <BlogContent title={search_params.title as string} />
    </div>
  )
}
