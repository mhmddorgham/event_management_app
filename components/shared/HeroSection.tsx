import { HeroSectionCaption } from "@/constants"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="w-full bg-primary-50 bg-dotted-pattern  bg-center py-5 md:py-12">
      <div className="wrapper w-full flex-center flex-col md:flex-row gap-0 md:gap-14 ">
        <div className="w-full flex-col justify-center gap-8 p-3">
          <h1 className="h1-bold">{HeroSectionCaption.title}</h1>
          <p className="p-regular-20 md:p-regular-24 py-4 mt-5">{HeroSectionCaption.description}</p>
          <Button asChild className="py-7 rounded-full px-7 p-regular-16 my-6 w-full md:w-fit ">
            <Link href={`#events`}>
            {HeroSectionCaption.button}
            </Link>
          </Button>
        </div>
        
          <Image src="/assets/images/hero.png" alt="hero" className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
           width={1000}
           height={1000} />
      

      </div>

    </section>
  )
}

export default HeroSection