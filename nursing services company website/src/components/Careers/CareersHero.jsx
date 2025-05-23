import React from "react";

export default function CareersHero() {
  return (
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-30">
      <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Join a Team that</span>{" "}
            <span className="block text-indigo-600 xl:inline">
              Cares Deeply
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            At Sawera Nursing Services, we’re always looking for compassionate
            and licensed professionals to deliver exceptional care across Qatar.
            Whether you're a nurse, caregiver, or medical assistant, we have a
            place for you.
          </p>

          {/* Button Section */}
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/nursing-services-company-website/about-us"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
              >
                About Us
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/nursing-services-company-website/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-md shadow-md"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2850&q=80"
            alt="Nursing team"
          />
        </div>
      </div>
    </section>
  );
}
