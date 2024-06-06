'use client'
import Image from 'next/image'
import { CONTACT_INFO } from '@/constants'
import Link from 'next/link'
import { motion } from "framer-motion"
import HighlightText from './HighlightText'
import { TypeAnimation } from 'react-type-animation'
import { LegacyRef } from 'react'

type HeroProps ={
  innerRef: LegacyRef<HTMLElement>
}

const Hero = ({ innerRef }: HeroProps ) => {
  return (
    <section ref={innerRef} id='hero' className="max-container padding-container flex flex-col gap-6 py-10 md:gap-20 md:flex-row min-h-dvh max-h-[1024px] items-center justify-center">
      <motion.div
        className="block rounded-full h-auto w-4/5 md:w-2/5"
        initial={{ y: '-250%', scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ 
          y: { type: "spring", stiffness: 200, damping: 10, duration: 1, ease: "easeInOut" },
          scale: { delay: 1.2, duration: 2, ease: "easeInOut" }
        }}
      >
        <Image 
            src="/assets/profile.jpg"
            alt="profile picture"
            width={300}
            height={300}
            className="rounded-full w-full border-8"
        />
      </motion.div>
      <div className='flex flex-col items-center md:items-start w-full md:w-3/5'>
        <TypeAnimation className="bold-32 sm:bold-36 md:bold-48 lg:bold-52" sequence={['', 1000, 'I\'M DAVID WANG']} cursor={false} speed={20}/>
        <TypeAnimation className="regular-16 lg:regular-22 pt-4 pb-2 px-7 md:px-0 text-center md:text-start w-full" sequence={['', 2300, 'Software Engineer, Web Developer, and App Developer']} cursor={false} speed={80}/>
        <TypeAnimation className="max-md:hidden regular-16 lg:regular-18 pb-8 text-center md:text-start w-full" sequence={['', 3500, 'University of California, San Diego | Computer Science B.S.']} cursor={false} speed={80}/>
        <TypeAnimation className="md:hidden regular-16 lg:regular-18 pb-8 text-center md:text-start w-full" sequence={['', 3500, 'UCSD Computer Science B.S.']} cursor={false} speed={80}/>

        <motion.ul className="flex flex-row gap-4 w-full justify-center md:justify-start" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 4, duration: 2.5}}>
          {CONTACT_INFO.map((link) => (
              <Link href={link.link} key={link.meta} target="_blank" rel="noopener noreferrer nofollow" className="cursor-pointer flex flex-row items-center content-center justify-center regular-16 group clickable w-10 h-10">
                <Image 
                  src={link.image}
                  alt="contact"
                  width={32}
                  height={32}
                  className="transition-all group-hover:w-9 group-hover:h-9 clickable"
                />
              </Link>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Hero