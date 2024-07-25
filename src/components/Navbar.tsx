'use client'
import { NAV_LINKS } from "@/constants"
import { useEffect, useState } from "react"
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import { MoonIcon, SunIcon } from "./Icon"

type NavbarProps ={
  activeSection: string
}

const Navbar = ({ activeSection } : NavbarProps) => {
  const [mode, setMode] = useThemeSwitcher();

  const [currentSection, setCurrentSection] = useState(activeSection);
  const [targetSection, setTargetSection] = useState('');

  useEffect(() => {
    if (targetSection == ''){
      setCurrentSection(activeSection)
    }
    if (targetSection == activeSection){
      setTargetSection('')
    }
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    setTargetSection(sectionId)
    setCurrentSection(sectionId)
    const sectionElement = document.getElementById(sectionId);
    sectionElement?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <header className='flex justify-center items-center animate-dropIn fixed top-4 bg-transparent z-[99] w-full px-10'>
      <div className='flex justify-center items-center pl-6 pr-16 md:px-28 lg:px-48 py-4 bg-light dark:bg-dark bg-opacity-50 rounded-5xl border-[1px] border-[#ccc] dark:border-[#555]  backdrop-blur-md shadow-lg'>
        <ul className='flex gap-6 md:gap-12'>
          {NAV_LINKS.map((link) => (
            <button 
              key={link.key} 
              className='group relative regular-14 md:regular-20 cursor-pointer text-dark dark:text-light'
              onClick={() => scrollToSection(link.key)}
            >
              {link.label}
              <span className={`group-hover:w-full transition-[width] ease duration-300 h-[1px] inline-block bg-black dark:bg-light absolute left-0 -bottom-0.5 ${currentSection == link.key ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </button>
          ))}
        </ul>
        <button onClick={() => setMode(mode == 'light'? 'dark' : 'light')} className="absolute right-3 flex items-center justify-center p-1 rounded-full dark:bg-light">
          {
            mode == 'dark'? <MoonIcon className='fill-dark' /> : <SunIcon className='fill-dark' />
          }
        </button>
      </div>
    </header>

  )
}

export default Navbar