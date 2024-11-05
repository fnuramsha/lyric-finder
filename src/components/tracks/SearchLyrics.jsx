import React, { useContext, useEffect } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";
import { useParams } from "react-router-dom";
import DisplaySearchLyrics from "./DisplaySearchLyrics";

const SearchLyrics = () => {
  const { lyrics, searchedTrackList, getLyrics, setLyrics } =
    useContext(tracksContext);
  const { id } = useParams();

  const trackForSearch = searchedTrackList.find((trackListItemSearch) => {
    return trackListItemSearch.track.track_id === parseInt(id);
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
        <DisplaySearchLyrics lyric={lyrics} trackForSearch={trackForSearch} />
      </h5>
    </div>
  );
};

export default SearchLyrics;
