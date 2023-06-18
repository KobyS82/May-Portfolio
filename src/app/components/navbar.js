// components/Navbar.tsx
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="p-3 w-full bg-slate-900 flex justify-evenly text-cyan-200">
        <Link
          className="px-3 py-2 rounded items-center hover:text-white hover:font-bold hover:underline hover:underline-offset-auto"
          href="/"
        >
          Top
        </Link>
        <Link
          className="px-3 py-2 rounded items-center hover:text-white hover:font-bold hover:underline hover:underline-offset-auto"
          href="/about"
        >
          About
        </Link>
        <Link
          className="px-3 py-2 rounded items-center hover:text-white hover:font-bold hover:underline hover:underline-offset-auto"
          href="/work"
        >
          Work
        </Link>
        <Link
          className="px-3 py-2 rounded items-center hover:text-white hover:font-bold hover:underline hover:underline-offset-auto"
          href="/contact"
        >
          Contact
        </Link>
    </nav>
  );
};
export default Navbar;
