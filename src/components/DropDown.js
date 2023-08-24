import Arrows from "./Arrows.js";
import { exo2 } from "@/styles/utils/fonts.js";

const DropDown = (props) => {
  return (
    <div
      className="hover"
      onClick={props.handleClick}
      style={{ display: "flex", alignItems: "center" }}
    >
      <h3 className="gradient-text" style={exo2.style}>
        {props.text}
      </h3>
      <Arrows direction={props.show ? "up" : "down"} />
    </div>
  );
};

export default DropDown;
