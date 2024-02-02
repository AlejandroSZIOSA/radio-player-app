import { useState, useEffect } from "react";
import Station from "./components/Station";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./App.css";

let textInput;

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
      /* console.log(data.channels); */
      setStationList(data.channels);
    } catch (e) {
      console.error(e.error);
    } finally {
      setIsLoading(false);
    }
  }

  /* const filteredList = stationList.filter((st) =>{
    const radioName= st.name.toLowerCase();
    const searchTerms= textInput.toLowerCase && radioName ==
    st.toLowerCase().includes(query.toLowerCase())
  
  }
  ); */

  function readInput(event) {
    textInput = event.target.value;
    //console.log(textInput);
  }
  return (
    <>
      <h1>RADIO STATIONS</h1>
      {/* <input type="text" onChange={readInput}></input>
      <button onClick={readInput}> Search</button> */}
      <div>
        {isLoading ? (
          <Skeleton count={10} />
        ) : (
          <ol>
            {stationList.map((st) => (
              <li key={st.id}>
                <div className="stationContainer">
                  <Station
                    source={st.liveaudio.url}
                    logoImg={st.imagetemplate}
                    name={st.name}
                  />
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
