import { exo2 } from "@/styles/utils/fonts.js";

const Contact = () => {
  return (
    <div style={exo2.style}>
      <h2>Get in touch</h2>
      <p>
        If you want us to work together, have any questions or want me to meet,
        my inbox is always open.
      </p>
      <a
        href="mailto:celine.le.corv@gmail.com"
        target="_blank"
        className="cta-btn"
        style={{ textDecoration: "none" }}
      >
        <button>Contact Me</button>
      </a>
    </div>
  );
};

export default Contact;
