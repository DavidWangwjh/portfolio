import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import SwitchDark from "./SwitchDark"

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-5 z-50 flex w-full flex-row items-center">
      <SwitchDark />

      {/* <ul className="hidden h-full gap-12 md:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul> */}

      {/* <div className="md:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */}

      {/* <Image 
        src="menu.svg"
        alt="menu"
        width={30}
        height={30}
        className="inline-block cursor-pointer md:hidden"
      /> */}
    </nav>
  )
}

export default Navbar