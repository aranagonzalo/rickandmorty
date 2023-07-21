import { ADD_FAV } from "./action-types";
import { REMOVE_FAV } from "./action-types";
import { FILTER } from "./action-types";
import { ORDER } from "./action-types";
import { CLOSE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER:
      const newCharacters = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "All" ? state.allCharacters : newCharacters,
      };
    case ORDER:
      const sortedCharacters = [...state.allCharacters].sort((a, b) => {
        return action.payload === "A" ? a.id - b.id : b.id - a.id;
      });
      return {
        ...state,
        myFavorites: sortedCharacters,
      };
    case CLOSE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
