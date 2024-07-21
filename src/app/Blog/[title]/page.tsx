'use client'
import React from 'react'
import {  useParams } from "next/navigation";
import BlogContent from '@/components/BlogContent';
 const Page=()=> {
    const search_params = useParams()
    console.log(search_params)
  return (
    <div className='min-h-[50vh]'>
        <BlogContent title={search_params.title as string} />
    </div>
  )
}
export default Page