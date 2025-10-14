import classes from "./Station.module.css";

export default function Station(props) {
  const imageSquare = props.radioData.image;
  const radioName = props.radioData.name;
  const source = props.radioData.liveaudio.url;
  const bgColor = props.radioData.color;
  const { radioSourceFn, radioNameFn } = props;

  return (
    <div
      className={classes.stationContainer}
      style={{
        backgroundColor: "#" + bgColor,
      }}
      onClick={() => {
        radioSourceFn(source);
        radioNameFn(radioName);
      }}
    >
      <img
        src={imageSquare}
        className={classes.radioLogo}
        alt={radioName}
      ></img>
      <span>{radioName}</span>
    </div>
  );
}
