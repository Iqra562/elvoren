"use client"

import { NavLink } from "@/lib/navLinks"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

interface DesktopNavProps {
  links: NavLink[]
  onMenuClick: () => void
}


export default function DesktopNav({ links, onMenuClick }: DesktopNavProps) {
  const pathname = usePathname();
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [atTop, setAtTop] = useState(true);

// Remove useState for lastScrollY, use a ref instead
const lastScrollY = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setAtTop(currentScrollY === 0);

    if (currentScrollY <= 1000) {
      setShowHeader(true);
    } else if (currentScrollY > lastScrollY.current) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    lastScrollY.current = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
  <header
  className={`w-full  top-0 z-50  flex justify-between items-center transition-transform duration-300 py-5 ${
    atTop
      ? "translate-y-0 fixed  "
      : showHeader
      ? "translate-y-0 bg-yellow-100/80 text-white fixed"
      : "-translate-y-full bg-red-100/80 text-black"
  }`}
>
  <div className="container flex justify-between">

      <button
        onClick={onMenuClick}
        className="text-3xl focus:outline-none mobile-menu-button cursor-pointer lg:hidden mobile-menu-wrapper"
      // aria-label="Hamburger icon for website’s menu"
      // aria-controls="main-navigation"
      // aria-expanded={isMenuOpen}
      >
        <MdMenu className="text-[#000]" />
      </button>
      <div className="text-blue-500 text-2xl font-bold italic capitalize">
        elvoren 
      </div>
      <nav className=" hidden lg:flex xl:flex-row justify-center items-center  custom-nav space-x-10">
        <ul className=" space-x-4 xl:space-x-10 custom-ul flex">
          {links.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer transition text-sm uppercase text-black/65"
            >
              <Link
                href={item.href}
                className={`transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#678dff] after:rounded-full after:transition-all after:duration-300 group-hover:after:w-full flex  items-center space-x-2  ${pathname === item.href
                    ? "after:w-full"
                    : "after:w-0"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>


      </nav>

      <div className="flex space-x-3 ">
        <HiOutlineShoppingBag className="text-black text-xl" />
        <FaRegHeart className="text-black text-xl" />

      </div>

  </div>


    </header>
  )
}