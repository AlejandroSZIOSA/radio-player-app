import { useState, useEffect } from "react";
import Station from "./components/Station";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

let textInput;
const totalRadioStations = 52;

function App() {
  const [stationList, setStationList] = useState([]);
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
      /* console.log(data.pagination.totalhits); */
      setStationList(data.channels);
    } catch (e) {
      console.error(e.error);
    } finally {
      setIsLoading(false);
    }
  }

  function readInput(event) {
    textInput = event.target.value;
    //console.log(textInput);
  }
  return (
    <>
      <h1>RADIO STATIONS</h1>
      {/*   <label>
        Filter Radios Channels:
        <input type="text" onChange={readInput}></input>
      </label> */}
      <div>
        {isLoading ? (
          <SkeletonTheme baseColor="#B9B9B9" highlightColor="#444">
            <Skeleton count={totalRadioStations} />
          </SkeletonTheme>
        ) : (
          <ol>
            {stationList.map((st) => (
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
