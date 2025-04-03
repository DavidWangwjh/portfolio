// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'hero', label: 'About' },
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

export type EXPERIENCE = {
  title: string,
  company: string,
  duration: string,
  location: string,
  description: string,
  skills: string[],
  github?: string,
  web?: string,
  mobile?: string,
  // lg_only?: Boolean,
}

// EXPERIENCES
export const EXPERIENCES: EXPERIENCE[] = [
  {
    title: 'Coding Instructor',
    company: 'Code Ninjas',
    duration: 'Feb 2025 – Present',
    location: 'Union City, CA',
    description: 'Coached "70+ students" in "Python" and "JavaScript", strengthening their coding and problem-solving abilities. Taught "3D Unity game development in C#", resulting in "5+ student-built games within 2 months". Additionally, designed and delivered age- and skill-appropriate curricula to maximize student engagement and learning outcomes.',
    skills: ['Python', 'JavaScript', 'C#', 'Unity'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Where2Be',
    duration: 'Apr 2023 – Dec 2023',
    location: 'Remote',
    description: 'Launched a "React Native" mobile app, attracting "2,000+ users" as a dedicated college events platform. Built a "Starlette API backend in Python", seamlessly integrating a "Neo4j" database and "Docker" containers. Additionally, created a dynamic website using "Next.js" and "Tailwind CSS" to boost user engagement and marketing.',
    skills: ['React Native', 'Next.js', 'Python', 'Starlette API', 'Neo4j', 'Firebase', 'Docker'],
    web: "https://www.where2be.app/",
    mobile: "https://apps.apple.com/us/app/where2be-your-school-guide/id1671447709",
    github: "https://github.com/MomentEvents/Where2Be-Web",
  },
  {
    title: 'Lead Developer',
    company: 'Weavers',
    duration: 'May 2023 – Sep 2023',
    location: 'Remote',
    description: 'Collaborated with a "cross-functional team of 15+ members" to deliver custom websites for clients. Mentored novice developers in "HTML", "CSS", and "JavaScript", introducing "Agile" development practices to enhance productivity. Implemented "Firebase" real-time database, cloud storage, and automated "GitHub" deployment workflows.',
    skills: ['Leadership', 'Agile', 'HTML', 'CSS', 'JavaScript', 'Firebase'],
    // web: "https://ucsd-uta.netlify.app/",
    // lg_only: true
  },
  {
    title: 'Chief Technology Officer',
    company: 'Prolympia',
    duration: 'Sep 2022 – Apr 2023',
    location: 'San Diego, CA',
    description: 'Led "Full Stack" development of a "React Native" app, designing a user-friendly UI aligned with product goals. Developed a "FastAPI backend in Python", integrating "Firebase" and "PostgreSQL" databases for scalability. Served as "Scrum Master", "improving team efficiency by 90%" through "Agile" planning and sprint execution.',
    skills: ['Leadership', 'React Native', 'Python', 'FastAPI', 'PostgreSQL', 'Firebase', 'pgAdmin', 'Postman', 'Heroku', 'Bitbucket', 'Jira', 'Confluence', 'Figma'],
  },
  {
    title: 'Backend Developer',
    company: 'Prometheus Platform',
    duration: 'Jun 2022 – Dec 2022',
    location: 'San Diego, CA',
    description: 'Collaborated with a "team of 7 developers" to build a dedicated networking platform for financial stakeholders. "Developed and maintained 50+ RESTful APIs in Golang", working closely with the frontend team to design "PostgreSQL" database schemas and HTTP request models.',
    skills: ['Golang', 'RESTful API', 'PostgreSQL', 'Postman', 'Heroku'],
  },
];

export type PROJECT = {
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
  images?: string[],
  image: string
}

// PROJECTS
export const PROJECTS: PROJECT[] = [
  {
    title: 'TaskHero',
    organization: '',
    description: 'An AI-driven scheduling and task management platform built using Next.js, featuring an AI agent powered by Google Gemini for automated scheduling and analytics.',
    skills: ['Next.js', 'Tailwind CSS', 'Auth.js', 'MongoDB', 'Google Gemini'],
    web: "https://mytaskhero.vercel.app",
    // mobile: "https://apps.apple.com/us/app/where2be-your-school-guide/id1671447709",
    github: "https://github.com/Aaron41402/Virtual-Work-Space",
    // images: ['/projects/old/w2b-web.png', '/projects/old/w2b-app-1.webp', '/projects/old/w2b-app-2.webp', '/projects/old/w2b-app-3.webp', '/projects/old/w2b-app-4.webp'],
    image: '/projects/taskhero-cover.png'
  },
  {
    title: 'Where2Be',
    organization: 'Moment Events',
    // duration: 'Apr 2023 – Dec 2023',
    // location: 'San Diego, CA',
    description: 'A social networking app designed for college students to discover and host events, fostering campus connections and engagement. The app currently has a growing user base of 2,000+ students.',
    skills: ['React Native', 'Next.js', 'Neo4j', 'Python', 'Starlette API', 'Firebase', 'Docker'],
    web: "https://www.where2be.app/",
    mobile: "https://apps.apple.com/us/app/where2be-your-school-guide/id1671447709",
    github: "https://github.com/MomentEvents/Where2Be-Web",
    images: ['/projects/old/w2b-web.png', '/projects/old/w2b-app-1.webp', '/projects/old/w2b-app-2.webp', '/projects/old/w2b-app-3.webp', '/projects/old/w2b-app-4.webp'],
    image: '/projects/w2b-cover.png'
  },
  {
    title: 'MoodGuru',
    organization: 'CodePath Android App Development',
    // duration: 'Apr 2022 – May 2022',
    // location: 'Remote',
    description: "A mood-tracking app integrated with Natural Language Processing (NLP) to provide and track personalized mood analysis. MoodGuru was showcased as a top 10 finalist at CodePath's 2022 National Demo Day.",
    skills: ['Java', 'Kotlin', 'Android Studio', 'NLP', 'Figma'],
    github: "https://github.com/TeamMoodTrackerADY/MoodGuru",
    images: ['/projects/old/moodguru-signin.png', '/projects/old/moodguru-journals.png', '/projects/old/moodguru-journal.png', '/projects/old/moodguru-moods.png', '/projects/old/moodguru-advice.png', '/projects/moodguru-chart.png'],
    image: '/projects/moodguru-cover.png'
  },
  {
    title: 'Don\'t Budge, Do Budget',
    organization: 'UCSD CSE110 Software Engineering',
    // duration: 'Sep 2022 – Dec 2022',
    // location: 'San Diego, CA',
    description: 'An easy-to-use budget planner website that utilizes local storage for personalized user experiences.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    github: "https://github.com/DavidWangwjh/cse110-fa22-group34",
    web: "https://cse110-fa22-group34.github.io/cse110-fa22-group34/source/index.html",
    lg_only: true,
    images: ['/projects/old/dbdb-brief.png', '/projects/old/dbdb-full.png'],
    image: '/projects/dbdb-cover.png'
  },
  {
    title: 'Overflowed',
    organization: 'UCSD Video Game Development Club',
    // duration: 'Oct 2021 -- Mar 2022',
    // location: 'Remote',
    description: 'A lighthearted and engaging UCSD-themed 2D Unity game, showcasing the 7 colleges of UCSD. Participated in the 2021 Fall Triton-Ware Minigame event.',
    skills: ['C#', 'Unity'],
    web: "https://jamespeach.itch.io/overflowed",
    images: ['/projects/old/overflowed-intro.png', '/projects/old/overflowed-gameplay.png'],
    image: '/projects/overflowed-cover.png'
  },
];