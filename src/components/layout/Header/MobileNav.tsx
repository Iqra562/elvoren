"use client";

import { NavLink } from "@/lib/navLinks";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface MobileNavProps {
    links :NavLink[]
  isOpen: boolean
  onClose: () => void

}



export default function MobileNav({links, isOpen, onClose} : MobileNavProps){
    const [shouldRender, setShouldRender] = useState(isOpen);
    useEffect(() => {
        const body = document.body;
        const targetValue = isOpen ? "hidden" : "auto";
    if (body.style.overflow !== targetValue) {
      body.style.overflow = targetValue;
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpen])
 
useEffect(() => {
  if (isOpen) {
    setShouldRender(true);
  } else {
      setTimeout(() => {
          setShouldRender(false);
        }, 400); 
    }
}, [isOpen]);

if (!shouldRender) return null; 
  return(
    <div className="fixed inset-0 z-50 lg:hidden">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} /> 
         <div
            className={`pt-12 pb-8  bg-white overflow-y-auto w-[300px] min[425px]:w-[70%] md:w-[40%] min-[880px]:w-[35%] h-full ${
              isOpen ? "animate-slideInRight" : "animate-slideOutRight"
            }`}
           >

<nav className="h-full w-64 bg-white p-6">
            <button onClick={onClose} className="absolute top-4 right-4 text-3xl text-black cursor-pointer">
              <IoClose />
            </button>
            <div className="text-blue-500 text-2xl font-bold italic capitalize">
        elvoren 
      </div>
 <ul className="flex flex-col gap-y-6 mt-8 text-black">

    {
        links.map((link) => (
            <li key={link.href} className="text-base">
                <a href={link.href} onClick={onClose}>
                    {link.label}
                </a>
            </li>
        ))
    }
 
 </ul>
</nav>
          </div>

    </div>
  )

}