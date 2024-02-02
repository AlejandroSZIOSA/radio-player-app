import { useState, useEffect } from "react";
import Station from "./components/Station";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

var textInput;
const totalRadioStations = 52;

/* function filterList({ setFilterResults }) {} */

const test = [
  {
    id: 1,
    name: "test",
    date: "now",
  },
  {
    id: 2,
    name: "hola",
    date: "now2",
  },
];

function App() {
  const [stationList, setStationList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
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
      setFilteredList(stationList);
      setIsLoading(false);
    }
  }

  /* const filteredList = stationList.filter((st) => {
    const radioName = st.name.toLowerCase();
    const searchTerms =
      textInput.toLowerCase &&
      radioName == st.toLowerCase().includes(query.toLowerCase());
  });
 */

  function filterItems(arr, query) {
    return arr.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  function readInput(event) {
    textInput = event.target.value;
    /* setTex(textInput); */
    //console.log(textInput);
    /* console.log(filteredList); */

    if (textInput == "") {
      setFilteredList(stationList);
    } else {
      var filterList = filterItems(stationList, textInput);
      setFilteredList(filterList);
    }
    /* setFilterResults(filterList); */
    /* console.log(filterList); */
  }
  return (
    <>
      <h1>RADIO STATIONS</h1>
      <label>
        Filter Radios Channels:
        <input type="text" onChange={readInput}></input>
      </label>
      <ol>
        {filteredList.map((item) => (
          <li key={item.id}> {item.name}</li>
        ))}
      </ol>

      {/* <div>
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
      </div> */}
    </>
  );
}

export default App;
