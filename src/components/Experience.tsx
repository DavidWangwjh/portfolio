import React from 'react';
import Image from 'next/image';
import SkillsContainer from './SkillsContainer';
import { EXPERIENCES } from '@/constants';

const Experience = () => {
  return (
    <section className="max-container padding-container min-h-dvh flex flex-col items-center justify-center">
      <h1 className="bold-32 sm:bold-36 md:bold-48 self-start mb-6">Experience & Projects</h1>
      {EXPERIENCES.map((exp, index) => (
        <div key={index} className="flex flex-col mb-8 w-full">
          <div className="bold-16 lg:bold-20 flex flex-row items-center mb-2 gap-3">
            <div className="rounded-full bg-light border-2 border-dark w-12 h-12 flex items-center justify-center">
              {exp.type == "experience"? (
                <Image src="/assets/work.png" alt="work" width="25" height="25" />
              ) : (
                <Image src="/assets/project.png" alt="project" width="28" height="28" />
              )}
            </div>
            <h2 className=''>{exp.duration}</h2>
          </div>
          <div className="ml-12 p-6 rounded-lg shadow-lg bg-dark dark:bg-light text-light dark:text-dark">
            <div className="flex justify-between items-center mb-4">
              <h3 className="bold-20">{exp.title} <span className="bold-18 pl-2 gap-2">&mdash;&nbsp; {exp.company}</span></h3>
              <div className='flex flex-row gap-1 items-center'>
                <Image src="/assets/location.png" alt="location" width="20" height="20" className='w-6 h-auto object-fit: contain'/>
                <h3 className="regular-14">{exp.location}</h3>
              </div>
            </div>
            <p className="mb-4">{exp.description}</p>
            <SkillsContainer skills={exp.skills} justify='justify-start' main_theme='light'/>
          </div> 
        </div>
      ))}
    </section>
  );
};

export default Experience;
