import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";
import Preloader from "./Preloder/Preloader";

export default function Movies(props) {
  const [search, setSearch] = React.useState('');
  const [inSearch, setInSearch] = React.useState(false);
  const [searchError, setSearchError] = React.useState(null);
  const [movies, setMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState(null);
  const [shortMovie, setShortMovie] = React.useState(false);


  React.useEffect(() => {
    setShortMovie(localStorage.getItem('shortMovie') === 'true');
    const searchText = localStorage.getItem('searchText');
    setSearch(searchText !== null ? searchText : '');
  }, []);


  React.useEffect(() => {
    if (search !== '') {
      searchMovie();
    }
  }, [search, shortMovie]);

  function searchMovie() {
    setSearchedMovies(null);
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

  function handlerShortMovieChange(state) {
    setShortMovie(state);
    localStorage.setItem('shortMovie', state);
  }

  function handlerSearchChange({searchText}) {
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
    setSearchedMovies(result);
    setInSearch(false);
  }

  return (
    <section className="movies">
      <SearchForm shortMovie={shortMovie} onSearch={ handlerSearchChange } search={ search } onChangeShortMovie={handlerShortMovieChange}/>
      <hr className="page__line"/>
      <MoviesCardList movies={ searchedMovies } searchError={ searchError }/>
      <Preloader className={ inSearch ? 'preloader_visible' : '' }/>
      <button className="show-more" type="button">Ещё</button>
    </section>
  );
}