'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import SwitchDark from "./SwitchDark"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-5 z-50 flex w-full flex-row items-center">
      <motion.div
        className="block rounded-full h-auto w-4/5 md:w-2/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
      >
        <SwitchDark />
      </motion.div>
      

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