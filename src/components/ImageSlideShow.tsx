import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

type ImageSlideShowProps = {
  images: string[]
}

export const ImageSlideShow = ({images} : ImageSlideShowProps) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="flex relative items-center justify-center overflow-hidden">
      {/* <div className="absolute left-2 bg-white rounded-full w-[36px] h-[36px] flex justify-center items-center select-none cursor-pointer font-bold text-[24px] z-20 -scale-100" onClick={() => paginate(-1)}>
        {"‣"}
      </div> */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            // x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 1 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="max-h-[300px] max-w-[75%] object-contain z-10"
        />
      </AnimatePresence>
      {/* <div className="absolute right-2 bg-white rounded-full w-[36px] h-[36px] flex justify-center items-center select-none cursor-pointer font-bold text-[24px] z-20" onClick={() => paginate(1)}>
        {"‣"}
      </div> */}
    </div>
  );
};

export default ImageSlideShow;