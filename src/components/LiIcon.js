'use client'
import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ['center end', 'center center']
        }
    )
    return (
        <figure className='absolute -left-11 lg:left-0 stroke-dark dark:stroke-light'>
            <svg width='75' height='75' viewBox='0 0 100 100' className='-rotate-90 w-[60px] md:w-[75px]'>
                <circle cx='75' cy='50' r='20' className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none'/>
                {/* <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] fill-light dark:fill-dark' style={{ pathLength: scrollYProgress}}/> */}
                <circle cx='75' cy='50' r='14' className='animate-scale stroke-1 fill-dark dark:fill-light'/>
            </svg>
        </figure>
    )
}

export default LiIcon