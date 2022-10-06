import "./Home.css";
import "../Global.css";
import Presenter from "../Presenter/Presenter";
import { Link } from "react-router-dom";
import Info from "../Info/Info";

function Home() {
  return (
    <div className="homeMain">
      <div className="overlay"></div>
      <Presenter animation={`fill`} />
      <div className="container">
        <header>
          <h1 className="title">CSS Fun</h1>
          <h3 className="about">
            I'm a frontend developer having some fun with CSS while showcasing
            my skills
          </h3>
          <button className="typicalbtn aboutbtn">
            <Link to={"s"}>More About Me</Link>
          </button>
        </header>
        <Info />
      </div>
    </div>
  );
}

export default Home;
