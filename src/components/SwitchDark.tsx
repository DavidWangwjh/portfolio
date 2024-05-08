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
      handleSwitchValue(true)
      setIsDark(false);
    } else {
      handleSwitchValue(false)
      setIsDark(true);
    }
  };

  return (
    <label className={`theme-switcher-label ${isDark ? "active" : ""}`}>
        <input
            type="checkbox"
            onClick={handleLabelClick}
            className="theme-switcher"
        />
        <div className="switch-handle">
            <span className={`light-text ${isDark ? 'hidden' : 'block'}`}>
                <Image src={lightImage} alt="switcher" priority />
            </span>
            <span className={`dark-text ${isDark ? 'block' : 'hidden'}`}>
                <Image src={darkImage} alt="switcher" priority />
            </span>
        </div>
    </label>
  );
};

export default SwitchDark;