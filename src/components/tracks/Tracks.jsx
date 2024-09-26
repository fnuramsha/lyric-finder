import React, { useContext, useEffect } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";
import Spinner from "../../components/layout/spinner";
import Track from "./Track";

const Tracks = () => {
  const { getData, trackList, setTrackList, helperFunc } =
    useContext(tracksContext);

  //debugging code
  const displayTracks = () => {
    helperFunc();
  };
  useEffect(() => {
    // call the function when the component mounts
    const fetchData = async () => {
      await getData(trackList);
    };
    fetchData();
  }, []);

  return (
    <div className="text-center">
      <h3>Top 10 Tracks</h3>
      <div className="row"></div>
      {trackList.map((track) => {
        <Track key={track.track_id} track={track} />;
      })}
    </div>
  );
};
export default Tracks;
