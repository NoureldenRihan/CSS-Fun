import Presenter from "../Presenter/Presenter";
import "./BorderAnimation2.css";

function BorderAnimation2() {
  return (
    <div>
      <Presenter animation={"empty"} />
      <main className="BA2trick">
        <div className="BA2btn1holder">
          <button className="BA2btn1">Hover Here</button>
        </div>
      </main>
    </div>
  );
}

export default BorderAnimation2;
