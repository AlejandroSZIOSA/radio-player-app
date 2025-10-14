import classes from "./PlayerPanel.module.css";
import { useEffect, useState } from "react";

export default function PlayerPanel({ source, radioName }) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setMessage("Loading...");
    } else if (isPlaying) {
      setMessage(radioName);
    } else setMessage("No playing");
  }, [isLoading, isPlaying]);

  const handleCanPlay = () => {
    setIsLoading(true);
  };
  const handlePlaying = () => {
    setIsPlaying(true);
    setIsLoading(false);
  };

  return (
    <div className={classes.playerPanelContainer}>
      <audio
        controls
        autoPlay
        onCanPlay={handleCanPlay}
        onPlaying={handlePlaying}
      >
        {source ? <source src={source} /> : <p>No audio source provided</p>}
      </audio>
      <div className={classes.radioNameContainer}>
        <p>{message}</p>
      </div>
    </div>
  );
}
