import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import MobileNav from "./MobileNav"
import NavItems from "./NavItems"


const Header = () => {
  return (
    <header className="w-full mx-auto bg-white">
      <div className="flex-between wrapper">
        <Link href={`/`} className="w-36">
          <Image src={"/assets/images/logo.svg"} alt="logo" width={125} height={125}/>
          
        </Link>

          <SignedIn>
            <nav className="hidden md:flex-between w-full max-w-xs ">
            <NavItems/>
            </nav>
          </SignedIn>
        <div className="flex justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
            <MobileNav/>

          </SignedIn>
          <SignedOut>
            <Button asChild size="lg" className="rounded-full">
            <Link href={`/sign-in`}>
              Sign In
            </Link>

            </Button>
            
          </SignedOut>


        </div>


      </div>
      

    </header>
  )
}

export default Header