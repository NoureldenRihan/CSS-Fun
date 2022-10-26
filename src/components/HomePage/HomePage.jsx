import "./HomePage.css";
import "../Global.css";
import Info from "../Info/Info";
import Presenter from "../Presenter/Presenter";

function HomePage() {
  return (
    <div className="homeMain">
      <div className="overlay"></div>
      <Presenter animation={"empty"} />
      <div className="moonholder">
        <div className="mooncontainer">
          <div className="moon">
            <img src="/images/redmoon2.png" alt="red moon" />
          </div>
        </div>
      </div>
      <div className="container">
        <header>
          <h1 className="title">CSS Fun</h1>
        </header>
        <Info />
      </div>
      <footer>
        <h3>
          <a href="https://nourelden-rihan.web.app/">More About the dev</a>
        </h3>
        <p>
          <a href="https://www.freepik.com/free-photo/outer-space-background_4246756.htm#page=15&query=illustration&position=9&from_view=search&track=sph">
            Image by rawpixel.com
          </a>
          &nbsp; on Freepik
        </p>
      </footer>
    </div>
  );
}

export default HomePage;

//Image by rawpixel.com
//<a href="https://www.freepik.com/free-photo/outer-space-background_4246756.htm#page=15&query=illustration&position=9&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik
