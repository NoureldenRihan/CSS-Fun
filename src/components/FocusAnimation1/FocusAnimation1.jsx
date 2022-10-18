import Presenter from "../Presenter/Presenter";
import "./FocusAnimation1.css";

function FocusAnimation1() {
  return (
    <div>
      <Presenter animation={"empty"} />
      <main className="FA1trick">
        <div className="FA1background"></div>
        <div className="FA1textholder">
          <div className="FA1Container">
            <span className="FA1Letter">Y</span>
            <span className="FA1Letter">o</span>
            <span className="FA1Letter">u</span>
          </div>
          <div className="FA1Container">
            <span className="FA1Letter">a</span>
            <span className="FA1Letter">r</span>
            <span className="FA1Letter">e</span>
          </div>
          <div className="FA1Container">
            <span className="FA1Letter">b</span>
            <span className="FA1Letter">e</span>
            <span className="FA1Letter">a</span>
            <span className="FA1Letter">u</span>
            <span className="FA1Letter">t</span>
            <span className="FA1Letter">i</span>
            <span className="FA1Letter">f</span>
            <span className="FA1Letter">u</span>
            <span className="FA1Letter">l</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FocusAnimation1;
