import "./LoadingAnimation1.css";
import Presenter from "../Presenter/Presenter";

function LoadingAnimation1() {
  return (
    <div>
      <Presenter animation={"empty"} />
      <main className="LA1trick">
        <div className="loaders">
          <div className="loader1"></div>
          <div className="loader2"></div>
          <div className="loader3"></div>
        </div>
      </main>
    </div>
  );
}

export default LoadingAnimation1;
