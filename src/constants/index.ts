// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'about_me', label: 'About Me' },
];

// CONTACT INFO
export const CONTACT_INFO = [
  { meta: "Email", metaInfo: "davidwang.wjh@gmail.com", hasColor: "", link: "mailto:davidwang.wjh@gmail.com", image: "/assets/email.png"},
  { meta: "LinkedIn", metaInfo: "david-wang-wjh7", hasColor: "", link: "https://www.linkedin.com/in/david-wang-wjh7", image: "/assets/linkedin.png"},
  { meta: "GitHub", metaInfo: "DavidWangwjh", hasColor: "", link: "https://github.com/DavidWangwjh", image: "/assets/github.png"},
];

// TOOLKIT
export const TOOLKIT = {
  "Web & Mobile Development": [
      "HTML", "CSS/Tailwind CSS", "Javascript/Typescript", "React.js", "Next.js", "React Native", "Python", "PostgreSQL", "Neo4j"
  ],
  "Development Tools": [
      "GitHub", "Bitbucket", "Jira", "Confluence",  "Firebase", "Heroku", "pgAdmin", "Postman"
  ]
}

// EXPERIENCES
export const EXPERIENCES = [
  {
    title: 'Full Stack Developer',
    company: 'Where2Be',
    type: "experience",
    duration: 'Apr 2023 – Dec 2023',
    location: 'San Diego, CA',
    description: 'Developed and published a website and mobile app with 1200+ users, creating a central hub for university students to host and discover events. Addressed the issue of fragmented event information by scraping and compiling data from 300+ social media sources.',
    skills: ['React Native', 'Next.js', 'Neo4j', 'Python', 'Starlette API', 'Firebase', 'Docker'],
    web: "https://www.where2be.app/",
    mobile: "https://apps.apple.com/us/app/where2be-your-school-guide/id1671447709",
    github: "https://github.com/MomentEvents/Where2Be-Web",
  },
  {
    title: 'Lead Developer',
    company: 'We@vers',
    type: "project",
    duration: 'May 2022 – Sep 2023',
    location: 'San Diego, CA',
    description: 'Worked in a multi-functional team of 15+ UCSD students to create custom websites for student organizations. Set up GitHub project codebase and Firebase database & hosting, as well as mentoring novice developers on web development tools and skills.',
    skills: ['Leadership', 'HTML', 'CSS', 'JavaScript', 'Firebase'],
    web: "https://ucsd-uta.netlify.app/",
    lg_only: 'true'
  },
  {
    title: 'Chief Technology Officer',
    company: 'Prolympia',
    type: "experience",
    duration: 'Sep 2022 – Apr 2023',
    location: 'San Diego, CA',
    description: 'Led the development of a sports & social mobile app. Translated user requirements into an intuitive and engaging UI, contributed to full stack development, and managed development team milestones and meetings.',
    skills: ['Leadership', 'React Native', 'Python', 'FastAPI', 'Firebase', 'PostgreSQL', 'Postman', 'Heroku', 'XCode', 'Expo', 'Bitbucket', 'Jira', 'Confluence'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Prometheus Platform',
    type: "experience",
    duration: 'Jun 2022 – Dec 2022',
    location: 'San Diego, CA',
    description: 'Collaborated with a team of 7 developers to design and implement a dedicated networking website for financial stakeholders. Developed and maintained 50+ backend APIs, following Component, Service, and DAO concepts to create a scalable architecture.',
    skills: ['Golang', 'Postman', 'Heroku', 'PostgreSQL'],
  },    
  // {
  //   title: 'Budget Planner',
  //   company: 'CSE110 Software Engineering',
  //   type: "project",
  //   duration: 'Sep 2022 – Dec 2022',
  //   location: 'San Diego, CA',
  //   description: 'Worked collaboratively with a team of 10 to successfully deliver a budget planner website, adhering to Agile methodologies such as daily stand-ups, weekly sprint planning sessions, retrospectives, and CI/CD pipelines to carry out effective project management and teamwork. Designed and implemented the reminder feature of the website using HTML, CSS, and JavaScript. Delivered a compelling final presentation, effectively communicating the website’s key features and highlighting the team’s ability to overcome technical and interpersonal challenges throughout the project.',
  //   skills: ['HTML', 'CSS', 'JavaScript', 'Agile Methodologies', 'CI/CD'],
  // },
  {
    title: 'MoodGuru',
    company: 'CodePath Android App Development',
    type: "project",
    duration: 'Apr 2022 – May 2022',
    location: 'Remote',
    description: 'Worked in a team of 3 app developers to create a mood-tracking Android app. Showcased the app to a national audience as a top 10 finalist at the CodePath 2022 National Demo Day.',
    skills: ['Java', 'Kotlin', 'Android Studio', 'NLP', 'Figma'],
    github: "https://github.com/TeamMoodTrackerADY/MoodGuru",
  },
];