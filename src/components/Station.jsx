import React from "react";

const styles = {
  CONTAINER: {
    display: "flex",
    flexDirection: "row",
    width: "550px",
    height: "135px",
    alignItems: "center",
    backgroundColor: "grey",
    justifyContent: "space-around",
  },
  LOGO: {
    width: "auto",
    height: "110px",
  },
  INNER_CONTAINER: {
    display: "flex",
    flexDirection: "column",
  },
};

//TODO: Overriding styles

export default function Station(props) {
  const logoImg = props.radioData.imagetemplate;
  const name = props.radioData.name;
  const source = props.radioData.liveaudio.url;

  return (
    <div style={styles.CONTAINER}>
      <div>
        <img src={logoImg} style={styles.LOGO}></img>
      </div>
      <div style={styles.INNER_CONTAINER}>
        <h2>{name}</h2>
        <div>
          <audio controls>
            <source src={source} />
          </audio>
        </div>
      </div>
    </div>
  );
}
