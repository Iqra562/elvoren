import { NavLink } from "@/lib/navLinks"

interface DesktopNavProps {
    links :NavLink[]
    onMenuClick: () => void
}


export default function DesktopNav({links,onMenuClick} : DesktopNavProps){
  return(
  <nav className="hidden md:flex items-center justify-between py-6 bg-white shadow px-10">
  <span className="text-black ">LOGO</span>
  <ul className="flex space-x-10">
 {links.map(link => (
          <li key={link.href} className="text-black">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
  </ul>

  <span className="text-black">Login</span>
  <button className="md:hidden" onClick={onMenuClick}>
          ☰
  </button>
  </nav>
  )
}