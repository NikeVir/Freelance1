'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
export default function Blog({ filter }: { filter: string | null }) {
  const cards = [
    {
      'type': 'blog',
      "blog-img": "https://catproxies.com/uploads/07-05-2024/1cat-1715113327802-956036189.jpeg",
      heading: "How to use Catproxies on MoreLogin Browser",
      text: "What is Morelogin? Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy. It lets you connect a proxy to your session with a different IP addres..",
      writtenBy: "CateProxies",
      Date: "2024-06-14",
    },
    {
      'type': 'blog',
      "blog-img": "https://catproxies.com/uploads/07-05-2024/1cat-1715113327802-956036189.jpeg",
      heading: "How to use Catproxies on MoreLogin Browser",
      text: "What is Morelogin? Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy. It lets you connect a proxy to your session with a different IP addres..",
      writtenBy: "CateProxies",
      Date: "2024-06-14",
    },
    {
      'type': 'guide',
      "blog-img": "https://catproxies.com/uploads/07-05-2024/1cat-1715113327802-956036189.jpeg",
      heading: "How to use Catproxies on MoreLogin Browser",
      text: "What is Morelogin? Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy. It lets you connect a proxy to your session with a different IP addres..",
      writtenBy: "CateProxies",
      Date: "2024-06-14",
    },
    {
      'type': 'guide',
      "blog-img": "https://files.catproxies.com/uploads/1718396172363-958835602.jpg",
      heading: "How to use Catproxies on MoreLogin Browser",
      text: "What is Morelogin? Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy. It lets you connect a proxy to your session with a different IP addres..",
      writtenBy: "CateProxies",
      Date: "2024-06-14",
    },
    {
      'type': 'guide',
      "blog-img": "https://files.catproxies.com/uploads/1718396172363-958835602.jpg",
      heading: "The Link Between Gut Health and Mental...",
      text: "What is Morelogin? Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy. It lets you connect a proxy to your session with a different IP addres..",
      writtenBy: "CateProxies",
      Date: "2024-06-14",
    },
    {
      'type': 'guide',
      "blog-img": "/images/blog-images/blog-img3.svg",
      heading: "The Link Between Gut Health and Mental...",
      text: "What is Morelogin? Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy. It lets you connect a proxy to your session with a different IP addres..",
      writtenBy: "CateProxies",
      Date: "2024-06-14",
    },
    {
      'type': 'guide',
      "blog-img": "/images/blog-images/blog-img3.svg",
      heading: "The Link Between Gut Health and Mental...",
      text: "What is Morelogin? Morelogin is a privacy-focused browser that allows you to connect to a single browser with complete privacy. It lets you connect a proxy to your session with a different IP addres..",
      writtenBy: "CateProxies",
      Date: "2024-06-14",
    },
  ];
  const [searchInput, setSearchInput] = useState(filter ==null?"":filter);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const searchField = (
    <input
      type="text"
      placeholder="Search Blogs"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className=" border-[#05C067] p-3 border-2 rounded-full text-[#05C067]   w-full"
    />
  );

  const filteredCards = cards.filter(card => card.type.toLowerCase().includes(searchInput.toLowerCase()));
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the filteredCards array to only include the items for the current page
  const currentCards = filteredCards.slice(indexOfFirstItem, indexOfLastItem);

  const displayCards = currentCards.map((card, index) => (
    <div key={index} onClick={()=>window.open(`/Blog/${card.heading.replace(/\s+/g, '-')}`)} className="border shadow-sm rounded-lg w-[90%] hover:bg-[#f9f7f7]  sm:w-[380px] cursor-pointer">
      <div className="p-4">

        <div className="rounded-lg  overflow-hidden h-60 ">

          <Image src={card["blog-img"]} alt="Blog Image" className="bg-contain h-72  " width={396} height={396} />
        </div>
        <div className="rounded-md  space-y-1 my-3">
          <h1 className="text-center sm:text-left  font-bold text-2xl">{card.heading}</h1>
          <p className="text-center sm:text-left text-[15px] text-gray-400">{card.text.substring(0,191)+"..."}</p>
        </div>
      </div>
      <div className="border-t p-5 border-[#05C067] flex justify-between">
                <div className="text-[#05C067]">By {card.writtenBy}</div>
                <div className="text-[#05C067]">{card.Date}</div>

          </div>
    </div>
  ));
  const noBlogsMessage = currentCards.length === 0 ? (
    <div className="text-center my-10">
      <p className="text-xl text-gray-500">No blogs found.</p>
    </div>
  ) : null;

  // Pagination controls
  const paginationControls = (
    <div className="flex justify-between p-2 w-full  space-x-4 my-4">
      <Button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className={`px-4 py-3 w-28  rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-[#05C067] text-white'}`}
      >
        Previous
      </Button>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={`px-4 py-3 w-28 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-[#05C067] text-white'}`}
        
      >
        Next
      </Button>
    </div>
  );

  return (
    <section className=" overflow-hidden flex justify-center bg-white mb-10">
      <div className="flex flex-col lg:w-4/5 px-4 lg:px-0  justify-center items-center gap-5">

        <div>
          <div className='text-center flex flex-col gap-2'>
            <h1 className='text-[32px] '>Our Blogs</h1>
            <p className='text-[#A8A8A8] text-[18px]'> Explore our latest blogs and stay updated with the latest trends in the industry.</p>
          </div>
        </div>

        {searchField}
        <div className="flex pl-4 justify-start w-full">

        <div className="flex gap-4 mb-4">
          <Button variant="primary" className={`w-fit px-4 py-2 rounded-full ${searchInput === '' ? 'bg-gray-300': 'bg-[#05C067] text-white'  }`} onClick={()=>setSearchInput('')} disabled={searchInput==''} >All</Button>
          <Button variant="primary" className={`w-fit px-4 py-2 rounded-full ${searchInput === 'guide' ? 'bg-gray-300': 'bg-[#05C067] text-white'   }`} onClick={()=>setSearchInput('guide')} disabled={searchInput == 'guide'}>guide</Button>
          <Button variant="primary" className={`w-fit px-4 py-2 rounded-full ${searchInput === 'integration' ?'bg-gray-300':  'bg-[#05C067] text-white'  }`} onClick={()=>setSearchInput('integration')} disabled={searchInput == 'integration'}>integration</Button>
        </div>

        </div>
        {currentCards.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {displayCards}
        </div>
      ) : noBlogsMessage}
        {paginationControls}
      </div>
    </section>
  );
}
