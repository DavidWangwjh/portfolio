import { TOOLKIT } from "@/constants";
import SkillsContainer from "./SkillsContainer";

const Toolkit = () => {
  return (
    <section className="max-container padding-container min-h-dvh flex flex-col items-center justify-center w-full">
        <h1 className="bold-32 sm:bold-36 md:bold-48 self-center mb-6">Main Toolkit</h1>
        {Object.entries(TOOLKIT).map(([section, items]) => (
            <div key={section} className="text-center bg-dark dark:bg-light ml-12 mb-8 p-6 rounded-lg shadow-lg">
                <h2 className="bold-20 lg:bold-28 mb-6 text-light dark:text-dark">{section}</h2>
                <SkillsContainer skills={items} justify="justify-center" main_theme="light"/>
            </div>
        ))}
    </section>
  )
}

export default Toolkit