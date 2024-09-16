import React, { useContext } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";

const Tracks = () => {
  const { tracks } = useContext(tracksContext);
  return (
    <div className="text-center">
      <h3>Top 10 Tracks</h3>
      console.log(tracks)
      <div class="container">
        <div class="row align-items-center"></div>
      </div>
    </div>
  );
};
export default Tracks;
