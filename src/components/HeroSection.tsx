export default function HeroSection() {
    return (
      <div className="pt-32 pb-16 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            <div className="px-4">
              <div className="max-w-2xl mx-auto lg:mx-0 lg:flex-auto">
                <div className="flex items-center text-base text-gray-600 gap-x-4">
                  <span className="font-medium text-gray-900">Excellent</span>
                  <img src="/images/five-stars.svg" alt="" />
                  <span className="flex items-center justify-center gap-x-1">
                    <img src="/images/single-star.svg" className="w-5 h-5" />
                    <p className="mt-1 font-medium text-gray-900">Trustpilot</p>
                  </span>
                </div>
                <h1 className="max-w-xl mt-10 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                  Data Extraction Excellence at Scale
                </h1>
                <p className="mt-6 text-lg font-normal leading-8 text-gray-600">
                  Gather data efficiently with the industry-leading proxy network
                  and enjoy limitless web scraping solutions on the most intense
                  tasks.
                </p>
                <div className="flex flex-col items-center gap-6 mt-10 sm:flex-row">
                  <a
                    href="#"
                    className="justify-center w-full px-10 py-4 text-base font-semibold text-center text-white rounded-md shadow-sm bg-primary hover:bg-primary/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:w-fit"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-gray-900 bg-white border border-gray-300 rounded-md gap-x-2 hover:bg-gray-50 lg:w-fit"
                  >
                    <img src="/images/google-icon.svg" alt="" /> Sign up with
                    Google
                  </a>
                </div>
                <div className="flex items-center gap-4 mt-10">
                  <p className="inline-flex items-center text-base text-gray-600">
                    <img src="/images/check.svg" alt="" /> Feature 1
                  </p>
                  <p className="inline-flex items-center text-base text-gray-600">
                    <img src="/images/check.svg" alt="" /> Feature 1
                  </p>
                  <p className="inline-flex items-center text-base text-gray-600">
                    <img src="/images/check.svg" alt="" /> Feature 1
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mx-auto max-w-7xl">
              <img src="/images/hero-illustration.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }