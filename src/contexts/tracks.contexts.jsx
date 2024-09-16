import { createContext, useState } from "react";

export const tracksContext = createContext();

export const tracksProvider = (children) => {
  [val, setVal] = useState();
  const value = { val, setVal };
  return (
    <tracksContext.Provider value={value}> {children} </tracksContext.Provider>
  );
};
