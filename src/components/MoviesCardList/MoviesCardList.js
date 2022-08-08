import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH } from '../../utils/constants';


function MoviesCardList({movies, moviesInSaved, savedMovies, onMovieSave, onMovieDelete, isMovieSaved}) {

  const [renderedMovies, setRenderedMovies] = useState([]);
  const [idx, setIdx] = useState(0);
  const [extraRow, setExtraRow] = useState(3);

  const location = useLocation();

  const getCount = (windowSize) => {
    if (windowSize > DESKTOP_WIDTH) {
      return { first: 12, extra: 4 };
    } 
    if (windowSize > TABLET_WIDTH && windowSize <= DESKTOP_WIDTH) {
      return { first: 12, extra: 3 };
    }
    if (windowSize > MOBILE_WIDTH && windowSize <= TABLET_WIDTH) {
      return { first: 8, extra: 2 };
    }
    else {
      return { first: 5, extra: 2 };
    }
  };

  const renderMovies = () => {
    const count = Math.min(movies.length, idx + extraRow);
    const extraMovies = movies.slice(idx, count);
    debugger
    setRenderedMovies([...renderedMovies, ...extraMovies]);
    setIdx(count);
  };

  const resizeHandler = () => {
    const windowSize = window.innerWidth;
    setExtraRow(getCount(windowSize));
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  
  useEffect(() => {
    if(!movies) return;
    const windowSize = window.innerWidth;
    setExtraRow(getCount(windowSize).extra);
    const count = Math.min(movies.length, getCount(windowSize).first);
    setRenderedMovies(movies.slice(0, count));
    setIdx(count);
  }, [movies]);

  const renderMore = () => renderMovies();

  const calcDuration = (time) => {
    const hours = Math.floor(time / 60)
    const minutes = time % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`
  }
  const isInAllMovies = location.pathname === '/movies' || location.pathname === '/movies/';
  return (
  <div className="movies">
    <ul className="movies__list">
          {isInAllMovies ? (
            renderedMovies.map((movie) => (
                <MoviesCard
                    key={movie.id}
                    movie={movie} 
                    image={`https://api.nomoreparties.co/${movie.image.url}`}
                    nameRU = {movie.nameRU}
                    duration = {calcDuration(movie.duration)}
                    trailer = {movie.trailerLink}
                    savedMovies={savedMovies}
                    isMovieSaved={isMovieSaved}
                    onMovieSave={onMovieSave}
                    onMovieDelete={onMovieDelete}
                    />
            ))
          ) : (moviesInSaved.map((movie) => (
                <MoviesCard
                    key={movie._id}
                    movie={movie} 
                    image={movie.image}
                    nameRU = {movie.nameRU}
                    duration = {calcDuration(movie.duration)}
                    trailer = {movie.trailerLink}
                    savedMovies={savedMovies}
                    isMovieSaved={isMovieSaved}
                    onMovieDelete={onMovieDelete}
                    />)
            ))
          }
    </ul>
    { isInAllMovies? idx < movies.length && <button onClick={renderMore} className="movies__button">Ещё</button> : ""}
  </div>
);
  // return (
  //   <div className="movies">
  //     <ul className="movies__list">
  //           {renderedMovies.map((movie) => (
  //                 <MoviesCard
  //                     key={movie.id}
  //                     movie={movie} 
  //                     image={isInAllMovies ? (`https://api.nomoreparties.co/${movie.image.url}`) : (movie.image)}
  //                     nameRU = {movie.nameRU}
  //                     duration = {calcDuration(movie.duration)}
  //                     trailer = {movie.trailerLink}
  //                     savedMovies={savedMovies}
  //                     isMovieSaved={isMovieSaved}
  //                     onMovieClick={onMovieClick}
  //                     />
  //             ))
  //           }
  //     </ul>
  //     { isInAllMovies? idx < movies.length && <button onClick={renderMore} className="movies__button">Ещё</button> : ""}
  //   </div>
  // );
}

export default MoviesCardList;

// return (
//   <div className="movies">
//     <ul className="movies__list">
//           {isInAllMovies ? (
//             renderedMovies.map((movie) => (
//                 <MoviesCard
//                     key={movie.id}
//                     movie={movie} 
//                     image={`https://api.nomoreparties.co/${movie.image.url}`}
//                     nameRU = {movie.nameRU}
//                     duration = {calcDuration(movie.duration)}
//                     trailer = {movie.trailerLink}
//                     savedMovies={savedMovies}
//                     isMovieSaved={isMovieSaved}
//                     onMovieClick={onMovieClick}
//                     />
//             ))
//           ) : (moviesInSaved.map((movie) => (
//                 <MoviesCard
//                     key={movie._id}
//                     movie={movie} 
//                     image={movie.image}
//                     nameRU = {movie.nameRU}
//                     duration = {calcDuration(movie.duration)}
//                     trailer = {movie.trailerLink}
//                     savedMovies={savedMovies}
//                     isMovieSaved={isMovieSaved}
//                     onMovieClick={onMovieClick}
//                     />)
//             ))
//           }
//     </ul>
//     { isInAllMovies? idx < movies.length && <button onClick={renderMore} className="movies__button">Ещё</button> : ""}
//   </div>
// );
