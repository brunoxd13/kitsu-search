function characterReducer(state, action) {
  switch (action.type) {
    case "fetchAllCharacters": {
      return {
        ...state,
        characters: { ...action.data },
        loading: false
      };
    }

    case "fetchInfo": {
      return {
        ...state,
        info: {
          ...action.data
        },
        loading: false
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export { characterReducer };
