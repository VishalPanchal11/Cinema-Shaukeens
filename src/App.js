import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg"
const apiURL = "https://www.omdbapi.com?apikey=c5beb882";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`https://www.omdbapi.com?apikey=c5beb882&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>Cinema Shaukeens</h1>
    </div>
  );
};

export default App;
