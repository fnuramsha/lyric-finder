import { createContext, useState } from "react";
import axios from "axios";

const getData = () => {
  axios
    .get()
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export const tracksContext = createContext({
  tracks: 10,
});

export const TracksProvider = ({ children }) => {
  const [trackList, setTrackList] = useState(tracks);
  const value = { trackList, setTrackList };
  return (
    <tracksContext.Provider value={value}> {children} </tracksContext.Provider>
  );
};
