import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../src/actions/gamesActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  });
  return <div className="App">Hellos</div>;
}

export default App;

//RAWG api-key c2025bdacba547009a763b0f5f8e6b4a
