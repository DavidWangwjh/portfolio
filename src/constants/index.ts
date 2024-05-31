// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'experience', label: 'Experience' },
  { href: '/', key: 'projects', label: 'Projects' },
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

type EXPERIENCE = {
  title: string,
  company: string,
  duration: string,
  location: string,
  description: string,
  skills: string[],
  // github?: string,
  // web?: string,
  // mobile?: string,
  // lg_only?: Boolean,
}

// EXPERIENCES
export const EXPERIENCES: EXPERIENCE[] = [
  // {
  //   title: 'Full Stack Developer',
  //   company: 'Where2Be',
  //   duration: 'Apr 2023 – Dec 2023',
  //   location: 'San Diego, CA',
  //   description: 'Developed and published a website and mobile app with 1200+ users, creating a central hub for university students to host and discover events. Addressed the issue of fragmented event information by scraping and compiling data from 300+ social media sources.',
  //   skills: ['React Native', 'Next.js', 'Neo4j', 'Python', 'Starlette API', 'Firebase', 'Docker'],
  //   web: "https://www.where2be.app/",
  //   mobile: "https://apps.apple.com/us/app/where2be-your-school-guide/id1671447709",
  //   github: "https://github.com/MomentEvents/Where2Be-Web",
  // },
  {
    title: 'Lead Developer',
    company: 'We@vers',
    duration: 'May 2023 – Sep 2023',
    location: 'San Diego, CA',
    description: 'Worked in a multi-functional team of 15+ UCSD students to create custom websites for student organizations. Set up GitHub project codebase and Firebase database & hosting, as well as mentoring novice developers on web development tools and skills.',
    skills: ['Leadership', 'HTML', 'CSS', 'JavaScript', 'Firebase'],
    // web: "https://ucsd-uta.netlify.app/",
    // lg_only: true
  },
  {
    title: 'Chief Technology Officer',
    company: 'Prolympia',
    duration: 'Sep 2022 – Apr 2023',
    location: 'San Diego, CA',
    description: 'Led the development of a sports & social mobile app. Translated user requirements into an intuitive and engaging UI, contributed to full stack development, and managed development team milestones and meetings.',
    skills: ['Leadership', 'React Native', 'Python', 'FastAPI', 'Firebase', 'PostgreSQL', 'Postman', 'Heroku', 'XCode', 'Expo', 'Bitbucket', 'Jira', 'Confluence'],
  },
  {
    title: 'Back End Developer',
    company: 'Prometheus Platform',
    duration: 'Jun 2022 – Dec 2022',
    location: 'San Diego, CA',
    description: 'Collaborated with a team of 7 developers to design and implement a dedicated networking website for financial stakeholders. Developed and maintained 50+ backend APIs, following Component, Service, and DAO concepts to create a scalable architecture.',
    skills: ['Golang', 'Postman', 'Heroku', 'PostgreSQL'],
  },
];

type PROJECT = {
  title: string,
  organization: string,
  // duration: string,
  // location: string,
  description: string,
  skills: string[],
  github?: string,
  web?: string,
  mobile?: string,
  lg_only?: Boolean,
  images: string[],
}

// PROJECTS
export const PROJECTS: PROJECT[] = [
  {
    title: 'Where2Be',
    organization: 'Moment Events',
    // duration: 'Apr 2023 – Dec 2023',
    // location: 'San Diego, CA',
    description: 'Developed and published a website and mobile app with 1200+ users, creating a central hub for university students to host and discover events. Addressed the issue of fragmented event information by scraping and compiling data from 300+ social media sources.',
    skills: ['React Native', 'Next.js', 'Neo4j', 'Python', 'Starlette API', 'Firebase', 'Docker'],
    web: "https://www.where2be.app/",
    mobile: "https://apps.apple.com/us/app/where2be-your-school-guide/id1671447709",
    github: "https://github.com/MomentEvents/Where2Be-Web",
    images: ['/projects/w2b-web.png', '/projects/w2b-app-1.webp', '/projects/w2b-app-2.webp', '/projects/w2b-app-3.webp', '/projects/w2b-app-4.webp'],
  },
  {
    title: 'Don\'t Budge, Do Budget',
    organization: 'UCSD CSE110 Software Engineering',
    // duration: 'Sep 2022 – Dec 2022',
    // location: 'San Diego, CA',
    description: 'Worked in a team of 10 to design and develop a personalized budget planner website using local storage. The entire project adheres to Agile methodologies such as regular stand-ups and sprint sessions, ADR and retrospectives, and CI/CD pipelines.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    github: "https://github.com/DavidWangwjh/cse110-fa22-group34",
    web: "https://cse110-fa22-group34.github.io/cse110-fa22-group34/source/index.html",
    lg_only: true,
    images: ['/projects/dbdb-brief.png', '/projects/dbdb-full.png'],
  },
  {
    title: 'MoodGuru',
    organization: 'CodePath Android App Development',
    // duration: 'Apr 2022 – May 2022',
    // location: 'Remote',
    description: 'Worked in a team of 3 app developers to create a mood-tracking Android app integrated with NLP to analyze user journals. Showcased the app to a national audience as a top 10 finalist at the CodePath 2022 National Demo Day.',
    skills: ['Java', 'Kotlin', 'Android Studio', 'NLP', 'Figma'],
    github: "https://github.com/TeamMoodTrackerADY/MoodGuru",
    images: ['/projects/moodguru-signin.png', '/projects/moodguru-journals.png', '/projects/moodguru-journal.png', '/projects/moodguru-moods.png', '/projects/moodguru-advice.png', '/projects/moodguru-chart.png'],
  },
  {
    title: 'Overflowed',
    organization: 'UCSD Video Game Development Club',
    // duration: 'Oct 2021 -- Mar 2022',
    // location: 'Remote',
    description: 'Collaborated with a team of 4 developers and 1 designer to create a UCSD-themed 2D game. Participated in the 2021 Fall Triton-Ware Minigame',
    skills: ['C#', 'Unity'],
    web: "https://jamespeach.itch.io/overflowed",
    images: ['/projects/overflowed-intro.png', '/projects/overflowed-gameplay.png'],
  },
];