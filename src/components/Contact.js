import { exo2, montserrat2 } from "@/styles/utils/fonts.js";

const Contact = () => {
  return (
    <div className="container-contact">
      <div className="contact-inside">
        <div>
          <h2 className="gradient-text" style={exo2.style}>
            Get in touch
          </h2>
        </div>
        <div className="contact-text" style={montserrat2.style}>
          <p className="text-space">Thank your for visiting my portfolio!</p>
          <p className="text-space">
            I am currently seeking to join a new team and would love to hear
            from you.
          </p>
          <p className="text-space">
            If you're interested in collaborating or have any questions, please
            don't hesitate to reach out. My inbox is always open, and I am happy
            to meet with you to discuss any opportunities.
          </p>
          <div className="container-button">
            <a
              href="mailto:celine.le.corv@gmail.com"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button style={montserrat2.style}>Contact Me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
