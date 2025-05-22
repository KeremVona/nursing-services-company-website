import React, { useRef } from "react";
import img1 from "../../assets/images/111.jpg";

export default function AboutUsComponent({ onScroll }) {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Sawera Nursing Services is a Doha, Qatar-based healthcare staffing
              agency that provides qualified, licensed nurses to hospitals,
              clinics, schools, and private care settings. We are committed to
              delivering dependable, compassionate, and skilled nursing manpower
              wherever it's needed.
            </p>
            <div className="mt-8">
              <a
                href="#why-choose-us-container" onClick={onScroll}
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={img1}
              alt="About Us"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
