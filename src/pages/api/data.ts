export type IProject = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  github: string;
  image: string;
  url: string;
};

export const projects: IProject[] = [
  {
    id: 5,
    title: "Portfolio",
    description:
      "This is my third portfolio, and it reflects the journey of learning and the evolution of my skills.",
    stack: ["HTML", "ModulesCSS", "TypeScript", "Next.js", "Vercel"],
    github: "https://github.com/ocsiddisco/Portfolio-2023",
    image: "/OvalProjectNewP.png",
    url: "",
  },
  {
    id: 9,
    title: "ExploreNations",
    description: "Responsive website presenting data using cards and tables.",
    stack: ["HTML", "CSS", "JavaScript", "Next.js", "Mui Library", "Vercel"],
    github: "https://github.com/ocsiddisco/ExploreNations",
    image: "/OvalProjectEN.png",
    url: "https://explorenations-ocsiddisco.vercel.app/",
  },
  {
    id: 7,
    title: "To Do App",
    description:
      "Responsive web app with a login form for managing your own list of tasks. I built both the backend and the frontend.",
    stack: [
      "Node.js",
      "Express",
      "Rest API",
      "Mongoose",
      "MongoDB",
      "JWT",
      "Jest",
      "SuperTest",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React router",
      "React hot toast",
      "Material UI",
      "Render",
    ],
    github: "https://github.com/ocsiddisco/todo2023",
    image: "/OvalProjectL.png",
    url: "https://todo-app-frontend-istz.onrender.com/",
  },
  {
    id: 4,
    title: "Make-Up & Hair Artist",
    description:
      "Portfolio for a fictional make-up & hair artist. On the homepage, it uses a parallax effect. On the Bridal and Fashion page, a grid was used to structure the presentation of photos.",
    stack: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwindcss", "Vercel"],
    github: "https://github.com/ocsiddisco/MakeUpArtist2023",
    image: "/OvalProjectM.png",
    url: "https://make-up-artist2023.vercel.app/",
  },

  {
    id: 3,
    title: "Project House Listing",
    description:
      "My first project using Vue.js (composition API). It is a house listing website allowing you to search, add, update, delete houses.",
    stack: ["HTML", "CSS", "JavaScript", "Vue", "Pinia", "Router"],
    github: "https://github.com/ocsiddisco/Project-House-Listing",
    image: "/OvalProjectH.png",
    url: "",
  },
  {
    id: 8,
    title: "Zin in sommen?",
    description:
      "Personal project made to help my 7-year-old daughter learn mathematics.",
    stack: ["HTML", "Tailwindcss", "JavaScript", "React", "Netlify"],
    github: "https://github.com/ocsiddisco/Maths-games",
    image: "/OvalProjectZS.png",
    url: "https://main--vermillion-gnome-8e6924.netlify.app/",
  },
  {
    id: 2,
    title: "Treenation API",
    description:
      "Consumes Treenation API to present projects available for funding. API calls are stored in Redux store and results are used through the app to display the data.",
    stack: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "React Router",
      "Recharts",
      "styled-components",
      "Render",
    ],
    github: "https://github.com/ocsiddisco/Treenation-Project",
    image: "/OvalProjectT.png",
    url: "https://treenation-project.onrender.com/",
  },
];

export const groupProjects: IProject[] = [
  {
    id: 12,
    title: "Despiensa",
    description:
      "Thanks to the community The Collab Lab, I get the opportunity to work on a group project, supported with a team of mentors. We practice pair-programming, learn best practices for PR and reviews and get feedbacks on our code. While the project is officialy finished, we are still improving Despiensa piece by piece.",
    stack: [
      "HTML",
      "TailwindCSS",
      "Javascript",
      "React",
      "React Router",
      "FireBase",
      "Code Review",
      "Team Work",
      "Pair-programming",
    ],
    github: "https://github.com/the-collab-lab/tcl-71-smart-shopping-list",
    image: "/OvalDespiensa.png",
    url: "https://www.despiensa.site/",
  },
  {
    id: 11,
    title: "Task Zen",
    description:
      "During a Chingu Voyage, our team created Task Zen: a collaborative daily task app with weekly/monthly recurrence. I contributed on the design (Figma), the backend authentication, and frontend parts as well.",
    stack: [
      "Figma",
      "HTML",
      "TailwindCSS",
      "Javascript",
      "React",
      "React Router",
      "Context",
      "Node.js",
      "Express",
      "JWT",
      "Mongoose",
      "Mongo DB",
      "Code Review",
      "Team Work",
    ],
    github: "https://github.com/chingu-voyages/v47-tier3-team-27",
    image: "/OvalProjectTaskZen.png",
    url: "https://taskzen-website.onrender.com/",
  },
  {
    id: 10,
    title: "Zest",
    description:
      "Zest is the result of teamwork during a 'Voyage' organized by the tech community Chingu. Our team built a web app that lets users find and sort recipes. More than technical skills, here what mattered the most was communicating, aligning with each other, and before coding already thinking how your part will integrate with the code of your teammates.",
    stack: [
      "HTML",
      "CSS Modules",
      "Javascript",
      "React",
      "React Router",
      "Redux",
      "Vite",
      "Code Review",
      "Team Work",
    ],
    github: "https://github.com/ocsiddisco/v46-tier2-team-16",
    image: "/OvalProjectZest.png",
    url: "https://main--chingu-voyage-v46-tier-2-team-16.netlify.app/",
  },
];

export const projectsCourses: IProject[] = [
  {
    id: 6,
    title: "Nasa - Mission Control",
    description:
      "Create fictitious launches that will visite possible habitable planets, keep track of previous launches (aborted or successful), abort planned launches. ",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Jest",
      "SuperTest",
      "CI-Pipeline",
      "REST API",
      "AWS-EC2",
      "Docker",
      "Javascript",
      "React",
    ],
    github: "https://github.com/ocsiddisco/nasa-project",
    image: "/OvalProjectN.png",
    url: "http://54.86.7.148:8000/launch",
  },
  {
    id: 1,
    title: "Face Recognition",
    description: "Uses Clarifai API to detect faces on photos.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Render",
      "AWS RDS",
    ],
    github: "https://github.com/ocsiddisco/Face-Recognition",
    image: "/OvalProjectS.png",
    url: "https://face-recognition-front-mm4d.onrender.com/",
  },
];

export const hardSkills: string[] = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "Module CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Rest API",
  "Render",
  "VS Code",
  "Azure",
  "Postman",
  "Git",
];

export const softSkills: string[] = [
  "Resourcefulness",
  "Collaboration",
  "Problem-Solving",
  "Organizational",
  "Take Ownership",
  "Time Management",
];
