import classes from "./Station.module.css";

export default function Station(props) {
  const imageSquare = props.radioData.image;
  const logoImg = props.radioData.imagetemplate;
  const name = props.radioData.name;
  const source = props.radioData.liveaudio.url;
  const bgColor = props.radioData.color;
  const { radioSourceFn, radioNameFn } = props;

  return (
    <div
      className={classes.stationContainer}
      style={{
        display: "inline-flex",
        backgroundColor: "#" + bgColor,
        border: "2px solid black",
      }}
    >
      <img
        src={imageSquare}
        onClick={() => {
          radioSourceFn(source);
          radioNameFn(name);
        }}
        className={classes.logo}
        alt={name}
      ></img>
      <span>{name}</span>
    </div>
  );
}
