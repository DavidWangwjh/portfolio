'use client'
import { NAV_LINKS } from "@/constants"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import SwitchDark from "./SwitchDark"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

type NavbarProps ={
  activeSection: string
}

const Navbar = ({ activeSection } : NavbarProps) => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [displaySideMenu, setDisplaySideMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    setCurrentSection(activeSection)
  }, [activeSection])

  const scrollToSection = (toSection: string) => {
    setDisplaySideMenu(false);
    const section = document.getElementById(toSection);
    section?.scrollIntoView({
        behavior: 'smooth'
    });
    setCurrentSection(toSection);
  };

  const handleScroll = () => {
    setDisplaySideMenu(false);
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY !== 0) {
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

  const toggleMenu = () => {
    if (displaySideMenu) {
      setDisplaySideMenu(false);
    } else {
      setDisplaySideMenu(true);
    }
  }

  return (
    <motion.nav 
      className={`fixed z-[100] flex flex-row w-full justify-center items-center h-[60px] bg-[#888] text-light dark:text-dark transition-transform 
                  ${scrollDirection == 'down'? '-translate-y-full duration-300' : 'translate-y-0 duration-300'}
                  ${displaySideMenu? 'max-md:h-[120px]' : ''}
                  `} 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 3}}
    >
      <div className="absolute left-5 top-4"><SwitchDark /></div>

      <div className='flex flex-row gap-[6px] items-center max-md:absolute right-5 top-3'>
        <ul className={`flex flex-row gap-12 ${displaySideMenu? 'max-md:flex-col max-md:gap-1' : ''}`}>
          {NAV_LINKS.map((link) => (
            <button 
              key={link.key} 
              className={`regular-18 cursor-pointer transition-all text-black text-right hover:font-bold max-md:underline max-md:underline-offset-4
                          ${currentSection === link.key ? 'underline underline-offset-4 bold-18' : displaySideMenu? '' : 'max-md:hidden'}`}
              onClick={() => scrollToSection(link.key)}
            >
              {link.label}
            </button>
          ))}
        </ul>

        <button 
          className='md:hidden w-5 h-8 justify-center items-center self-start cursor-pointer'
          onClick={() => toggleMenu()}
        >
          <Image 
            src='/assets/down-caret.png'
            alt='selector'
            width={20}
            height={20}
          />
        </button>
        
      </div>
    </motion.nav>
  )
}

export default Navbar