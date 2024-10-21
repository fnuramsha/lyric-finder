import React, { useContext, useEffect } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";
import { useParams } from "react-router-dom";

const Lyrics = (props) => {
  const { lyric } = props;

  const { getLyrics, setLyrics } = useContext(tracksContext);
  const { id } = useParams();
  console.log("Checking Id", id);

  useEffect(() => {
    const fetchLyrics = async () => {
      const updatedLyricsData = await getLyrics(id);
      setLyrics(updatedLyricsData);
    };
    fetchLyrics();
  }, []);

  return (
    <div>
      <h1> {Lyrics.lyrics_body} </h1>
    </div>
  );
};

export default Lyrics;
