import { TOOLKIT } from "@/constants";
import SkillsContainer from "./SkillsContainer";

const Toolkit = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="max-container padding-container flex flex-col items-center w-full py-16">
        <h1 id="skills-heading" className="bold-28 sm:bold-32 md:bold-40 mb-10 underline underline-offset-4">Technical Skills</h1>
        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
        {Object.entries(TOOLKIT).map(([section, items]) => (
            <div key={section} className="text-center bg-dark dark:bg-light p-6 rounded-lg shadow-lg">
                <h2 className="bold-20 mb-6 text-light dark:text-dark">{section}</h2>
                <SkillsContainer skills={items} justify="justify-center" main_theme="light"/>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Toolkit
