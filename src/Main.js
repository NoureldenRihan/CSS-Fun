import "./Main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrickContainer from "./components/Tricks/TrickContainer";
import HomePage from "./components/HomePage/HomePage";
import TricksList from "./components/TricksList/TricksList";
import { useState } from "react";
import BorderAnimation1 from "./components/BorderAnimation1/BorderAnimation1";
import LoadingAnimation1 from "./components/LoadingAnimation1/LoadingAnimation1";
import BorderAnimation2 from "./components/BorderAnimation2/BorderAnimation2";
import FocusAnimation1 from "./components/FocusAnimation1/FocusAnimation1";
import BackgroundAnimation1 from "./components/BackgroundAnimation1/BackgroundAnimation1";

function Main() {
  const [tricks] = useState([
    {
      name: "BorderAnimation1",
      component: <BorderAnimation1 key={"BA1"} />,
    },
    {
      name: "LoadingAnimation1",
      component: <LoadingAnimation1 key={"LA1"} />,
    },
    {
      name: "BorderAnimation2",
      component: <BorderAnimation2 key={"BA2"} />,
    },
    {
      name: "FocusAnimation1",
      component: <FocusAnimation1 key={"FA1"} />,
    },
    {
      name: "BackgroundAnimation1",
      component: <BackgroundAnimation1 key={"BG1"} />,
    },
  ]);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trickslist" element={<TricksList tricks={tricks} />} />
          <Route
            path="/:trickName"
            element={<TrickContainer tricks={tricks} chosen={true} />}
          />
          <Route
            path="/tricks"
            element={<TrickContainer tricks={tricks} chosen={false} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
