import React, { useContext } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";
import Spinner from "../../components/layout/spinner";
import Track from "./Track";

const Tracks = () => {
  const { getData, trackList } = useContext(tracksContext);
  const displayTracks = async () => {
    const list = await getData(trackList);
    console.log(list);
    // if (list === undefined || list.length === 0) {
    //   return <Spinner />;
    // } else {
    //   console.log("Tracks Loaded");
    // }
  };

  return (
    <div className="text-center">
      <h3>Top 10 Tracks</h3>
      <div className="row">
        <button onClick={displayTracks}>click me</button>
        {/* {myResponse.map((item) => (
          <Track key={item.track.track_id} track={item.track} />
        ))} */}
      </div>
    </div>
  );
};
export default Tracks;
