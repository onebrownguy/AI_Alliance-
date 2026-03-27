"use client";

import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-xl font-bold text-[#185FA5]">
            Austin AI Alliance
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-[#185FA5] font-medium transition-colors">About</Link>
            <Link href="/memberships" className="text-gray-600 hover:text-[#185FA5] font-medium transition-colors">Memberships</Link>
            <Link href="/events" className="text-gray-600 hover:text-[#185FA5] font-medium transition-colors">Events</Link>
            <Link href="/news" className="text-gray-600 hover:text-[#185FA5] font-medium transition-colors">News</Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#185FA5] font-medium transition-colors">Contact</Link>
            <Link 
              href="/memberships" 
              className="bg-[#185FA5] text-white px-6 py-2.5 rounded-lg hover:bg-[#0C447C] transition-colors font-semibold"
            >
              Join
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="flex flex-col space-y-4 px-4">
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-[#185FA5] font-medium">About</Link>
            <Link href="/memberships" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-[#185FA5] font-medium">Memberships</Link>
            <Link href="/events" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-[#185FA5] font-medium">Events</Link>
            <Link href="/news" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-[#185FA5] font-medium">News</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-[#185FA5] font-medium">Contact</Link>
            <Link 
              href="/memberships" 
              onClick={() => setIsOpen(false)}
              className="bg-[#185FA5] text-white px-6 py-2.5 rounded-lg hover:bg-[#0C447C] transition-colors font-semibold text-center"
            >
              Join
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
