import { NavLink } from "@/lib/navLinks";

interface MobileNavProps {
    links :NavLink[]
  isOpen: boolean
  onClose: () => void

}



export default function MobileNav({links, isOpen, onClose} : MobileNavProps){
  if(!isOpen) return null;
  return(
    <div className="fixed inset-0 z-50 md:hidden">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} /> 
<nav className="absolute left-0 top-0 h-full w-64 bg-white p-6">
 <button onClick={onClose}>×    </button>

 <ul className="flex flex-col gap-4 mt-8">

    {
        links.map((link) => (
            <li key={link.href}>
                <a href={link.href} onClick={onClose}>
                    {link.label}
                </a>
            </li>
        ))
    }
 
 </ul>
</nav>

    </div>
  )

}