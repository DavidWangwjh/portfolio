'use client'
import Image from 'next/image'
import { CONTACT_INFO } from '@/constants'
import Link from 'next/link'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-6 py-10 md:gap-20 md:flex-row min-h-dvh max-h-[1024px] items-center justify-center">
      <motion.div
        className="block rounded-full h-auto w-4/5 md:w-2/5"
        initial={{ scale: 0.5, y: '-250%' }}
        animate={{ y: 0, scale: 1 }}
        transition={{ 
          y: { type: "spring", stiffness: 200, damping: 10, duration: 1, ease: "easeOut" },
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
      <div className='flex flex-col items-center md:items-start'>
        <motion.h1 className="bold-32 sm:bold-36 md:bold-48 lg:bold-52" initial={{x: '200%'}} animate={{x: 0}} transition={{duration: 1.5}}>{"I'M DAVID WANG"}</motion.h1>
        <motion.p className="regular-16 lg:regular-22 pt-4 pb-2 w-full" initial={{x: '200%'}} animate={{x: 0}} transition={{delay: 1, duration: 1.5}}>
           Software Engineer, Web Developer, and App Developer
        </motion.p>
        <motion.p className="regular-16 lg:regular-22 pb-8 w-full" initial={{x: '200%'}} animate={{x: 0}} transition={{delay: 1, duration: 1.5}}>
           2023 UCSD CS Graduate
        </motion.p>
        <motion.ul className="flex flex-row gap-6 w-full justify-center md:justify-start" initial={{x: '200%'}} animate={{x: 0}} transition={{delay: 2, duration: 1.5}}>
          {CONTACT_INFO.map((link) => (
              <Link href={link.link} key={link.meta} target="_blank" rel="noopener noreferrer nofollow" className="cursor-none flex flex-row gap-2 items-center content-center w-max regular-16 group clickable">
                <Image 
                  src={link.image}
                  alt="camp"
                  width={30}
                  height={30}
                  className="transition-all group-hover:w-9 clickable"
                />
                {/* <span className='transition-all group-hover:font-bold hidden md:block clickable'>
                  {link.metaInfo}
                </span> */}
              </Link>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Hero