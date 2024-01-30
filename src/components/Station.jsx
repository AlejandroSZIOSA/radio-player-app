import React from "react";

const styles = {
  CONTAINER: {
    display: "flex",
    flexDirection: "row",
    width: "400px",
  },
};

export default function Station({ name = "test" }) {
  return (
    <div style={styles.CONTAINER}>
      <div>{name}</div>
      <div></div>
    </div>
  );
}
