'use client'
import Image from 'next/image'
import { CONTACT_INFO } from '@/constants'
import Link from 'next/link'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { LegacyRef } from 'react'
import { GithubIcon, LinkArrow } from './Icon'
import ScrollIndicator from './ScrollIndicator'

type HeroProps ={
  innerRef: LegacyRef<HTMLElement>
}

const Hero = ({ innerRef }: HeroProps ) => {
  return (
    <section ref={innerRef} id='hero' className='padding-container w-full flex flex-col gap-6 lg:gap-20 lg:flex-row pt-[120px] pb-10 maxh:pt-10  maxh:min-h-dvh items-center justify-center bg-gradient-to-b from-[#CEE5FD] to-[#f5f5f5] dark:from-[#02294F] dark:to-[rgba(9,14,16,0)] bg-no-repeat bg-[length:100%_20%]'>
      <motion.div
        className="block rounded-full h-auto w-4/5 md:w-2/5 max-w-[250px] md:max-w-[600px]"
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
      <div className='flex flex-col items-center lg:items-start w-full md:w-4/5 lg:w-3/5'>
        <TypeAnimation className="bold-32 sm:bold-36 md:bold-48 lg:bold-52" sequence={['', 1000, 'I\'M DAVID WANG']} cursor={false} speed={20}/>
        <TypeAnimation className="regular-16 lg:regular-22 pt-4 pb-2 px-7 lg:px-0 text-center lg:text-start w-full" sequence={['', 2300, 'Software Engineer, Web Developer, and App Developer']} cursor={false} speed={80}/>
        <TypeAnimation className="max-md:hidden regular-16 lg:regular-18 pb-8 text-center lg:text-start w-full" sequence={['', 3500, 'University of California, San Diego | Computer Science B.S.']} cursor={false} speed={80}/>
        <TypeAnimation className="md:hidden regular-16 lg:regular-18 pb-8 text-center lg:text-start w-full" sequence={['', 3500, 'UCSD Computer Science B.S.']} cursor={false} speed={80}/>
        <motion.ul className="flex flex-row gap-4 md:gap-6 w-full justify-center lg:justify-start items-center" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 4, duration: 2.5}}>
          <Link href='/resume.html' target="_blank" rel="noopener noreferrer nofollow" className='flex items-center bg-black dark:bg-light text-light dark:text-dark py-2.5 px-4 gap-2 rounded-lg text-lg font-semibold hover:scale-110'>
            RESUME
            <LinkArrow className={''}/>
          </Link>
          {CONTACT_INFO.map((link) => (
              <Link href={link.link} key={link.meta} target="_blank" rel="noopener noreferrer nofollow" className="cursor-pointer flex items-center content-center justify-center regular-16 group clickable">
                <Image 
                  src={link.image}
                  alt="contact"
                  width={34}
                  height={34}
                  className="transition-all group-hover:scale-125 clickable"
                />
              </Link>
          ))}
        </motion.ul>
      </div>
      <ScrollIndicator />
    </section>
  )
}

export default Hero