import Image from "next/image";

export const projects = [
  {
    id: 5,
    title: "Portfolio",
    description:
      "This is my third portfolio, and it reflects the journey of learning and the evolution of my skills.",
    stack: ["HTML", "ModulesCSS", "JavaScript", "Next.js", "Vercel"],
    github: "https://github.com/ocsiddisco/Portfolio-2023",
    image: (
      <Image
        src="/OvalProjectNewP.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
    url: "",
  },
  {
    id: 9,
    title: "ExploreNations",
    description: "Responsive website presenting data using cards and tables.",
    stack: ["HTML", "CSS", "JavaScript", "Next.js", "Mui Library", "Vercel"],
    github: "https://github.com/ocsiddisco/ExploreNations",
    image: (
      <Image
        src="/OvalProjectEN.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
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
    image: (
      <Image
        src="/OvalProjectL.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
    url: "https://todo-app-frontend-istz.onrender.com/",
  },
  {
    id: 4,
    title: "Make-Up & Hair Artist",
    description:
      "Portfolio for a fictional make-up & hair artist. On the homepage, it uses a parallax effect. On the Bridal and Fashion page, a grid was used to structure the presentation of photos.",
    stack: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwindcss", "Vercel"],
    github: "https://github.com/ocsiddisco/MakeUpArtist2023",
    image: (
      <Image
        src="/OvalProjectM.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
    url: "https://make-up-artist2023.vercel.app/",
  },

  {
    id: 3,
    title: "Project House Listing",
    description:
      "My first project using Vue.js (composition API). It is a house listing website allowing you to search, add, update, delete houses.",
    stack: ["HTML", "CSS", "JavaScript", "Vue", "Pinia", "Router"],
    github: "https://github.com/ocsiddisco/Project-House-Listing",
    image: (
      <Image
        src="/OvalProjectH.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
    url: "",
  },
  {
    id: 8,
    title: "Zin in sommen?",
    description:
      "Personal project made to help my 7-year-old daughter learn mathematics.",
    stack: ["HTML", "Tailwindcss", "JavaScript", "React", "Netlify"],
    github: "https://github.com/ocsiddisco/Maths-games",
    image: (
      <Image
        src="/OvalProjectZS.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
    url: "https://main--vermillion-gnome-8e6924.netlify.app/",
  },
  {
    id: 2,
    title: "Treenation API",
    description:
      "Consumes Treenation API to present projects available for funding. Api calls are stored in Redux store and results are used through the app to display the data.",
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
    image: (
      <Image
        src="/OvalProjectT.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
    url: "https://treenation-project.onrender.com/",
  },
];

export const groupProjects = [
  {
    id: 12,
    title: "Smart Shopping List -ongoing-",
    description:
      "Thanks to the community The Collab Lab, I get the opportunity to work on a group project, supported with a team of mentors. We practice pair-programming, learn best practices for PR and reviews, get feedbacks on our code... The project just started, and the learnings are already tangible.",
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "React Router",
      "FireBase",
      "Code Review",
      "Team Work",
      "Pair-programming",
    ],
    github: "https://github.com/the-collab-lab/tcl-71-smart-shopping-list",
    image: (
      <Image
        src="/OvalProjectSmart.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
    url: "https://tcl-71-smart-shopping-list.web.app/",
  },
  {
    id: 11,
    title: "Task Zen -ongoing-",
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
    image: (
      <Image
        src="/OvalProjectTaskZen.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
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
    image: (
      <Image
        src="/OvalProjectZest.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
    url: "https://main--chingu-voyage-v46-tier-2-team-16.netlify.app/",
  },
];

export const projectsCourses = [
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
    image: (
      <Image
        src="/OvalProjectN.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
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
    image: (
      <Image
        src="/OvalProjectS.png"
        width="170"
        height="170"
        alt="image-project"
        style={{
          borderStyle: "none",
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    ),
    url: "https://face-recognition-front-mm4d.onrender.com/",
  },
];

export const hardSkills = [
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

export const softSkills = [
  "Resourcefulness",
  "Collaboration",
  "Problem-Solving",
  "Organizational",
  "Take Ownership",
  "Time Management",
];
