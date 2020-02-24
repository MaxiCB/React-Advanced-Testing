import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";
// API Calls && Utiil functions
import {fetchShow} from './api/fetchShow';
import {formatSeasons} from "./utils/formatSeasons";
// Components
import Episodes from "./components/Episodes";

const App = () => {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => {
    fetchShow()
      .then(res => {
        setShow(res.data);
        console.log(res.data)
        setSeasons(formatSeasons(res.data._embedded.episodes));
      });
  }, []);

  const handleSelect = e => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2 data-testid={'loading'}>Fetching data...</h2>;
  }

  return (
    <div className="App" data-testid={'loaded'}>
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}

export default App