import "./Main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrickContainer from "./components/Tricks/TrickContainer";
import HomePage from "./components/HomePage/HomePage";

function Main() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tricklist" element={<HomePage />} />
          <Route
            path="/:trickName"
            element={<TrickContainer chosen={true} />}
          />
          <Route path="/tricks" element={<TrickContainer chosen={false} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
