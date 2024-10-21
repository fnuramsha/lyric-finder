import React, { useContext, useEffect } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";
import Spinner from "../../components/layout/spinner";
import Track from "./Track";
import Lyrics from "./Lyrics";

const Tracks = () => {
  const { getData, trackList, setTrackList, setLyrics, getLyrics } =
    useContext(tracksContext);

  useEffect(() => {
    // call the function when the component mounts
    const fetchData = async () => {
      const updatedCartList = await getData(trackList);
      setTrackList(updatedCartList);
    };
    fetchData();
  }, []);

  return (
    <div className="text-center">
      {trackList === undefined || trackList.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <h3>Top 10 Tracks</h3>
          <div className="row">
            {trackList.map((item) => {
              return <Track key={item.track.track_id} track={item.track} />;
            })}
            <Lyrics />
          </div>
        </>
      )}
    </div>
  );
};
export default Tracks;
