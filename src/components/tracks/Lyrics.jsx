import React, { useContext, useEffect } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";
import { useParams } from "react-router-dom";
import Lyric from "./DisplayLyrics";

const Lyrics = () => {
  const { getLyrics, setLyrics, lyrics, trackList } = useContext(tracksContext);
  const { id } = useParams();
  console.log("Checking Id", id);
  console.log("checking tracklist", trackList);

  const track = trackList.find((trackListItem) => {
    return trackListItem.track.track_id === parseInt(id);
  });

  useEffect(() => {
    const fetchLyrics = async () => {
      const updatedLyricsData = await getLyrics(id);
      setLyrics(updatedLyricsData);
      console.log("Fetched Lyrics Data:", updatedLyricsData);
    };
    fetchLyrics();
  }, []);

  return (
    <div>
      <h5>
        <Lyric lyric={lyrics} track={track} />
      </h5>
    </div>
  );
};

export default Lyrics;
