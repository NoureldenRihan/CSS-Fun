import "./Info.css";
import { Link } from "react-router-dom";

function Info() {
  return (
    <main>
      <section>
        <h2 className="text1">
          You are about to embark on a journey of some amazing Pure CSS tricks
        </h2>
        <h3 className="text2">
          You can Navigate with your <span>"A"</span> and <span>"D"</span> keys
          or by clicking on your screen's right and left sides <br /> Press
          <span> "esc"</span> or click on the top center portion of your screen
          to return here.
        </h3>
        <div className="startbtnHolder">
          <button className="typicalbtn">
            <Link to={"/tricks"}>Start Show</Link>
          </button>
          <button className="typicalbtn">
            <Link to={"/trickslist"}>Trick List</Link>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Info;
