'use client';
import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"



const NavItems = () => {
  const pathname = usePathname()
  
  return (
    <ul className="flex flex-col items-center md:flex-row w-full gap-5  md:flex-between  ">
        {headerLinks.map((link, idx)=>{
          const isActive = pathname === link.route;
          return (
            <li key={idx} className={`flex-center whitespace-nowrap p-medium-16 ${isActive? "text-primary-500" : "" }`}>
              <Link href={link.route}>
                {link.label}
              </Link>
            </li>
          )
        })}
    </ul>
  )
}

export default NavItems