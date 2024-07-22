import React from 'react'

const blogs = [
  {
    'type': 'blog',
    "blog-img": "https://catproxies.com/uploads/07-05-2024/1cat-1715113327802-956036189.jpeg",
    heading: "How to use residential proxies on catproxies",
    text: "To use the residential proxy you just bought, first go to the generator page on your user dashboard Once your order is confirmed on site you will find your proxy plan here. It usually takes about 30...",
    writtenBy: "CateProxies",
    Date: "2024-06-14",
  },

  {
    'type': 'guide',
    "blog-img": "https://files.catproxies.com/uploads/1718396172363-958835602.jpg",
    heading: "How to use Catproxies on MoreLogin Browser",
    text: "What is Morelogin? Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy. It lets you connect a proxy to your session with a different IP address. . While we refer to the static proxy, Morelogin also has an option to mark a proxy as rotating. This is our favourite privacy browser option because of the nice interface, free profiles and good prices.",
    writtenBy: "CateProxies",
    Date: "2024-06-14",
  },

];
export default function BlogContent({ title }: { title: string }) {
  const blog = blogs.find(blog => blog.heading === title);
  return (
    <div className='mt-5 mb-20 md:w-4/5 mx-auto shadow-sm border'>
      {blog ? (
        <div>
          <div className='flex flex-col gap-5 mt-4'>
            <h1 className='text-center text-2xl font-bold'>{title}</h1>
            <div className='flex justify-between p-4'>

              <p>Written by: {blog.writtenBy}</p>
              <p>Date: {blog.Date}</p>
            </div>
          </div>
          <div className='border-t p-5 '>
            <div className='flex justify-center mb-5'>

          <img src={blog["blog-img"]} alt={blog.heading} height={500} width={500} />
          
        </div>
        <p className='font-semibold'>Description</p>
        <p>{blog.text}</p>

        </div>
        </div>
      ) : (
        <p>No blog found with the title &quot;{title}&quot;.</p>
      )}
    </div>
  )
}
