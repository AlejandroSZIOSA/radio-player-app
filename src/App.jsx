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
  const [radioName, setRadioName] = useState("");

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
        <div>
          <h2>SWEDISH RADIO STATIONS</h2>
          {/* fix problem with the key prop warning in the PlayerPanel */}
          <PlayerPanel
            key={radioSource}
            source={radioSource}
            name={radioName}
          />
        </div>
        <div className="filterContainer">
          <p>Filter Radios </p>
          <input
            type="text"
            size={10}
            maxLength={15}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
      </header>
      <main>
        {isLoading ? (
          <SkeletonTheme baseColor="#B9B9B9" highlightColor="#444">
            <Skeleton count={totalRadioStations} />
          </SkeletonTheme>
        ) : (
          <ol>
            {filteredStations.map((st) => (
              <li key={st.id}>
                <Station
                  radioData={st}
                  radioSourceFn={setRadioSource}
                  radioNameFn={setRadioName}
                />
              </li>
            ))}
          </ol>
        )}
      </main>
      <footer>
        <div>
          <span className="pr-4 pl-8 font-sans">Chas</span>
          <img
            src="/public/chasAcademy_logo.svg"
            width={32}
            height="auto"
            alt="Logo"
          ></img>
          <span className="pl-4 font-sans">Academy</span>
        </div>
      </footer>
    </>
  );
}

export default App;
