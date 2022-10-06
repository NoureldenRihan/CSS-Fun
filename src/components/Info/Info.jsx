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
          You can Navigate Back and forth with your arrow keys or "A" and "D"
          keys or press "esc" to return here.
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
