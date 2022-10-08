import Presenter from "../Presenter/Presenter";
import "./AnimationBorder1.css";

function AnimationBorder1() {
  return (
    <div>
      <Presenter animation={"empty"} />
      <main className="trick">
        <div className="holder1">
          <h1>Border Animation</h1>
        </div>
        <div className="holder2"></div>
        <div className="holder3"></div>
        <div className="holder4"></div>
        <div className="holder5"></div>
        <div className="holder6"></div>
        <div className="holder7"></div>
        <div className="holder8"></div>
        <div className="holder9"></div>
        <div className="holder10"></div>
      </main>
    </div>
  );
}

export default AnimationBorder1;
