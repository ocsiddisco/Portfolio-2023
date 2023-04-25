import Image from "next/image";

export const data = [
  {
    id: 1,
    title: "Face Recognition",
    description: "Uses Clarifai API to detect faces on photos",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Render", "AWS RDS"],
    github: "https://github.com/ocsiddisco/Face-Recognition",
    image: (
      <Image
        src="/project.png"
        width="150"
        height="150"
        style={{ borderStyle: "none", borderRadius: "10px" }}
      />
    ),
    url: "https://face-recognition-front-mm4d.onrender.com/",
  },
  {
    id: 2,
    title: "Treenation API",
    description:
      "Uses Treenation API to present projects available for funding",
    stack: ["React", "Redux Toolkit", "React Router", "Recharts", "Render"],
    github: "https://github.com/ocsiddisco/Treenation-Project",
    image: (
      <Image
        src="/project.png"
        width="150"
        height="150"
        style={{ borderStyle: "none", borderRadius: "10px" }}
      />
    ),
    url: "https://treenation-project.onrender.com/",
  },
  {
    id: 3,
    title: "Project House Listing",
    description:
      "House listing website allowing you to search, add, update, delete houses.",
    stack: ["Vue", "Pinia", "Router"],
    github: "https://github.com/ocsiddisco/Project-House-Listing",
    image: (
      <Image
        src="/project.png"
        width="150"
        height="150"
        style={{ borderStyle: "none", borderRadius: "10px" }}
      />
    ),
    url: "",
  },
  {
    id: 4,
    title: "Portfolio 2023",
    description: "Showing off my awesome projects",
    stack: ["React", "Next.js"],
    github: "https://github.com/ocsiddisco/Portfolio-2023",
    image: (
      <Image
        src="/project.png"
        height="150"
        width="150"
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

export const hardSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Render",
  "Github",
  "VS Code",
];

export const softSkills = [
  "Resourfulness",
  "Problem-solving",
  "Organizational",
  "Dependability",
  "Time management",
];
