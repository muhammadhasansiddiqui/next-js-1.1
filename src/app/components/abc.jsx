'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../../image/Logo.png';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="text-[#202020] bg-[#FFFFFF] body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
      <Image
        src={LogoImg}
        alt="Logo"
        layout="intrinsic" // Automatically adjusts based on the image's original dimensions
        width={134} // Still required for intrinsic layout
        height={45}
      />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font">
      <Link
        className={`mr-5 hover:text-[#85C349] ${
          pathname === '/' ? 'underline text-[#85C349] font-semibold' : ''
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`mr-5 hover:text-[#85C349] ${
          pathname === '/FarMarket' ? 'underline text-[#85C349] font-semibold' : ''
        }`}
        href="/FarMarket"
      >
        Farmers Market
      </Link>
      <Link
        className={`mr-5 hover:text-[#85C349] ${
          pathname === '/Producers' ? 'underline text-[#85C349] font-semibold' : ''
        }`}
        href="/Producers"
      >
        Producers
      </Link>
      <Link
        className={`mr-5 hover:text-[#85C349] ${
          pathname === '/HomeCooks' ? 'underline text-[#85C349] font-semibold' : ''
        }`}
        href="/HomeCooks"
      >
        Home Cooks
      </Link>
      <Link
        className={`mr-5 hover:text-[#85C349] ${
          pathname === '/Directory' ? 'underline text-[#85C349] font-semibold' : ''
        }`}
        href="/Directory"
      >
        Directory
      </Link>
    </nav>
    <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base text-white mt-4 md:mt-0">
      Button
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

  );
}
