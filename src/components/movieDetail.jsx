import { useEffect, useState } from "react";
import { useParams } from "react-router";
import movieService, { getMovie } from "../services/movieService";

const MovieDetail = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(async () => {
    const { data } = await movieService.getMovie(id);
    setMovie(data);
    console.log(movie);
  }, []);

  return (
    <section className="hero is-fullheight is-info">
      <div className="hero-body">
        <div className="columns is-gapless is-vcentered">
          <div className="column is-one-third has-text-centered">
            <img src={movie.poster} alt={`The movie titled: ${movie.title}`} />
          </div>
          <div className="column">
            <h1 className="title">{movie.title}</h1>
            <h2 className="subtitle">{movie.genre}</h2>
            <p className="subtitle is-3">{movie.description}</p>
            <p className="subtitle is-4">Actors</p>
            <p className="subtitle is-5">{movie.actors}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
