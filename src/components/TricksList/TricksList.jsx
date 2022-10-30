import Trick from "../Trick/Trick";
import "./TricksList.css";
import Presenter from "../Presenter/Presenter";

function TricksList(props) {
  const tricks = props.tricks !== undefined ? props.tricks : "";
  const randomColorPicker = () => {
    let colors = [
      "rgb(255, 0, 0)",
      "rgb(255, 140, 0)",
      "rgb(255, 255, 0)",
      "rgb(60, 255, 0)",
      "rgb(0, 255, 225)",
      "rgb(0, 0, 255)",
      "rgb(255, 0, 255)",
    ];
    let color = colors[Math.floor(Math.random() * colors.length)];

    return color;
  };
  return (
    <div>
      <Presenter animation={"empty"} />
      <div className="listholder">
        <h1 className="listTitle">Tricks</h1>
        {tricks.map((item) => (
          <Trick
            key={tricks.indexOf(item)}
            name={item.name}
            color={randomColorPicker()}
          />
        ))}
      </div>
    </div>
  );
}

export default TricksList;
