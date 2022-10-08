import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import AnimationBorder1 from "../AnimationBorder1/AnimationBorder1";

function TrickContainer(props) {
  const [tricks] = useState([
    {
      name: "AnimationBorder1",
      component: <AnimationBorder1 key={"AB1"} />,
    },
  ]);

  let { trickName } = useParams();

  const displayTrick = () => {
    if (props.chosen) {
      return tricks.map((trick) => {
        if (trick.name !== trickName) {
          return 0;
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
