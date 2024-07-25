'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SkillsContainer from './SkillsContainer';
import { PROJECTS, PROJECT } from '@/constants';
import { motion } from 'framer-motion'
import clsx from 'clsx';
import ImageSlideShow from './ImageSlideShow';
import { LegacyRef } from 'react'

const FramerImage = motion(Image)

type ProjectsProps ={
  innerRef: LegacyRef<HTMLElement>
}

type ProjectItemProps = {
  proj: PROJECT;
};

const ProjectItem = ({ proj }: ProjectItemProps) => {
  return(
    <motion.div 
      className='relative w-full'
      initial={{scale: 0.7}}
      whileInView={{scale: 1}}
      transition={{duration: 1, type:'spring'}}
    >
      <li className="relative w-full rounded-2xl flex flex-col border-2 border-dark dark:border-light bg-light dark:bg-dark z-20 p-2">
          {/* <ImageSlideShow images={proj.images}/> */}
        <div className='w-full max-h-[300px] rounded-2xl overflow-hidden'>
          <FramerImage src={proj.image} alt='cover img' width={300} height={220} className='w-full h-auto' whileHover={{scale: 1.05}} transition={{duration: 0.2}}/>
        </div>
        <div className="p-5 pb-3">
          <h2 className='bold-24 lg:bold-28 mb-2'>{proj.title}</h2>
          <p className='regular-12 lg:bold-14'>{proj.description}</p>
        </div>
        <div className='flex self-start gap-2 pl-4 pb-2'>
          {proj.mobile && 
          <Link href={proj.mobile} key={proj.mobile} target="_blank" rel="noopener noreferrer nofollow" className="cursor-pointer group clickable flex justify-center items-center w-10 h-10">
              <Image src='/assets/app-store.png' alt="mobile link" width={34} height={34} className="transition-all group-hover:scale-110 clickable" />
          </Link>
          }
          {proj.web && 
          <Link href={proj.web} key={proj.web} target="_blank" rel="noopener noreferrer nofollow" className={clsx("cursor-pointer group clickable flex justify-center items-center w-10 h-10", proj.lg_only && "hidden lg:flex")}>
              <Image src='/assets/website.png' alt="web link" width={34} height={34} className="transition-all group-hover:scale-110 clickable" />
          </Link>
          }
          {proj.github && 
          <Link href={proj.github} key={proj.github} target="_blank" rel="noopener noreferrer nofollow" className="cursor-pointer group clickable flex justify-center items-center w-10 h-10">
              <Image src='/assets/github.png' alt="github link" width={34} height={34} className="transition-all group-hover:scale-110 clickable" />
          </Link>
          }
        </div>
      </li>
      <div className='absolute top-0 left-1 z-10 w-[101%] h-[102%] rounded-[2rem] rounded-b-3xl bg-dark dark:bg-light'/>
    </motion.div>
  )
}

const Projects = ({ innerRef }: ProjectsProps ) => {
  return (
    <section ref={innerRef} id='projects' className="flex flex-col items-center justify-center py-[80px]">
      <motion.h1 className="bold-28 sm:bold-32 md:bold-40 w-3/4 text-center mb-10 underline underline-offset-4" initial={{opacity: 0, x: -150}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.5, delay: 0, ease: 'easeInOut'}} viewport={{once: true}}>Projects</motion.h1>
      <ul className='relative grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-14 w-4/5 items-start justify-center'>
        {PROJECTS.map((proj, index) => (
          <ProjectItem key={index} proj={proj} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
