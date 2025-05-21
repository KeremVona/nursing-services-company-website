import React from "react";

export default function CallToAction() {
  return (
    <section className="mt-12 lg:mt-24">
      <div className="bg-[#A120A4] text-white -skew-y-1">
        <div className="container mx-auto skew-y-1">
          <div className="flex flex-col items-center py-10 text-center lg:py-20">
            <div className="w-full px-4 lg:w-1/2 lg:px-0">
              {/* Title */}
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                  Want to contact us?
                </h2>
                <p className="text-lg lg:text-xl opacity-80">
                  Send an email and let's talk!
                </p>
              </div>

              {/* Search Box */}
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
        </div>
      </div>
    </section>
  );
}
