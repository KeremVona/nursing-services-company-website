import React from "react";
import img1 from "../assets/images/1111.jpg";

export default function Hero() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div class="text-4xl lg:text-6xl font-bold">
                Sawera<span class="text-[#A120A4]"> Nursing </span>Services
              </div>
              <div>
                <img
                  src="https://image.flaticon.com/icons/svg/497/497348.svg"
                  alt=""
                  className="w-8"
                />
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Reliable <span className="text-[#A120A4]">Nursing Staff</span>{" "}
                  for Every Need
                </h1>
                <div className="w-20 h-2 bg-[#A120A4] my-4"></div>
                <p className="text-xl mb-10">
                  We provide qualified, licensed nursing professionals to
                  hospitals, clinics, schools, homecare, and more. Whether you
                  need full-time, part-time, or temporary staff, we deliver
                  compassionate care and clinical excellence.
                </p>
                <button className="bg-[#3DCC1D] text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  Get in Touch
                </button>
              </div>
            </header>
          </div>
        </div>
        <img
          src={img1}
          alt=""
          className="w-full sm:w-4/12 h-64 sm:h-screen object-cover rounded-2xl"
        />
      </div>
    </>
  );
}
