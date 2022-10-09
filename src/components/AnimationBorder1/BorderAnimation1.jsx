import Presenter from "../Presenter/Presenter";
import "./BorderAnimation1.css";

function BorderAnimation1() {
  return (
    <div>
      <Presenter animation={"empty"} />
      <main className="BA1trick">
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

export default BorderAnimation1;
