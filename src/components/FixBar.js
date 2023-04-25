import Image from "next/image";

const FixBar = () => {
  return (
    <div className="nav-container">
      <div>
        <a href="https://github.com/ocsiddisco" target="_blank">
          <Image src="/github-60.png" alt="github" width="50" height="50" />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/celinelecorvaisier/"
          target="_blank"
        >
          <Image src="/linkedin-60.png" alt="linkedin" width="50" height="50" />
        </a>
      </div>

      <div>
        <a href="mailto:celine.le.corv@gmail.com" target="_blank">
          <Image src="/envelope-60.png" alt="email" width="50" height="50" />
        </a>
      </div>
    </div>
  );
};

export default FixBar;
