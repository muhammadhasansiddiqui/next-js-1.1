"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../image/logo.png";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
 <div className="container px-5  mx-auto flex items-center flex-wrap border-b-2 border-gray-300">
  <div className="w-64 flex-shrink-0 mx-auto text-center md:text-left">
    <a className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
      <Image src={LogoImg} alt="logo" width={150} height={150} />
    </a>
  </div>
  <div className="flex-grow flex flex-wrap justify-center md:pl-20 mt-10 md:mt-0">
    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
      <nav className="list-none">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Home</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
      <nav className="list-none">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Farmers Market</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
      <nav className="list-none">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Producers</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
      <nav className="list-none">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Home Cooks</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
      <nav className="list-none">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Directory</a>
        </li>
      </nav>
    </div>
  </div>
  <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
    <a className="text-gray-500">
      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    </a>
    <a className="ml-3 text-gray-500">
      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    </a>
    <a className="ml-3 text-gray-500">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
      </svg>
    </a>
    <a className="ml-3 text-gray-500">
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx={4} cy={4} r={2} stroke="none" />
      </svg>
    </a>
  </span>
</div>

<br/>
<div className="bg-gray-100">
  <div className="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
    <p className="text-gray-500 text-sm text-center sm:text-left">
      © 2024 Culineer. All rights reserved.
    </p>
    <div className="flex space-x-4 text-sm text-gray-500">
      <a href="/privacy-policy" className="hover:text-gray-800">Privacy Policy</a>
      <a href="/terms-conditions" className="hover:text-gray-800">Terms & Conditions</a>
    </div>
  </div>
</div>

    </footer>
  );
}

export default Footer;
