import React, { useContext, useEffect } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";
import { useParams } from "react-router-dom";
import Lyric from "./Lyric";

const Lyrics = () => {
  const { getLyrics, setLyrics, lyrics } = useContext(tracksContext);
  const { id } = useParams();
  console.log("Checking Id", id);

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
        <Lyric lyric={lyrics} />
      </h5>
    </div>
  );
};

export default Lyrics;
