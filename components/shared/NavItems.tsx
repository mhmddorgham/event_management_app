'use client';
import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"



const NavItems = () => {
  const pathname = usePathname()
  return (
    <ul className="flex flex-col items-center md:flex-row w-full gap-5  md:flex-between  ">
        {headerLinks.map((link, idx)=>{
          return (
            <li key={idx} className={`${pathname === link.route ? "text-primary-500" : "" }`}>
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