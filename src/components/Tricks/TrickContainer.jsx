import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import BorderAnimation1 from "../AnimationBorder1/BorderAnimation1";
import LoadingAnimation1 from "../LoadingAnimation1/LoadingAnimation1";

function TrickContainer(props) {
  const [tricks] = useState([
    {
      name: "BorderAnimation1",
      component: <BorderAnimation1 key={"BA1"} />,
    },
    {
      name: "LoadingAnimation1",
      component: <LoadingAnimation1 key={"LA1"} />,
    },
  ]);
  const navigate = useNavigate();
  let [counter, setcounter] = useState(0);

  let { trickName } = useParams();

  useEffect(() => {
    window.addEventListener("keyup", trickSetup);
  }, [counter]);

  const trickSetup = (e) => {
    switch (e.key) {
      case "a":
        if (counter - 1 < 0) {
          setcounter(tricks.length - 1);
        } else {
          setcounter(counter - 1);
        }
        navigate(`/${tricks[counter].name}`);
        return;
      case "d":
        if (counter + 1 > tricks.length - 1) {
          setcounter(0);
        } else {
          setcounter(counter + 1);
        }
        navigate(`/${tricks[counter].name}`);
        return;
      case "Escape":
        navigate("/");
        return;
      default:
        return;
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

  return <div>{displayTrick()}</div>;
}

export default TrickContainer;
