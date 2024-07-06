export default function Blog() {

    const cards =[
        {
            "blog-img":"/images/blog-images/blog-img1.svg",
            "heading":"The Link Between Gut Health and Mental...",
            "text":"Explore the intriguing connection between the gut microbiome and menta..."
        },
        {
            "blog-img":"/images/blog-images/blog-img2.svg",
            "heading":"The Link Between Gut Health and Mental...",
            "text":"Explore the intriguing connection between the gut microbiome and menta..."
        },
        {
            "blog-img":"/images/blog-images/blog-img3.svg",
            "heading":"The Link Between Gut Health and Mental...",
            "text":"Explore the intriguing connection between the gut microbiome and menta..."
        },
    ]


    return (
      <section className=" pb-16 overflow-hidden bg-white">
        <div className="flex flex-col justify-center items-center space-y-12">
          
          <img src="/images/blog-images/cat-ball.svg"/>
          <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-[32px]">Blogs</h1>
                <p className="text-[18px] text-gray-500">Reach out to us anytime, and we'll get back you as soon as possible!
</p>
                </div>
               
          
                <div className="flex space-x-3">
  {cards.map((card, index) => (
    <div
      key={index}
      className="w-[396px] h-[374px] rounded-lg flex flex-col justify-end"
      style={{ backgroundImage: `url(${card["blog-img"]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className="w-[352px] h-[122px] bg-white rounded-md p-5 space-y-1 m-6">
              <h1 className="text-[14px]">{card.heading}</h1>
              <p className="text-[12px] text-gray-400">{card.text}</p>
              <div className="flex space-x-2 items-center ">
              <a href="#" className="flex items-center mt-auto underline  text-[#05C067]  text-[14px]  ">Read More
          </a>
          <img src="/images/icons/arrow-icon.svg"/>
        
              </div>
        </div>
    
    </div>
  ))}
</div>

               
        </div>
      </section>
    );
  }
  