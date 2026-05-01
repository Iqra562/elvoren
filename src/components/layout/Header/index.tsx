"use client"
import { useState } from "react"
import { navLinks } from "@/lib/navLinks"   // ← single source
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <DesktopNav links={navLinks} onMenuClick={() => setIsOpen(true)} />
      <MobileNav  links={navLinks} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}