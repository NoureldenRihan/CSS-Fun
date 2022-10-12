import "./TouchNavigator.css";

function Navigator(props) {
  return (
    <>
      <div className="top" onClick={() => props.touchNav("top")}></div>
      <div className="right" onClick={() => props.touchNav("right")}></div>
      <div className="left" onClick={() => props.touchNav("left")}></div>
    </>
  );
}

export default Navigator;
