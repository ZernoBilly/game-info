import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const combinedReducer = combineReducers({
  gamesReducer,
});

export default combinedReducer;
