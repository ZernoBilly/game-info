import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const getCurrentYear = () => new Date().getFullYear();

const currentDate = `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDay()}`;

const lastYear = `${
  getCurrentYear() - 1
}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYear = `${
  getCurrentYear() + 1
}-${getCurrentMonth()}-${getCurrentDay()}`;

//const POPULAR_GAMES = `${BASE_URL}/games?key=c2025bdacba547009a763b0f5f8e6b4a&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const POPULAR_GAMES_URL = () =>
  `${BASE_URL}games?key=c2025bdacba547009a763b0f5f8e6b4a&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
