import React from "react";

const styles = {
  LOGO: {
    width: "auto",
    height: "110px",
  },

  INNER_CONTAINER: {
    display: "flex",
    flexDirection: "column",
  },
};

export default function Station(props) {
  const logoImg = props.radioData.imagetemplate;
  const name = props.radioData.name;
  const source = props.radioData.liveaudio.url;
  const bgColor = props.radioData.color;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#" + bgColor,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
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
