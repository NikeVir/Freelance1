export default function LogoSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-light leading-8   text-gray-900">
          Supported browsers / features / languages / sites
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-10 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-10">
          <div className="flex flex-col space-y-4 justify-center items center">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/icons/figma-icon.svg"
              alt="Figma"
              width={158}
              height={48}
            />
            <p className="text-[12px] ml-5 ">FIGMA</p>
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/icons/react-icon.svg"
              alt="React"
              width={158}
              height={48}
            />
            <p className="text-[12px]">REACT</p>
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/icons/kotlin-icon.svg"
              alt="Kotlin"
              width={158}
              height={48}
            />
            <p className="text-[12px]">KOTLIN</p>
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/images/icons/aws-icon.svg"
              alt="AWS"
              width={158}
              height={48}
            />
            <p className="text-[12px]">AWS</p>
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/icons/nodeJS-icon.svg"
              alt="Node-js"
              width={158}
              height={48}
            />
            <p className="text-[12px]">JAVA SCRIPT</p>
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/icons/digital-ocean-icon.svg"
              alt="Digital Ocean"
              width={158}
              height={48}
            />
            <p className="text-[12px]">DIGITAL Ocean</p>
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/icons/adobe-icon.svg"
              alt="Adobe XD"
              width={158}
              height={48}
            />
            <p className="text-[12px]">ADOBE XD</p>
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/icons/airtable-icon.svg"
              alt="Airtable"
              width={158}
              height={48}
            />
            <p className="text-[12px]">IPSUM</p>
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/icons/gitlab.svg"
              alt="Gitlab"
              width={158}
              height={48}
            />
            <p className="text-[12px]">LOREM</p>
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/icons/mongoDB-icon.svg"
              alt="MongoDB"
              width={158}
              height={48}
            />
            <p className="text-[12px]">MONGO DB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
