import classes from "./Station.module.css";

export default function Station(props) {
  const imageSquare = props.radioData.image;
  const logoImg = props.radioData.imagetemplate;
  const name = props.radioData.name;
  const source = props.radioData.liveaudio.url;
  const bgColor = props.radioData.color;
  const { radioSourceFn } = props;

  return (
    <div
      className={classes.stationContainer}
      style={{
        backgroundColor: "#" + bgColor,
      }}
    >
      <img src={imageSquare} className={classes.logo} alt={name}></img>
      <div className={classes.stationInnerContainer}>
        <button onClick={() => radioSourceFn(source)}>Play</button>
        {/* <PlayerPanel source={source} /> */}
      </div>
    </div>
  );
}
