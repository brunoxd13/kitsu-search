import React from "react";
import { characterReducer } from "./reducer";

const CharacterStateContext = React.createContext();
const CharacterDispatchContext = React.createContext();

const INITIAL_STATE = {
  characters: [],
  character: {},
  info: {},
  loading: true,
  error: false
};

function CharacterProvider({ children }) {
  const [state, dispatch] = React.useReducer(characterReducer, INITIAL_STATE);

  return (
    <CharacterStateContext.Provider value={state}>
      <CharacterDispatchContext.Provider value={dispatch}>
        {children}
      </CharacterDispatchContext.Provider>
    </CharacterStateContext.Provider>
  );
}

export { CharacterStateContext, CharacterDispatchContext, CharacterProvider };
