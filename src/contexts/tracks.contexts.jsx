import { createContext, useState } from "react";
import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get(
      `http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
    );

    const trackList = response.data.message.body.track_list;
    console.log(trackList);

    return trackList;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const tracksContext = createContext({
  tracksList: [],
});

export const TracksProvider = ({ children }) => {
  const [trackList, setTrackList] = useState([]);

  // const helperFunc = async () => {
  //   const updatedTrackList = await getData();

  //   setTrackList(updatedTrackList);
  //   console.log(updatedTrackList);
  // };

  const value = { trackList, setTrackList, getData };
  return (
    <tracksContext.Provider value={value}> {children} </tracksContext.Provider>
  );
};
