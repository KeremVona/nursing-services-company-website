import React from "react";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/AboutUs/WhyChooseUs";
import CallToAction from "../components/AboutUs/CallToAction";
import AboutUsComponent from "../components/AboutUs/AboutUsComponent";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutUsComponent />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </>
  );
}
