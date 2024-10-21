import { createContext, useState } from "react";
import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get(
      `http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
    );

    const trackList = response.data.message.body.track_list;
    // console.log(trackList);
    // console.log(response);

    return trackList;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};

const getLyrics = async (id) => {
  try {
    const response = await axios.get(
      `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
    );

    const lyrics = response.data.message.body.lyrics;
    console.log(lyrics);
    return lyrics;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};

export const tracksContext = createContext({
  tracksList: [],
});

export const TracksProvider = ({ children }) => {
  const [trackList, setTrackList] = useState([]);
  const [lyrics, setLyrics] = useState([]);

  const value = {
    trackList,
    setTrackList,
    getData,
    getLyrics,
    lyrics,
    setLyrics,
  };
  return (
    <tracksContext.Provider value={value}> {children} </tracksContext.Provider>
  );
};
