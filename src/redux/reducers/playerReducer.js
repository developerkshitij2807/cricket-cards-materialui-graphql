import { REMOVE_UPDATE_PLAYER, SET_UPDATED_PLAYER } from "../types";

export default function playerReducer(state = {}, action) {
  switch (action.type) {
    case SET_UPDATED_PLAYER:
      return action.payload;
    case REMOVE_UPDATE_PLAYER:
      return {};
    default:
      return state;
  }
}
