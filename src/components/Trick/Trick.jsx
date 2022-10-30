import { Link } from "react-router-dom";
import "./Trick.css";

function Trick(props) {
  const name = props.name;
  return (
    <div className="trickholder" style={{ "--bgColor": props.color }}>
      <button className="trick">
        <Link to={`/${name}`}>{name}</Link>
      </button>
    </div>
  );
}

export default Trick;
