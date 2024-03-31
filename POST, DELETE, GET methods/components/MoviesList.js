import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <li key={movie.id} className={classes['movie-item']}>
          <Movie
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
         <button onClick= {props.onDelete}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
