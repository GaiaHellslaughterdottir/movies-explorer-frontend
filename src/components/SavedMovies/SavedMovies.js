import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";

export default function SavedMovies() {
  const [search, setSearch] = React.useState('');
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState(null);
  const [shortMovie, setShortMovie] = React.useState(false);

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

  React.useEffect(() => {
    if (search !== '') {
      searchMovie();
    }
  }, [search, shortMovie]);

  function searchMovie() {
    setSearchedMovies(null);
    if (savedMovies.length === 0) {
      mainApi.getMovieList()
        .then((movieList) => {
          if (movieList.length > 0) {
            setSavedMovies(movieList);
            searchByName(movieList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      searchByName(savedMovies);
    }
  }

  function handleChangeMovie(movie) {
    setSearchedMovies([...searchedMovies]);
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
  }

  return (
    <section className="saved-movies">
      <SearchForm shortMovie={shortMovie} onSearch={ handlerSearchChange } search={ search } onChangeShortMovie={handlerShortMovieChange}/>
      <hr className="page__line"/>
      <MoviesCardList movies={ searchedMovies } onChangeMovie={handleChangeMovie}/>
    </section>
  );
}