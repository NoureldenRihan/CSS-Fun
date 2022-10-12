import Presenter from "../Presenter/Presenter";
import "./BorderAnimation1.css";

function BorderAnimation1() {
  return (
    <div>
      <Presenter animation={"empty"} />
      <main className="BA1trick">
        <div className="BA1holder1">
          <h1>Border Animation</h1>
        </div>
        <div className="BA1holder2"></div>
        <div className="BA1holder3"></div>
        <div className="BA1holder4"></div>
        <div className="BA1holder5"></div>
        <div className="BA1holder6"></div>
        <div className="BA1holder7"></div>
        <div className="BA1holder8"></div>
        <div className="BA1holder9"></div>
        <div className="BA1holder10"></div>
      </main>
    </div>
  );
}

export default BorderAnimation1;
