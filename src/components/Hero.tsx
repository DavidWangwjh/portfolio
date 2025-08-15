'use client'
import { LegacyRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CONTACT_INFO } from '@/constants'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { LinkArrow } from './Icon'
import ScrollIndicator from './ScrollIndicator'

type HeroProps ={
  innerRef: LegacyRef<HTMLElement>
}

// Define your skills icons array
const skills = [
  { src: '/toolkit/python.png', alt: 'Python' },
  { src: '/toolkit/javascript.png', alt: 'JavaScript' },
  { src: '/toolkit/typescript.png', alt: 'TypeScript' },
  { src: '/toolkit/react.png', alt: 'React' },
  { src: '/toolkit/react-native.png', alt: 'React Native' },

]

const Hero = ({ innerRef }: HeroProps ) => {
  return (
    <section ref={innerRef} id='hero' className='padding-container w-full flex flex-col gap-6 lg:gap-20 lg:flex-row pt-[120px] pb-10 maxh:pt-10  maxh:min-h-dvh items-center justify-center bg-gradient-to-b from-lightBlue to-light dark:from-darkBlue dark:to-dark bg-no-repeat bg-[length:100%_20%]'>
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
            priority
        />
      </motion.div>
      <div className='flex flex-col items-center lg:items-start w-full md:w-4/5 lg:w-3/5'>
        <TypeAnimation className="bold-32 sm:bold-36 md:bold-48 lg:bold-52" sequence={['', 1000, 'I\'M DAVID WANG']} cursor={false} speed={40}/>
        <TypeAnimation className="regular-16 lg:regular-22 pt-4 pb-2 px-7 lg:px-0 text-center lg:text-start w-full text-darkGold dark:text-gold" sequence={['', 2000, 'Full Stack Software Engineer, AI Developer']} cursor={false} speed={90}/>
        <TypeAnimation className="max-md:hidden regular-16 lg:regular-18 text-center lg:text-start w-full" sequence={['', 2800, 'Master of Computer Science @University of Illinois Urbana-Champaign']} cursor={false} speed={90}/>
        <TypeAnimation className="max-md:hidden regular-16 lg:regular-18 pb-8 text-center lg:text-start w-full" sequence={['', 2800, 'B.S. Computer Science @University of California, San Diego']} cursor={false} speed={90}/>
        <TypeAnimation className="md:hidden regular-16 lg:regular-18 text-center lg:text-start w-full" sequence={['', 3000, 'Master of Computer Science @University of Illinois Urbana-Champaign']} cursor={false} speed={90}/>
        <TypeAnimation className="md:hidden regular-16 lg:regular-18 pb-8 text-center lg:text-start w-full" sequence={['', 3000, 'B.S. Computer Science @University of California, San Diego']} cursor={false} speed={90}/>
        <motion.ul className="flex flex-row gap-4 md:gap-6 w-full justify-center lg:justify-start items-center" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 3, duration: 2.5}}>
          <Link href='/resume/resume.html' target="_blank" rel="noopener noreferrer nofollow" className='flex items-center bg-black dark:bg-light text-light dark:text-dark py-2.5 px-4 gap-2 rounded-lg text-lg font-semibold hover:scale-110'>
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
      {/* <div className="marquee mt-4 w-full">
        <div className="marquee-content flex gap-6 items-center">
          {skills.map((skill, index) => (
            <Image
              key={index}
              src={skill.src}
              alt={skill.alt}
              width={40}
              height={40}
              className="shrink-0"
            />
          ))}
          {skills.map((skill, index) => (
            <Image
              key={index + skills.length}
              src={skill.src}
              alt={skill.alt}
              width={40}
              height={40}
              className="shrink-0"
            />
          ))}
        </div>
      </div> */}
      <ScrollIndicator />
      {/* CSS for the marquee effect */}
      {/* <style jsx>{`
        .marquee {
          overflow: hidden;
          position: relative;
        }
        .marquee-content {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style> */}
    </section>
  )
}

export default Hero