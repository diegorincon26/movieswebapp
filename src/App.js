import { useEffect, useState } from "react";
import Header from "./components/header";
import Search from "./components/search";
import Movie from "./components/movie";
import movieService from "./services/movieService";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(async () => {
    // TODO: Change dynamictly the number page and page size,
    // maybe implement a away whe the mouse scroll down load
    // more movies with the help of pagination
    const { data: results } = await movieService.getMovies(1, 10);
    setMovies(results.entities);
  }, []);

  const search = async (searchValue) => {
    setLoading(true);
    setErrorMessage(null);
    const { data: results } = await movieService.searchMovies(
      1,
      10,
      searchValue
    );
    setMovies(results.entities);
  };

  return (
    <div>
      <Header title="ClearFlix"></Header>
      <Search search={search}></Search>
      <div className="section">
        <div className="columns is-multiline">
          {movies.map((movie, index) => (
            <div className="column is-one-third">
              <Movie key={`${index}-${movie.title}`} movie={movie}></Movie>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
