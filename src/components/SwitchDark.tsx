'use client'
import Image from "next/image";
import React, { useState } from "react";
import lightImage from "../../public/assets/sun.png";
import darkImage from "../../public/assets/moon.png";
import handleSwitchValue from "../utils/theme";

const SwitchDark = () => {
  const [isDark, setIsDark] = useState(false);

  const handleLabelClick = () => {
    if (isDark) {
      handleSwitchValue(false)
      setIsDark(false);
    } else {
      handleSwitchValue(true)
      setIsDark(true);
    }
  };

  return (
    <label className='flex items-center justify-center self-start cursor-pointer rounded-full clickable'>
      <input
        type='checkbox'
        onClick={handleLabelClick}
        className='hidden'
      />
      <div className='clickable'>
        <span className='hidden dark:block'>
          <Image src={lightImage} width={22} height={22} alt="switcher" priority className="w-6 h-6 md:w-8 md:h-8 clickable"/>
        </span>
        <span className='block dark:hidden'>
          <Image src={darkImage} width={22} height={22} alt="switcher" priority className="w-6 h-6 md:w-8 md:h-8 clickable"/>
        </span>
      </div>
    </label>
  );
};

export default SwitchDark;