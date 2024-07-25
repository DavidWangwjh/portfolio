'use client'
// Import necessary React hooks and components
import React, {useEffect, useRef, useState } from 'react';

// Main CustomCursor component
const CustomCursor = () => {
  // Reference to the cursor element
  const cursorRef = useRef(null);
  // State to track cursor position
  const [position, setPosition] = useState({ x: -50, y: -50 });
  // State to track click event
//   const [clicked, setClicked] = useState(false);

  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    // Event listener for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    // // Event listener for mouse click
    // const handleMouseDown = () => {
    //   setClicked(true);
    //   // Reset click state after 800 milliseconds
    //   setTimeout(() => {
    //     setClicked(false);
    //   }, 600);
    // };
    // Event listener for mouseover (hover) on HTML elements
    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('clickable')) {
            setIsClickable(true);
        } else {
            setIsClickable(false); // Optionally set to false if the element does not have the class
        }
    };

    window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    //   window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []); // useEffect runs only once on mount

  return (
    <>
        {/* <div
            style={{ top: position.y, left: position.x }}
            ref={cursorRef}
            className={`fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-0 rounded-full w-2 h-2 bg-cursor`}
        />
        <div
            style={{ top: position.y, left: position.x }}
            ref={cursorRef}
            className={`p-0 fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-[0ms] rounded-full w-11 h-11 border-[5px] opacity-60 border-cursor`}
        />
        <div
            style={{ top: position.y, left: position.x }}
            ref={cursorRef}
            className={`p-0 fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-[0ms] rounded-full w-9 h-9 opacity-40 ${isClickable ? "bg-cursor" : ""}`}
        /> */}
        {/* <div
            className={`w-10 h-10 ${clicked ? "scale-100 opacity-100" : "scale-0 opacity-0"} -translate-x-1 -translate-y-1 rounded-full bg-[#554ed4] ease-in transition-all duration-80 z-50`}
        /> */}
    </>
  );
};

export default CustomCursor;