'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SkillsContainer from './SkillsContainer';
import { PROJECTS } from '@/constants';
import { motion } from 'framer-motion'
import clsx from 'clsx';
import ImageDisplayer from './ImageDisplayer';
import { LegacyRef } from 'react'

type ProjectsProps ={
  innerRef: LegacyRef<HTMLElement>
}

const Projects = ({ innerRef }: ProjectsProps ) => {
  return (
    <section ref={innerRef} id='projects' className="max-container padding-container min-h-dvh flex flex-col items-center justify-center pt-[70px]">
      <motion.h1 className="bold-32 sm:bold-36 md:bold-48 self-start mb-6 underline underline-offset-4" initial={{opacity: 0, x: -150}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.5, delay: 0, ease: 'easeInOut'}} viewport={{once: true}}>Projects</motion.h1>
      {PROJECTS.map((proj, index) => (
        <motion.div 
          key={index} 
          className="flex flex-col mb-8 w-full"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 1.8, delay: 0, ease: 'easeInOut'}}
          viewport={{once: true}}
        >
            <div className="flex flex-col md:flex-row items-center mb-2 gap-3">
                <div className="items-center justify-center rounded-full bg-light border-dark w-12 h-12 border-[1px] hidden md:flex">
                    <Image src="/assets/project.png" alt="project" width="28" height="28" />
                </div>
                <h3 className="w-full bold-20 lg:bold-24">
                    {proj.title}
                    <span className="bold-16 lg:bold-20">&nbsp;&nbsp;&nbsp;&mdash;&nbsp;{proj.organization}</span>
                </h3>
            </div>
            <div className='flex flex-col gap-4 md:ml-12 p-6 rounded-lg shadow-lg bg-dark dark:bg-light text-light dark:text-dark'>
                <div className="flex flex-col justify-center items-center">
                    <p className="mb-4 lg:pr-10 w-full">{proj.description}</p>
                    <motion.div className="flex flex-wrap justify-start w-full" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.8, delay: 0.3}} viewport={{once: true}}>
                        {proj.skills.map((item) => (
                            <p key={item} className="text-sm py-1 px-3 mr-2 mb-2 rounded-full text-dark dark:text-light bg-light dark:bg-dark">{item}</p>
                        ))}
                    </motion.div>
                </div>
                <ImageDisplayer images={proj.images}/>
                <div className='flex flex-row self-end gap-2'>
                    {proj.mobile && 
                    <Link href={proj.mobile} key={proj.mobile} target="_blank" rel="noopener noreferrer nofollow" className="cursor-pointer group clickable flex justify-center items-center w-10 h-10">
                        <Image src='/assets/app-store.png' alt="camp" width={34} height={34} className="transition-all group-hover:w-10 clickable" />
                    </Link>
                    }
                    {proj.web && 
                    <Link href={proj.web} key={proj.web} target="_blank" rel="noopener noreferrer nofollow" className={clsx("cursor-pointer group clickable flex justify-center items-center w-10 h-10", proj.lg_only && "hidden lg:block")}>
                        <Image src='/assets/website.png' alt="camp" width={34} height={34} className="transition-all group-hover:w-10 clickable" />
                    </Link>
                    }
                    {proj.github && 
                    <Link href={proj.github} key={proj.github} target="_blank" rel="noopener noreferrer nofollow" className="cursor-pointer group clickable flex justify-center items-center w-10 h-10">
                        <Image src='/assets/github.png' alt="camp" width={34} height={34} className="transition-all group-hover:w-10 clickable" />
                    </Link>
                    }
                </div>
            </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
