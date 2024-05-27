'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

const ScrollIndicator = () => {
  const [atTop, setAtTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setAtTop(false);
    } else {
      setAtTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('experience');
    nextSection?.scrollIntoView({
        behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    const topSection = document.getElementById('hero');
    topSection?.scrollIntoView({
        behavior: 'smooth'
    });
  };

  return (
    <motion.div 
        className="fixed bottom-5 right-5 clickable"
        initial={{ opacity: 0}}
        animate={{ opacity: 1, y: [-6, -4, -2, 0, 2, 4, 2, 0, -2, -4, -6]}}
        transition={{opacity: { delay: 1.2, duration: 2, ease: "easeInOut"}, y: {delay: 2.8, duration: 1.5, ease: "easeInOut", repeat: Infinity}}}
    >
      <button
        onClick={atTop ? scrollToNextSection : scrollToTop}
        className="flex flex-col items-center justify-center w-9 h-9 md:w-12 md:h-12 bg-[#aaa] rounded-full shadow-lg clickable"
      >
        {atTop ? <Image src='/assets/down-arrow.png' alt='down arrow' width={20} height={20} className='clickable'/> : <Image src='/assets/up-arrow.png' alt='up arrow' width={18} height={18} className='w-4 h-4 md:w-5 md:h-5 clickable'/>}
        {!atTop && <span className="text-[10px] md:text-[12px] text-black">TOP</span>}
      </button>
    </motion.div>
  );
};

export default ScrollIndicator;
