import Image from "next/image";
import styles from "@/styles/Home.module.css";

const FixBar = () => {
  return (
    <div className="nav-container">
      <div>
        <a href="https://github.com/ocsiddisco">
          <Image src="/github-60.png" alt="github" width="64" height="64" />
        </a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/celinelecorvaisier/">
          <Image src="/linkedin-60.png" alt="linkedin" width="64" height="64" />
        </a>
      </div>

      <div>
        <a href="mailto:celine.le.corv@gmail.com">
          <Image src="/envelope-60.png" alt="email" width="64" height="64" />
        </a>
      </div>
    </div>
  );
};

export default FixBar;
