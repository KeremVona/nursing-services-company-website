import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/AboutUs/WhyChooseUs";
import CallToAction from "../components/AboutUs/CallToAction";
import AboutUsComponent from "../components/AboutUs/AboutUsComponent";
import Footer from "../components/Footer";

export default function AboutUs() {
  const targetRef = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <AboutUsComponent onScroll={handleScroll} />
      <WhyChooseUs ref={targetRef} />
      <CallToAction />
      <Footer />
    </>
  );
}
