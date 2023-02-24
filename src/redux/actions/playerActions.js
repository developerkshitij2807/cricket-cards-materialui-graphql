import { SET_UPDATED_PLAYER } from "../types";

export const setUpdatedPlayerAction = (playerData) => (dispatch) => {
  return dispatch({ type: SET_UPDATED_PLAYER, payload: playerData });
};
