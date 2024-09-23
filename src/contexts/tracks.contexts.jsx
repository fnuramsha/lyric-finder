import { createContext, useState } from "react";
import axios from "axios";

const getData = async (trackList) => {
  try {
    // const response = await axios({
    //   method: "get",
    //   url: "http://api.musixmatch.com/ws/1.1/chart.tracks.get",
    //   withCredentials: false,
    //   params: {
    //     page: 1,
    //     page_size: 10,
    //     country: "us",
    //     f_has_lyrics: 1,
    //     api_key: process.env.REACT_APP_MM_KEY,
    //   },
    //   headers: {
    //     "Access-Control-Allow-Origin": "http://localhost:3009/",
    //   },
    // });

    const response = await fetch(
      `http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
    );
    console.log(process.env.REACT_APP_MM_KEY);

    trackList = response.data;
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
  const [trackList, setTrackList] = useState("");
  const value = { trackList, setTrackList, getData };
  return (
    <tracksContext.Provider value={value}> {children} </tracksContext.Provider>
  );
};
