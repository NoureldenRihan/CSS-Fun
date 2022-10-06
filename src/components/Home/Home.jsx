import "./Home.css";
import "../Global.css";
import Presenter from "../Presenter/Presenter";

function Home() {
  return (
    <div className="homeMain">
      <Presenter animation={`fill`} />
      <div className="container">
        <header>
          <h1 className="title">CSS Fun</h1>
          <h3 className="about">
            I'm a frontend developer having some fun with CSS while showcasing
            my skills
          </h3>
          <button className="typicalbtn aboutbtn">More About Me</button>
        </header>
        <main>
          <section>
            <h2 className="text1">
              You are about to embark on a journey of some amazing CSS tricks
              made with pure CSS without any help of a styling or animation
              library
            </h2>
            <h3 className="text2">
              You can Navigate Back and forth with your arrow keys or "A" and
              "D" keys or press "esc" to return here.
            </h3>
            <div className="startbtnHolder">
              <button className="typicalbtn">Start Show</button>
              <button className="typicalbtn">View Individuals</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
