import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={movie.poster} />
        </figure>
      </div>
      <div className="card-content">
        <Link to={`movie/${movie.id}`}>
          <p className="title">{movie.title}</p>
        </Link>
        <p className="subtitle is-5">{movie.genre}</p>
        <p className="subtitle is-3"> {movie.description}</p>
      </div>
    </div>
  );
};

export default Movie;
