import { useState, useEffect } from "react";
import "./App.css";
import Station from "./components/Station";

function App() {
  const [stationList, setStationList] = useState([]);

  useEffect(() => {
    getStations();
  }, []);

  async function getStations() {
    const res = await fetch(
      "https://api.sr.se/api/v2/channels?format=json&size=100"
    );
    const data = await res.json();
    /* console.log(data.channels); */
    setStationList(data.channels);
  }

  return (
    <>
      <h1>RADIO STATIONS</h1>
      <div>
        <ol>
          {stationList.map((st) => (
            <li key={st.id}>
              <div style={{ padding: "5px" }}>
                <Station name={st.name} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
