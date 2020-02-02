import React from "react";
import { CharacterStateContext, CharacterDispatchContext } from "./provider";

function useCharacterState() {
  const context = React.useContext(CharacterStateContext);
  if (context === undefined) {
    throw new Error(
      "useCharacterState must be used within a CharacterProvider"
    );
  }
  return context;
}

function useCharacterDispatch() {
  const context = React.useContext(CharacterDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useCharacterDispatch must be used within a CharacterProvider"
    );
  }
  return context;
}

export { useCharacterState, useCharacterDispatch };
