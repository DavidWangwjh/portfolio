'use client'
import React, {useRef, LegacyRef} from 'react';
import SkillsContainer from './SkillsContainer';
import { EXPERIENCES, EXPERIENCE } from '@/constants';
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

type ExperienceProps ={
  innerRef: LegacyRef<HTMLElement>
}

type ExperienceItemProps = {
  exp: EXPERIENCE;
};

const ExperienceItem = ({ exp }: ExperienceItemProps) => {
  const ref = useRef(null);
  return(
    <li ref={ref} className="flex flex-col my-8 first:mt-0 last:mb-0 w-[90%] lg:w-4/5 gap-1.5">
      <LiIcon reference={ref}/>
      <motion.div 
        initial={{y:80}}
        whileInView={{y:0}}
        transition={{duration:0.8, type:'spring'}}
        className='w-full'
      >
        <div className='md:flex'>
          <h2 className='bold-20 lg:bold-24'>{exp.title}</h2>
          <h2 className='bold-20 lg:bold-24'><span className='md:ml-2 bold-16 lg:bold-20'>@</span>{exp.company}</h2>
        </div>
        <h2 className='regular-14 lg:regular-16 text-dark/60 dark:text-light/60 mb-2'>{exp.duration} | {exp.location}</h2>
        <p className='regular-12 mb-2'>{exp.description}</p>
        <SkillsContainer skills={exp.skills} justify='justify-start' main_theme='dark'/>
      </motion.div>
    </li>
  )
}

const Experience = ({ innerRef }: ExperienceProps ) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  )
  return (
    <section ref={innerRef} id='experience' className="flex flex-col items-center pt-[80px]">
      <motion.h1 className="bold-28 sm:bold-32 md:bold-40 w-3/4 text-center mb-10 underline underline-offset-4" initial={{opacity: 0, x: -150}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.5, delay: 0, ease: 'easeInOut'}} viewport={{once: true}}>Experience</motion.h1>
      <div ref={ref} className='w-4/5 lg:w-3/4 mx-auto relative'>
        <motion.div 
          className='absolute -left-4 md:-left-2 lg:left-9 top-4 w-[3px] md:w-[4px] h-full bg-dark dark:bg-light origin-top'
          style={{scaleY: scrollYProgress}}
        />
        <ul className='flex flex-col w-full items-center justify-between lg:ml-4'>
          {EXPERIENCES.map((exp, index) => (
            <ExperienceItem key={index} exp={exp}/>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
