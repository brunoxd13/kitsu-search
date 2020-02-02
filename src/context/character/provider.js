import React from "react";
import { characterReducer } from "./reducer";

const CharacterStateContext = React.createContext();
const CharacterDispatchContext = React.createContext();

function CharacterProvider({ children }) {
  const [state, dispatch] = React.useReducer(characterReducer, {
    characters: {},
    info: {},
    loading: true
  });

  return (
    <CharacterStateContext.Provider value={state}>
      <CharacterDispatchContext.Provider value={dispatch}>
        {children}
      </CharacterDispatchContext.Provider>
    </CharacterStateContext.Provider>
  );
}

export { CharacterStateContext, CharacterDispatchContext, CharacterProvider };
