import axios from "axios";
import { POPULAR_GAMES_URL } from "../api";
import { FETCH_GAMES } from "../reducers/constants";

export const getGames = () => async (dispatch) => {
  try {
    const { data } = await axios.get(POPULAR_GAMES_URL());
    dispatch({
      type: FETCH_GAMES,
      payload: {
        popular: data.results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
