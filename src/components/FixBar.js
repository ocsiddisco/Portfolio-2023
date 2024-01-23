import Image from "next/image";

const FixBar = () => {
  return (
    <nav className="nav-container">
      <div>
        <a href="https://github.com/ocsiddisco" target="_blank">
          <Image
            src="/github-60.png"
            alt="go to github"
            width="50"
            height="50"
          />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/celinelecorvaisier/"
          target="_blank"
        >
          <Image
            src="/linkedin-60.png"
            alt="go to linkedin"
            width="50"
            height="50"
          />
        </a>
      </div>

      <div>
        <a href="mailto:celine.le.corv@gmail.com" target="_blank">
          <Image
            src="/envelope-60.png"
            alt="send email"
            width="50"
            height="50"
          />
        </a>
      </div>
    </nav>
  );
};

export default FixBar;
