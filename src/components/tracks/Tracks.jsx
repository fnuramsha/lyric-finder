import React, { useContext } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";
import Spinner from "../../components/layout/spinner";
import Track from "./Track";

const Tracks = () => {
  const { getData, trackList, setTrackList, helperFunc } =
    useContext(tracksContext);
  // const displayTracks = () => {
  //   getData(setTrackList);

  //   // if (list === undefined || list.length === 0) {
  //   //   return <Spinner />;
  //   // } else {
  //   //   console.log("Tracks Loaded");
  //   // }
  // };
  // displayTracks();

  //debugging code
  const displayTracks = () => {
    helperFunc();
  };

  return (
    <div className="text-center">
      <h3>Top 10 Tracks</h3>
      <div className="row">
        {/* {trackList.map((track) => (
          <Track key={item.track.track_id} track={item.track} />
        ))} */}
      </div>
    </div>
  );
};
export default Tracks;
