import { useState, useEffect } from "react";
import Station from "./components/Station";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import PlayerPanel from "./components/PlayerPanel";

const totalRadioStations = 52;

const getFilteredStations = (items, query) => {
  if (!query) {
    return items;
  }
  return items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

function App() {
  const [stationList, setStationList] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [radioSource, setRadioSource] = useState("");

  useEffect(() => {
    getRadioStations();
  }, []);

  async function getRadioStations() {
    try {
      const res = await fetch(
        "https://api.sr.se/api/v2/channels?format=json&size=100"
      );
      const data = await res.json();
      setStationList(data.channels);
    } catch (e) {
      console.error(e.error);
    } finally {
      setIsLoading(false);
    }
  }

  const filteredStations = getFilteredStations(stationList, query);

  return (
    <>
      <header>
        <h1>SWEDISH RADIO STATIONS</h1>
        {/* fix problem with the key prop warning in the PlayerPanel */}
        <PlayerPanel key={radioSource} source={radioSource} />
      </header>

      <label style={{ fontSize: "x-large" }}>
        Filter Radios Stations :
        <input
          style={{ height: "30px", fontSize: "xx-large " }}
          size={5}
          type="text"
          maxLength={15}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </label>

      <div>
        {isLoading ? (
          <SkeletonTheme baseColor="#B9B9B9" highlightColor="#444">
            <Skeleton count={totalRadioStations} />
          </SkeletonTheme>
        ) : (
          <ol>
            {filteredStations.map((st) => (
              <li key={st.id}>
                <div className="stationContainer">
                  <Station radioData={st} radioSourceFn={setRadioSource} />
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}

export default App;
