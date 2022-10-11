import "./TouchNavigator.css";

function Navigator(props) {
  return (
    <>
      <div className="right" onClick={() => props.touchNav("right")}></div>
      <div className="left" onClick={() => props.touchNav("left")}></div>
    </>
  );
}

export default Navigator;
