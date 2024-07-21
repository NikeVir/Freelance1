import React from 'react'

export default function BlogContent({title}: {title: string}) {

  return (
    <div>
        <h1 className='text-center text-2xl font-bold'>{title}</h1>
      
    </div>
  )
}
