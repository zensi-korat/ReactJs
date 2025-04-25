import { createContext } from "react";

// Step-1: To create Warehouse [CREATING CONTEXT]
// this must starts with the capital letter
export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "zen";
  const myAge = 24;
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};
