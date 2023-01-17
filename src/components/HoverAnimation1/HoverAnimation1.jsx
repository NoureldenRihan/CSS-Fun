import "./HoverAnimation1.css";
import Presenter from "../Presenter/Presenter";
function HoverAnimation1() {
  return (
    <div>
      <Presenter animation={"empty"} />
      <main className="HA1trick">
        <h1 className="HA1text">Hover Animation</h1>
        <div className="HA1track1">
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
        </div>
        <div className="HA1track2">
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
        </div>
        <div className="HA1track3">
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
        </div>
        <div className="HA1track4">
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
          <span style={{ "--space": 60 }}></span>
        </div>
      </main>
    </div>
  );
}

export default HoverAnimation1;
