import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Contact</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-gray-600">
          Want to contact us? Choose an option below and we’ll be happy to show
          you how we can support your healthcare staffing needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold text-gray-900">Contact Us</h2>
          <p className="max-w-sm mt-4 mb-4 text-gray-600">
            Have something to say? We’re here to help. Fill out the form or
            contact us directly.
          </p>

          <div className="flex items-center mt-8 space-x-2 text-gray-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
            <span>Muaither - Flat 2, <span className="font-bold">B</span>ldg 6, Street 652, Zone 53, Doha, Qatar</span>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-gray-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <a href="mailto:saweranursing@gmail.com">
              saweranursing@gmail.com
            </a>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-gray-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <a href="tel:+97412345678">+974 30603629</a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form>
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                autoComplete="off"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-500 text-gray-900 rounded-md outline-none bg-white focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="off"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-500 text-gray-900 rounded-md outline-none bg-white focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Your Message"
                name="message"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-500 text-gray-900 bg-white rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
