import { ADD_FAV } from "./action-types";
import { REMOVE_FAV } from "./action-types";
import { FILTER } from "./action-types";
import { ORDER } from "./action-types";
import { CLOSE_FAV } from "./action-types";

export const addFav = (payload) => {
  return {
    type: ADD_FAV,
    payload: payload,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export const closeFavorites = (id) => {
  return {
    type: CLOSE_FAV,
    payload: id,
  };
};
