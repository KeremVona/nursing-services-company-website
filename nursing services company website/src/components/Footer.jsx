import React from "react";

export default function Footer() {
  return (
    <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            class="inline-flex items-center"
          >
            <svg
              class="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              stroke-linejoin="round"
              stroke-width="2"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Sawera Nursing Services
            </span>
          </a>
          <div class="mt-6 lg:max-w-sm">
            <p class="text-sm text-gray-800">
              We specialize in providing highly qualified and licensed nursing
              staff across Doha, Qatar.
            </p>
            <p class="mt-4 text-sm text-gray-800">
              From hospitals and clinics to schools and homecare, we are
              committed to delivering compassionate and professional healthcare
              support.
            </p>
          </div>
        </div>
        <div class="space-y-2 text-sm">
          <p class="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div class="flex">
            <p class="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +974 30603629
            </a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:saweranursing@gmail.com"
              aria-label="Our email"
              title="Our email"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              saweranursing@gmail.com
            </a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Muaither - Flat 2, Bldg 6, Street 652, Zone 53, Doha, Qatar
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-sm text-gray-600">
          © Copyright 2025 Sawera Nursing Services. All rights reserved.
        </p>
      </div>
    </div>
  );
}
