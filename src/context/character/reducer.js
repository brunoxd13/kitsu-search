import {
  FETCH_CHARACTER_MEDIA,
  FETCH_ALL_CHARACTERS,
  FETCH_CHARACTER,
  TOGGLE_LOADING,
  FETCH_INFO
} from "./actions";

function characterReducer(state, action) {
  switch (action.type) {
    case FETCH_ALL_CHARACTERS: {
      return {
        ...state,
        characters: [...action.data]
      };
    }
    case FETCH_CHARACTER: {
      return {
        ...state,
        character: action.data
      };
    }
    case FETCH_CHARACTER_MEDIA: {
      return {
        ...state,
        character: {
          ...state.character,
          medias: [...action.data]
        }
      };
    }
    case FETCH_INFO: {
      return {
        ...state,
        info: {
          ...action.data
        }
      };
    }
    case TOGGLE_LOADING: {
      return {
        ...state,
        loading: action.loading
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export { characterReducer };
