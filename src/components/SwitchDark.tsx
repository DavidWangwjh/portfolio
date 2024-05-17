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
    <label className={`theme-switcher-label ${isDark ? "" : "active"} clickable`}>
      <input
        type="checkbox"
        onClick={handleLabelClick}
        className="theme-switcher"
      />
      <div className="switch-handle clickable">
        <span className={`light-text ${isDark ? 'block' : 'hidden'} `}>
          <Image src={lightImage} width={22} height={22} alt="switcher" priority className="theme-image clickable"/>
        </span>
        <span className={`dark-text ${isDark ? 'hidden' : 'block'} `}>
          <Image src={darkImage} width={22} height={22} alt="switcher" priority className="theme-image clickable"/>
        </span>
      </div>
    </label>
  );
};

export default SwitchDark;