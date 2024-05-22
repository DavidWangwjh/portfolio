import Image from "next/image";
import { TOOLKIT } from "@/constants";
import SkillsContainer from "./SkillsContainer";

const Toolkit = () => {
  return (
    <section className="min-h-dvh max-h-[1024px] items-center justify-center flex flex-col">
        <div className="bold-32 sm:bold-36 md:bold-48 flex justify-center flex-row gap-6 md:mb-20 h-[100px] items-center">
            <h1>My Toolkit</h1>
            <Image src="/toolkit/toolkit.png" alt="toolkit" width="60" height="20"/>
        </div>
        <div className="relative z-10 grid grid-flow-row gap-4 bg-transparent md:grid-cols-2 md:gap-10 w-[80%]">
            {Object.entries(TOOLKIT).map(([section, items]) => (
                <div key={section} className="text-center border-4 border-[#333A3F] dark:border-[#ddd] p-6">
                    <h2 className="bold-20 lg:bold-32 mb-6">
                        {section}
                    </h2>
                    <SkillsContainer skills={items} justify="justify-center" main_theme="dark"/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Toolkit