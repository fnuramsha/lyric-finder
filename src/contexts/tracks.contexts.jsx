import { createContext, useState } from "react";

export const tracksContext = createContext();

export const TracksProvider = ({ children }) => {
  const [val, setVal] = useState("");
  const value = { val, setVal };
  return (
    <tracksContext.Provider value={value}> {children} </tracksContext.Provider>
  );
};
