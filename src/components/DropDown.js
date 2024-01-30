import Arrows from "./Arrows.js";
import { exo2 } from "@/styles/utils/fonts.js";

const DropDown = (props) => {
  return (
    <div className="" style={{ display: "flex", alignItems: "center" }}>
      <h3 className="gradient-text" style={exo2.style}>
        {props.text}
      </h3>

      <button
        className="expand hover"
        onClick={props.handleClick}
        aria-label="expand information"
      >
        <Arrows direction={props.show ? "up" : "down"} />
      </button>
    </div>
  );
};

export default DropDown;
