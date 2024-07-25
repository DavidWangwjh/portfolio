type SkillsProps = {
  skills: string[];
  justify: 'justify-center' | 'justify-start';
  main_theme: 'dark' | 'light'
}

const SkillsContainer = ({ skills, justify, main_theme }: SkillsProps) => {
  return (
    <div className={`flex flex-wrap ${justify}`}>
      {skills.map((item) => (
        <p key={item} className={`text-sm py-1 px-3 mr-2 mb-2 rounded-full ${main_theme == 'dark'? "text-light dark:text-dark bg-dark/70 dark:bg-light/70" : "text-dark dark:text-light bg-light dark:bg-dark"}`}>{item}</p>
      ))}
    </div>
  )
}

export default SkillsContainer