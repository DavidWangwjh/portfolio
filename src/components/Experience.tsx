import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SkillsContainer from './SkillsContainer';
import { EXPERIENCES } from '@/constants';

const Experience = () => {
  return (
    <section className="max-container padding-container min-h-dvh flex flex-col items-center justify-center">
      <h1 className="bold-32 sm:bold-36 md:bold-48 self-start mb-6">Experience</h1>
      {EXPERIENCES.map((exp, index) => (
        <div key={index} className="flex flex-col mb-8 w-full">
          <div className="flex flex-row items-center mb-2 gap-3">
            {/* <div className={`flex items-center justify-center rounded-full bg-light border-dark w-12 h-12 ${exp.type == "experience"? "border-2" : "border-[1px]"}`}>
              {exp.type == "experience"? (
                <Image src="/assets/work.png" alt="work" width="25" height="25" />
              ) : (
                <Image src="/assets/project.png" alt="project" width="28" height="28" />
              )}
            </div> */}
            <div className="flex items-center justify-center rounded-full bg-light border-dark w-12 h-12 border-2">
              <Image src="/assets/work.png" alt="work" width="25" height="25" />
            </div>
            <h2 className='bold-16 lg:bold-20'>{exp.duration}</h2>
          </div>
          <div className="ml-12 p-6 rounded-lg shadow-lg bg-dark dark:bg-light text-light dark:text-dark">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
              <h3 className="bold-20 self-start">{exp.title} <span className="bold-18 pl-2 gap-2">&mdash;&nbsp; {exp.company}</span></h3>
              <div className='flex flex-row gap-4 self-start'>
                {exp.link && 
                  <Link href={exp.link} key={exp.link} target="_blank" rel="noopener noreferrer nofollow" className="cursor-none group clickable">
                    <Image 
                      src='/assets/link.png'
                      alt="camp"
                      width={30}
                      height={30}
                      className="transition-all group-hover:w-8 clickable"
                    />
                  </Link>
                }
                {exp.github && 
                  <Link href={exp.github} key={exp.github} target="_blank" rel="noopener noreferrer nofollow" className="cursor-none group clickable">
                    <Image 
                      src='/assets/github.png'
                      alt="camp"
                      width={30}
                      height={30}
                      className="transition-all group-hover:w-8 clickable"
                    />
                  </Link>
                }
                <div className='flex flex-row gap-[2px] items-center'>
                  <Image src="/assets/location.png" alt="location" width="20" height="20" className='w-6 h-auto object-fit: contain'/>
                  <h3 className="regular-14">{exp.location}</h3>
                </div>
              </div>
            </div>
            <p className="mb-4 lg:pr-10">{exp.description}</p>
            <SkillsContainer skills={exp.skills} justify='justify-start' main_theme='light'/>
          </div> 
        </div>
      ))}
    </section>
  );
};

export default Experience;
