import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import "../app/globals.css";
import SwitchDark from "./SwitchDark"

const NavBar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <ul className="hidden h-full gap-12 lg:flex">
            <SwitchDark />
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar