import React from "react";

const styles = {
  CONTAINER: {
    display: "flex",
    flexDirection: "row",
    width: "550px",
    height: "140px",
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
  return (
    <div style={styles.CONTAINER}>
      <div>
        <img src={props.logoImg} style={styles.LOGO}></img>
      </div>
      <div style={styles.INNER_CONTAINER}>
        <h2>{props.name}</h2>
        <div>
          <audio controls>
            <source src={props.source} />
          </audio>
        </div>
      </div>
    </div>
  );
}
