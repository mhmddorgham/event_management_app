import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className=" w-ful border-t">
      <div className="wrapper flex-between flex flex-col sm:flex-row text-center gap-4 p-5">
        <Link href={`/`}>
          <Image src={`/assets/images/logo.svg`}
          alt="logo" 
          width={128}
          height={38}/>
        </Link>
        <p>&copy; 2024 Evently. All Right Reserved.</p>
      </div>

    </footer>
  )
}

export default Footer