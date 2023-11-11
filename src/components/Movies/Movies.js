import React, { useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";
import Preloader from "./Preloder/Preloader";
import { mainApi } from "../../utils/MainApi";
import { useWindowSize } from "usehooks-ts";

export default function Movies() {
  const [search, setSearch] = React.useState('');
  const [inSearch, setInSearch] = React.useState(false);
  const [searchError, setSearchError] = React.useState(null);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState(null);
  const [shortMovie, setShortMovie] = React.useState(false);
  const [visibleMoviesNumber, setVisibleMoviesNumber] = React.useState(12);
  const [preloaderSize, setPreloaderSize] = React.useState(3);
  const { width } = useWindowSize();

  React.useEffect(() => {
    mainApi.getSavedMovieList()
      .then((movieList) => {
        setSavedMovies(movieList);
        setShortMovie(localStorage.getItem('shortMovie') === 'true');
        const searchText = localStorage.getItem('searchText');
        setSearch(searchText !== null ? searchText : '');
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    if (width < 1280) {
      setPreloaderSize(2);
      if (visibleMoviesNumber % 2 !== 0) {
        setVisibleMoviesNumber(visibleMoviesNumber - (visibleMoviesNumber % 2))
      }
    } else {
      setPreloaderSize(3);
      if (visibleMoviesNumber % 3 !== 0) {
        setVisibleMoviesNumber(visibleMoviesNumber - (visibleMoviesNumber % 3))
      }
    }
  }, [width]);

  React.useEffect(() => {
    if (search !== '') {
      searchMovie();
    }
  }, [search, shortMovie]);

  function searchMovie() {
    setSearchedMovies(null);
    setVisibleMoviesNumber(0);
    setInSearch(true);
    setSearchError(null);
    if (movies.length === 0) {
      moviesApi.getMovieList()
        .then((movieList) => {
          if (movieList.length > 0) {
            setMovies(movieList);
            searchByName(movieList);
          }
        })
        .catch(err => {
          console.log(err);
          setSearchError('Во время запроса произошла ошибка. ' +
            'Возможно, проблема с соединением или сервер недоступен. ' +
            'Подождите немного и попробуйте ещё раз');
        });
    } else {
      searchByName(movies);
    }
  }

  function handleChangeMovie() {
    setSearchedMovies([...searchedMovies]);
  }

  function handlerShortMovieChange(state) {
    setShortMovie(state);
    localStorage.setItem('shortMovie', state);
  }

  function handlerSearchChange({ searchText }) {
    setSearch(searchText);
    localStorage.setItem('searchText', searchText);
  }

  function searchByName(moviesList) {
    const result = moviesList.filter(movie => {
      if (shortMovie && movie.duration > 40) {
        return false;
      }
      return (movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(search.toLowerCase()));
    });
    matchMovies(result);
    setSearchedMovies(result);
    setVisibleMoviesNumber(Math.min(visibleMoviesNumber, result.length));
    setInSearch(false);
  }

  function matchMovies(movieList) {
    movieList.map((movie) => {
      const matchMovie = savedMovies.find(obj => obj.movieId === movie.movieId);
      if (matchMovie !== undefined) {
        movie._id = matchMovie._id;
      }
    });
  }

  function handlePreload() {
    console.log(preloaderSize);
    setVisibleMoviesNumber(visibleMoviesNumber + preloaderSize);
  }

  return (
    <section className="movies">
      <SearchForm shortMovie={ shortMovie } onSearch={ handlerSearchChange } search={ search }
                  onChangeShortMovie={ handlerShortMovieChange }/>
      <hr className="page__line"/>
      <MoviesCardList movies={ searchedMovies }
                      searchError={ searchError }
                      onChangeMovie={ handleChangeMovie }
                      savedPage={false}
                      visibleMoviesNumber={ visibleMoviesNumber }
                      message={ !searchedMovies || searchedMovies.length === 0 ? 'Ничего не найдено' : null }/>
      <Preloader className={ inSearch ? 'preloader_visible' : '' }/>
      { searchedMovies && searchedMovies.length > 0 && visibleMoviesNumber < searchedMovies.length &&
      <button className="show-more" type="button" onClick={ handlePreload }>Ещё</button> }
    </section>
  );
}