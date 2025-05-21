import React from "react";
import img1 from "../../assets/images/11.jpg";
import img2 from "../../assets/images/22.jpg";
import img3 from "../../assets/images/33.jpg";
import img4 from "../../assets/images/44.jpg";

export default function WhyChooseUs() {
  return (
    <div className="text-center p-8">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Why Choose Us?
      </h2>

      {/* Feature 1 */}
      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src={img1}
            alt="integration"
            className="inline-block rounded shadow-lg border border-gray-200 max-h-120"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Fast & Simple Onboarding
          </h3>
          <p className="sm:text-lg mt-6">
            We make it easy to get started. Our streamlined onboarding process
            ensures your organization can start receiving professional nursing
            support quickly and efficiently — without unnecessary paperwork or
            delays.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src={img2}
            alt="collaboration"
            className="inline-block rounded shadow-lg border border-gray-200 max-h-120"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Reliable, Ongoing Support
          </h3>
          <p className="sm:text-lg mt-6">
            We don’t just provide staff — we become your long-term partner. Our
            team maintains clear, responsive communication and works with your
            schedule, your needs, and your standards to ensure the best fit for
            every role.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src={img3}
            alt="error prevention"
            className="inline-block rounded shadow-lg border border-gray-200 max-h-120 ml-20"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Licensed & Verified Nurses
          </h3>
          <p className="sm:text-lg mt-6">
            We only supply qualified, experienced, and licensed nurses who meet
            local health regulations. Whether you need short-term coverage or
            long-term staff, you can trust the competency and professionalism of
            every team member we provide.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src={img4}
            alt="bulk services"
            className="inline-block rounded shadow-lg border border-gray-200 max-h-120"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Flexible & Scalable Staffing
          </h3>
          <p className="sm:text-lg mt-6">
            From a single caregiver to a full medical team, we can meet the size
            and scope of your needs. Whether you're a hospital, clinic, homecare
            provider, school, or construction site — we have the capacity to
            scale with you.
          </p>
        </div>
      </div>
    </div>
  );
}
