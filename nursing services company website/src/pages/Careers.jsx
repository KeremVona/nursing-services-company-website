import React from "react";
import Navbar from "../components/Navbar";
import CareersHero from "../components/Careers/CareersHero";
import WhyWorkWithUs from "../components/Careers/WhyWorkWithUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Careers() {
  return (
    <>
      <Navbar />
      <CareersHero />
      <WhyWorkWithUs />
      <Contact />
      <Footer />
    </>
  );
}
