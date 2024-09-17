import React, { useContext } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";

const Tracks = () => {
  const { getData, trackList } = useContext(tracksContext);
  const clickFunc = (e) => {
    getData(trackList);
  };
  return (
    <div className="text-center">
      <h3>Top 10 Tracks</h3>

      <div class="container">
        <div class="row align-items-center"></div>
        <button onClick={clickFunc}>Click me</button>
      </div>
    </div>
  );
};
export default Tracks;
