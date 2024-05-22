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
      "HTML", "CSS/Tailwind CSS", "Javascript/Typescript", "React.js", "Next.js", "React Native", "Python/Fast API/Starlette API", "PostgreSQL", "Neo4j"
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
    duration: 'April 2023 – Dec 2023',
    location: 'San Diego, CA',
    description: 'Created and published a mobile app and a website',
    skills: ['React Native', 'Next.js', 'Neo4j', 'Python', 'Starlette API', 'Firebase', 'Supabase', 'Docker'],
  },
  {
    title: 'Lead Developer',
    company: 'We@vers',
    type: "project",
    duration: 'May 2022 – Sep 2023',
    location: 'San Diego, CA',
    description: 'Led the development team of group consisted of of 15+ people across 3 sub-teams, aimed to help student organizations and small businesses build their own unique websites.',
    skills: ['Leadership', 'HTML', 'JavaScript', 'CSS', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'Chief Technology Officer',
    company: 'Prolympia',
    type: "experience",
    duration: 'Sep 2022 – Apr 2023',
    location: 'San Diego, CA',
    description: 'Led the development of a cross-platform mobile application, contributing 10,000+ lines of code to the full stack and driving the team to increase task completion rate by over 30% in 3 months. Translated user requirements and feedback into clear and concise user stories and wireframes, facilitating the development of a highly intuitive and user-friendly UI using React Native. Built the backend server in Python using FastAPI and leveraging Firebase and PostgreSQL databases to manage data securely and optimize data manipulation for intricate operations. Addressed performance bottlenecks and concurrency issues through refining backend architecture and algorithms. Conducted customer research and interviews to gather information on product design and user experience, resulting in actionable insights that drove significant product improvements and a 25% increase in user satisfaction.',
    skills: ['React Native', 'Python', 'FastAPI', 'Firebase', 'PostgreSQL'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Prometheus Platform',
    type: "experience",
    duration: 'Jun 2022 – Dec 2022',
    location: 'San Diego, CA',
    description: 'Collaborated closely with a team of 7 developers to design and implement a networking website, delivering a scalable and intuitive solution that met user needs. Designed and managed the backend structures on Firebase and PostgreSQL databases, ensuring secure and effective data usage through data normalization and security measures. Developed and maintained 50+ backend APIs in Golang, including authentication and CRUD manipulations, following Component, Service, and DAO concepts to create a modular and maintainable architecture. Coordinated with the frontend team through weekly sync-up meetings to ensure the UI design and development were compatible with the backend structure and API endpoints.',
    skills: ['Golang', 'Firebase', 'PostgreSQL', 'API Development', 'Data Normalization'],
  },    
  {
    title: 'Budget Planner',
    company: 'CSE110 Software Engineering',
    type: "project",
    duration: 'Sep 2022 – Dec 2022',
    location: 'San Diego, CA',
    description: 'Worked collaboratively with a team of 10 to successfully deliver a budget planner website, adhering to Agile methodologies such as daily stand-ups, weekly sprint planning sessions, retrospectives, and CI/CD pipelines to carry out effective project management and teamwork. Designed and implemented the reminder feature of the website using HTML, CSS, and JavaScript. Delivered a compelling final presentation, effectively communicating the website’s key features and highlighting the team’s ability to overcome technical and interpersonal challenges throughout the project.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Agile Methodologies', 'CI/CD'],
  },
  {
    title: 'MoodGuru',
    company: 'CodePath Android App Development',
    type: "project",
    duration: 'Apr 2022 – May 2022',
    location: 'Remote',
    description: 'Worked in a team of 3 to create a mood-tracking Android app using Kotlin and Android Studio. Integrated NLP sentiment analysis tool to provide real-time analysis and categorization of user-generated content. Designed and prototyped the UI of multiple components and screens, optimizing the user experience. Showcased the app to a national audience as a top 10 finalist on the CodePath 2022 National Demo Day.',
    skills: ['Kotlin', 'Android Studio', 'NLP', 'UI/UX Design', 'Sentiment Analysis'],
  },
  
];