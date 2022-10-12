import "./LoadingAnimation1.css";
import Presenter from "../Presenter/Presenter";

function LoadingAnimation1() {
  return (
    <div>
      <Presenter animation={"empty"} />
      <main className="LA1trick">
        <div className="LA1loaders">
          <div className="LA1loader1"></div>
          <div className="LA1loader2"></div>
          <div className="LA1loader3"></div>
        </div>
      </main>
    </div>
  );
}

export default LoadingAnimation1;
