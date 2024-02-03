import { useState, useEffect } from "react";
import Station from "./components/Station";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

const totalRadioStations = 52;

/* const test = [
  {
    id: 1,
    name: "hola1",
    date: "now1",
  },
  {
    id: 2,
    name: "hola2",
    date: "now2",
  },
  {
    id: 3,
    name: "hola3",
    date: "now3",
  },
]; */

//Outside app component
const getFilteredStations = (items, query) => {
  if (!query) {
    return items;
  }
  return items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

//App Component
function App() {
  const [stationList, setStationList] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
      <h1>RADIO STATIONS</h1>
      <label style={{ fontSize: "x-large" }}>
        Filter Radios Stations :{"  "}
        <input
          style={{ height: "30px", fontSize: "xx-large " }}
          size={16}
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
                  <Station radioData={st} />
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
