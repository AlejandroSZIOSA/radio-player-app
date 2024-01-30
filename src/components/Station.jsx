import React from "react";

const styles = {
  CONTAINER: {
    display: "flex",
    flexDirection: "row",
    width: "400px",
    height: "60",
    alignItems: "center",
    backgroundColor: "gray",
    justifyContent: "space-around",
  },
  LOGO: {
    width: "50px",
    height: "50px",
    backgroundColor: "red",
  },
  INNER_CONTAINER: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignContent: "right",
  },
};

export default function Station(props) {
  return (
    <div style={styles.CONTAINER}>
      <div style={styles.LOGO}></div>

      <div style={styles.INNER_CONTAINER}>
        <div>{props.name} </div>
        <div>
          <audio controls>
            <source
              src="https://sverigesradio.se/topsy/direkt/srapi/132.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
    </div>
  );
}
