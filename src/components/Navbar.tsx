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
    <motion.nav className={`fixed z-[100] flex w-full flex-row justify-center items-center p-8 md:p-6 rounded-b-[50px] bg-dark dark:bg-light text-light dark:text-dark transition-transform ${
      scrollDirection === "down" ? "-translate-y-full duration-300" : "translate-y-0 duration-300 shadow-lg"
    }`} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}>
      <motion.div
        className="block rounded-full h-auto content-start fixed left-5 top-3"
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

      <div className='fixed right-5 top-3 w-9 h-9 rounded-full bg-[#aaa] flex justify-center items-center md:hidden cursor-pointer'>
        <Image 
          src="menu.svg"
          alt="menu"
          width={22}
          height={22}
        />
      </div>
      
    </motion.nav>
  )
}

export default Navbar