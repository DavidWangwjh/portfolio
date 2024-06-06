'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion'

type ImageDisplayerProps = {
    images: string[];
}

const ImageDisplayer = ({ images } : ImageDisplayerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
  });

  return (
    <div {...handlers} className="relative flex flex-col gap-3">
      <motion.div className="flex-1 flex items-center justify-center" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
        <Image
          src={images[currentIndex]}
          alt="project image"
          width={10}
          height={10}
          className="w-auto max-w-full h-auto max-h-[400px] object-contain"
        />
      </motion.div>
      <div className="flex justify-center items-center space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`rounded-full clickable ${
              index === currentIndex ? 'bg-blue-500 w-4 h-4 max-md:w-3 max-md:h-3' : 'bg-gray-400 w-3 h-3 max-md:w-2 max-md:h-2'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageDisplayer;