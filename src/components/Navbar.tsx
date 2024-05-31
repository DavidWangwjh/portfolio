'use client'
import { NAV_LINKS } from "@/constants"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import SwitchDark from "./SwitchDark"
import { motion } from "framer-motion"

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );

  return (
    <motion.nav className={`fixed z-[100] flex w-full flex-row items-center shadow-lg p-4 bg-dark dark:bg-light text-light dark:text-dark transition-transform duration-300 ${
      scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
    }`} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}>
      <motion.div
        className="block rounded-full h-auto w-4/5 md:w-2/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
      >
        <SwitchDark />
      </motion.div>

      <ul className="hidden h-full gap-12 md:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <Image 
        src="menu.svg"
        alt="menu"
        width={30}
        height={30}
        className="inline-block cursor-pointer md:hidden"
      />
    </motion.nav>
  )
}

export default Navbar