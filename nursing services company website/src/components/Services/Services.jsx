import React from "react";
//import img1 from "src/assets/1"
import img1 from "../../assets/images/1.jpeg";
import img2 from "../../assets/images/2.jpeg";
import img3 from "../../assets/images/3.jpeg";
import img4 from "../../assets/images/4.jpeg";
import img5 from "../../assets/images/5.jpeg";
import img6 from "../../assets/images/6.jpeg";
export default function Services() {
  return (
    <>
      <div className="bg-gray-200 px-2 py-10">
        <div id="features" className="mx-auto max-w-6xl">
          <p className="text-center text-base font-semibold leading-7 text-primary-500">
            Our Services
          </p>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <span className="text-[#A120A4]">Qualified</span> Nursing Staff You Can Trust
          </h2>
          <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img src={img1} alt="" className="mx-auto h-75 w-75" />
              <h3 className="my-3 font-display font-medium text-xl">
                Hospital Nurse Staffing
              </h3>
              <p className="mt-1.5 text-l leading-6 text-secondary-500">
                We provide highly qualified and licensed nurses for hospitals,
                ensuring quality patient care and efficient medical support
                across all shifts.
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img src={img2} alt="" className="mx-auto h-75 w-75" />
              <h3 className="my-3 font-display font-medium text-xl">
                Homecare Nursing
              </h3>
              <p className="mt-1.5 text-l leading-6 text-secondary-500">
                Compassionate and professional nurses available for in-home
                patient care, including post-surgery recovery, elderly care, and
                long-term assistance.
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img src={img3} alt="" className="mx-auto h-75 w-75" />
              <h3 className="my-3 font-display font-medium text-xl">
                School & Nursery Nurses
              </h3>
              <p className="mt-1.5 text-l leading-6 text-secondary-500">
                Skilled nursing staff for schools and childcare centers to
                promote child health, administer medications, and manage
                emergencies.
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img src={img4} alt="" className="mx-auto h-75 w-75" />
              <h3 className="my-3 font-display font-medium text-xl">
                Clinic & Polyclinic Support
              </h3>
              <p className="mt-1.5 text-l leading-6 text-secondary-500">
                We offer flexible staffing solutions for clinics and outpatient
                centers, covering both short-term and long-term needs.
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img src={img5} alt="" className="mx-auto h-75 w-75" />
              <h3 className="my-3 font-display font-medium text-xl">
                Construction Site Medical Support
              </h3>
              <p className="mt-1.5 text-l leading-6 text-secondary-500">
                On-site nursing staff trained in occupational safety and first
                aid to ensure health standards are met in high-risk work
                environments.
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img src={img6} alt="" className="mx-auto h-75 w-75" />
              <h3 className="my-3 font-display font-medium text-xl">
                Temporary & Emergency Staffing
              </h3>
              <p className="mt-1.5 text-l leading-6 text-secondary-500">
                Need urgent staffing? Our team is ready to supply qualified
                nurses on short notice to help you maintain uninterrupted care.{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
