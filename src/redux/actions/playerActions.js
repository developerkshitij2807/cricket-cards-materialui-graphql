import playerReducer from "../reducers/playerReducer";
import { SET_UPDATED_PLAYER } from "../types";

export const setUpdatedPlayerAction = (playerData) => (dispatch) => {
  return dispatch({ type: SET_UPDATED_PLAYER, payload: playerData });
};

export const removeUpdatedPlayerAction = () => (dispatch) => {
    return dispatch
}