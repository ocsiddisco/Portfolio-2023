import Image from "next/image";

export const projects = [
  {
    id: 2,
    title: "Treenation API",
    description:
      "Consumes Treenation API to present projects available for funding.",
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
  {
    id: 4,
    title: "Make-Up & Hair Artist",
    description: "Portfolio for a fictional make-up & hair artist.",
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
    id: 5,
    title: "Portfolio 2023",
    description: "New version of my portfolio.",
    stack: ["HTML", "CSS", "JavaScript", "Next.js", "Vercel", "Playwright"],
    github: "https://github.com/ocsiddisco/Portfolio-2023",
    image: (
      <Image
        src="/OvalProjectP.png"
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
    id: 3,
    title: "Project House Listing",
    description:
      "House listing website allowing you to search, add, update, delete houses.",
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
    id: 7,
    title: "To Do App",
    description:
      "Responsive web app with a login form for managing your own list of tasks.",
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
];

export const groupProjects = [
  {
    id: 10,
    title: "Zest",
    description:
      "Zest is the result of teamwork during a 'Voyage' organized by the community Chingu. Our team built a web app that lets users find and sort recipes. ",
    stack: [
      "HTML",
      "CSS Modules",
      "Javascript",
      "React",
      "React Router",
      "Redux",
      "Vite",
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
  {
    id: 11,
    title: "Task Zen -ongoing-",
    description:
      "Task Zen is the result of teamwork during a 'Voyage' organized by the community Chingu. Our team built a daily tasks management application. It allows users to work alone or in team on a task, to set a weekly or monthly recurrence.",
    stack: [
      "HTML",
      "Tailwind",
      "Javascript",
      "React",
      "React Router",
      "Node.js",
      "Express",
      "JWT",
      "Mongo DB",
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
    url: "",
  },
  {
    id: 12,
    title: "Smart Shopping List -ongoing-",
    description:
      "Thanks to the community The Collab Lab, I get the opportunity to work on a group project, supported with a team of mentors. We practice pair-programming, learn best practices for PR and reviews, get feedbacks on our code... The project just started, and the learnings are already tangible.",
    stack: ["HTML", "CSS", "Javascript", "React", "React Router", "FireBase"],
    github: "https://github.com/chingu-voyages/v47-tier3-team-27",
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
    url: "",
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
