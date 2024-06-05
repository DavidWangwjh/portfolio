'use client'
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { ref: refHome, inView: inViewHome } = useInView();
  const { ref: refExperience, inView: inViewExperience } = useInView();
  const { ref: refProjects, inView: inViewProjects } = useInView();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (inViewHome && !inViewExperience) {
      setActiveSection('hero')
    } else if (inViewExperience && !inViewHome && !inViewProjects) {
      setActiveSection('experience')
    } else if (inViewProjects && !inViewExperience) {
      setActiveSection('projects')
    }
  }, [inViewHome, inViewExperience, inViewProjects]);


  return (
    <div>
      <Navbar activeSection={activeSection}/>
      <div className="flex flex-col gap-[10px]">
        {/* <Image src="/assets/background.svg" alt="background" fill priority className="-z-50"/> */}
        <Hero innerRef={refHome}/>
        <Experience innerRef={refExperience}/>
        <Projects innerRef={refProjects}/>
      </div>
    </div>
    
  )
}