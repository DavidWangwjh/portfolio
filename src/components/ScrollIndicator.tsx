import { motion } from 'framer-motion'
import { CaretDoubleDown } from './Icon';

const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('experience');
    nextSection?.scrollIntoView({
        behavior: 'smooth'
    });
  };

  return (
    <motion.div 
        className="absolute bottom-4 sm:bottom-14 clickable cursor-pointer hidden maxh:flex"
        initial={{ opacity: 0}}
        animate={{ opacity: 1, y: [-6, -4, -2, 0, 2, 4, 2, 0, -2, -4, -6]}}
        transition={{opacity: { delay: 1.2, duration: 2, ease: "easeInOut"}, y: {delay: 2.8, duration: 1.5, ease: "easeInOut", repeat: Infinity}}}
    >
      <button
        onClick={scrollToNextSection}
        className="flex flex-col items-center justify-center w-9 h-9 md:w-12 md:h-12 clickable cursor-pointer"
      >
        <CaretDoubleDown className={''}/>
      </button>
    </motion.div>
  );
};

export default ScrollIndicator;
