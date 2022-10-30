import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import TouchNavigator from "../TouchNavigator/TouchNavigator";

function TrickContainer(props) {
  const tricks = props.tricks !== undefined ? props.tricks : "";
  const navigate = useNavigate();
  let { trickName } = useParams();
  let [counter, setcounter] = useState(0);

  useEffect(() => {
    window.addEventListener("keyup", trickSetup);
  }, [counter]);

  const trickSetup = (e) => {
    switch (e.key) {
      case "a":
        counterChecker("dec");
        return;
      case "d":
        counterChecker("inc");
        return;
      case "Escape":
        navigate("/");
        return;
      default:
        return;
    }
  };

  const counterChecker = (state) => {
    if (state === "inc") {
      if (counter + 1 > tricks.length - 1) {
        setcounter(0);
      } else {
        setcounter(counter + 1);
      }
      navigate(`/${tricks[counter].name}`);
    } else if (state === "dec") {
      if (counter - 1 < 0) {
        setcounter(tricks.length - 1);
      } else {
        setcounter(counter - 1);
      }
      navigate(`/${tricks[counter].name}`);
    }
  };

  const displayTrick = () => {
    window.removeEventListener("keyup", trickSetup);
    if (props.chosen) {
      return tricks.map((trick) => {
        if (trick.name !== trickName) {
          return null;
        }
        return trick.component;
      });
    } else {
      return <Navigate to={`/${tricks[0].name}`} replace />;
    }
  };

  const touchNav = (direction) => {
    if (direction === "right") {
      counterChecker("inc");
    } else if (direction === "left") {
      counterChecker("dec");
    } else if (direction === "top") {
      navigate("/");
    }
  };

  return (
    <div>
      <TouchNavigator touchNav={touchNav} />
      {displayTrick()}
    </div>
  );
}

export default TrickContainer;
