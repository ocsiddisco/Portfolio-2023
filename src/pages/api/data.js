import Image from "next/image";

export const data = [
  {
    id: 1,
    title: "Face Recognition",
    description: "Uses Clarifai API to detect faces on photos",
    stack: "React, Node,js, Express, PostgreSQL, Render, AWS RDS",
    github: "https://github.com/ocsiddisco/Face-Recognition",
    image: <Image src="/project.png" width="150" height="150" />,
    url: "https://face-recognition-front-mm4d.onrender.com/",
  },
  {
    id: 2,
    title: "Treenation API",
    description:
      "Uses Treenation API to present projects available for funding",
    stack: "React, Redux Toolkit, React Router, Recharts, Render",
    github: "https://github.com/ocsiddisco/Treenation-Project",
    image: <Image src="/project.png" width="150" height="150" />,
    url: "https://treenation-project.onrender.com/",
  },
  {
    id: 3,
    title: "Project House Listing",
    description:
      "House listing website allowing you to search/add/update/delete houses.",
    stack: "Vue, Pinia, Router",
    github: "https://github.com/ocsiddisco/Project-House-Listing",
    image: "",
    url: <Image src="/project.png" width="150" height="150" alt="project" />,
  },
];
