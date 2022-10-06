import "./Main.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrickContainer from "./components/Tricks/TrickContainer";

function Main() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tricklist" element={<Home />} />
          <Route path="/tricks" element={<TrickContainer />} />
        </Routes>
        <Home />
      </div>
    </Router>
  );
}

export default Main;
