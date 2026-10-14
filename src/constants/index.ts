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
  "Languages": ["JavaScript", "TypeScript", "Python", "Golang", "HTML", "CSS", "SQL"],
  "Frameworks & Libraries": ["React", "Next.js", "React Native", "Node.js", "FastAPI", "PyTorch", "Tailwind CSS"],
  "Databases & Backend": ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase", "Neo4j", "REST APIs"],
  "Development Tools": ["Git", "GitHub", "Docker", "AWS", "CI/CD", "Unity", "Jira", "Postman"],
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
    title: 'Center Director & Coding Instructor',
    company: 'Code Ninjas Union City',
    duration: 'Feb 2025 – Present',
    location: 'Union City, CA',
    description: 'Directed daily operations, program promotions, and digital marketing for an education center serving "500+ clients", growing "2026 summer camp revenue by over 20%". Led a team of "20+ instructors" delivering coding and robotics programs across "Python", "JavaScript", "Web Development", and competitive "FIRST Robotics".',
    skills: ['Leadership', 'Python', 'JavaScript', 'Web Development', 'FIRST Robotics', 'Digital Marketing'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Where2Be',
    duration: 'Apr 2023 – Dec 2023',
    location: 'San Diego, CA',
    description: 'Launched a "React Native" mobile app tailored for college events, scaling the platform to "2,000+ users". Built a "Python" backend with "Neo4j" and "Docker" to streamline event workflows and local development. Developed a dynamic marketing website with "Next.js" and "Tailwind CSS" to improve visibility.',
    skills: ['React Native', 'Next.js', 'Tailwind CSS', 'Python', 'Neo4j', 'Docker'],
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
    title: 'Co-Founder & Chief Technology Officer',
    company: 'Prolympia',
    duration: 'Sep 2022 – Apr 2023',
    location: 'San Diego, CA',
    description: 'Led full-stack development of a "React Native" app, translating product requirements into scalable architecture and seamless user-facing features. Built a highly available "FastAPI" backend in "Python", integrating "Firebase" and "PostgreSQL" for secure authentication, resilient data storage, and complex workflows. Facilitated "Agile" sprint planning and daily standups to hit key launch targets on schedule.',
    skills: ['Leadership', 'React Native', 'Python', 'FastAPI', 'PostgreSQL', 'Firebase', 'Agile'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Prometheus Platform',
    duration: 'Jun 2022 – Dec 2022',
    location: 'San Diego, CA',
    description: 'Collaborated with a "7-developer team" to build a web-based networking platform using "React" and "TypeScript", optimizing frontend performance for financial stakeholders. Developed and maintained "50+ REST APIs in Golang" and designed optimized "PostgreSQL" database schemas to support core platform functionality.',
    skills: ['React', 'TypeScript', 'Golang', 'REST APIs', 'PostgreSQL'],
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
  image?: string
  imageFit?: 'cover' | 'contain'
  category?: string
}

// PROJECTS
export const PROJECTS: PROJECT[] = [
  {
    title: 'TimeToVolunteer',
    organization: '',
    category: 'Full-Stack Development',
    description: 'A full-stack volunteer management platform with role-based dashboards, secure Supabase authentication, and PostgreSQL row-level security. Supports application review, opportunity management, and volunteer coordination from end to end.',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/DavidWangwjh/TimeToVolunteer',
    web: 'https://timetovolunteer.org/',
    image: '/projects/timetovolunteer-cover.png',
    imageFit: 'contain',
  },
  {
    title: 'EBCL Medical Time Series Model',
    organization: 'PyHealth',
    category: 'Machine Learning Contribution',
    description: 'Implemented event-based contrastive learning in PyHealth using PyTorch, Transformer encoding, and attention pooling. Built MIMIC-IV evaluation workflows, synthetic validation, and ablation experiments, culminating in an approved pull request.',
    skills: ['PyTorch', 'PyHealth', 'Python', 'MIMIC-IV'],
    github: 'https://github.com/maincsna/PyHealth',
    image: '/projects/ebcl-cover.png',
    imageFit: 'contain',
  },
  {
    title: 'TaskHero',
    organization: '',
    description: 'An AI-driven scheduling and task management platform built using Next.js, featuring an AI agent powered by Google Gemini for automated scheduling and analytics.',
    skills: ['Next.js', 'Tailwind CSS', 'Auth.js', 'MongoDB', 'Google Gemini'],
    web: "https://mytaskhero.vercel.app",
    github: "https://github.com/Aaron41402/Virtual-Work-Space",
    image: '/projects/taskhero-cover.png'
  },
  {
    title: 'DailyCals AI',
    organization: '',
    description: 'A native iOS app that uses AI to analyze food images and provide quick, hassle-free daily calorie tracking.',
    skills: ['Swift', 'XCode', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Google Gemini'],
    web: "https://dailycals-ai.vercel.app/",
    // mobile: "https://apps.apple.com/us/app/where2be-your-school-guide/id1671447709",
    github: "https://github.com/DavidWangwjh/dailycals-ai",
    // images: ['/projects/old/w2b-web.png', '/projects/old/w2b-app-1.webp', '/projects/old/w2b-app-2.webp', '/projects/old/w2b-app-3.webp', '/projects/old/w2b-app-4.webp'],
    image: '/projects/dailycalsai-cover.png'
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
