// components/Navbar.tsx
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className='flex items-center flex-wrap p-3 bg-slate-900'>
      <div className="inline-flex flex-grow w-auto">
        <ul className="inline-flex flex-row ml-auto w-full justify-evenly h-auto text-cyan-200">
          <li className="w-full px-3 py-2 rounded items-center justify-center hover:text-white hover:font-bold hover:underline hover:underline-offset-auto">
            <Link href="#top">Top</Link>
          </li>
          <li className="w-full px-3 py-2 rounded items-center justify-center hover:text-white hover:font-bold hover:underline hover:underline-offset-auto">
            <Link href="#about">About</Link>
          </li>
          <li className="w-full px-3 py-2 rounded items-center justify-center hover:text-white hover:font-bold hover:underline hover:underline-offset-auto">
            <Link href="#work">Work</Link>
          </li>
          <li className="w-full px-3 py-2 rounded items-center justify-center hover:text-white hover:font-bold hover:underline hover:underline-offset-auto">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
