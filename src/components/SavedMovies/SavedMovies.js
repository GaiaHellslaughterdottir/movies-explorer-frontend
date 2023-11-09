import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { mainApi } from "../../utils/MainApi";

export default function SavedMovies() {
  const [search, setSearch] = React.useState('');
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState(null);
  const [shortMovie, setShortMovie] = React.useState(false);

  React.useEffect(() => {
    mainApi.getSavedMovieList()
      .then((movieList) => {
        setSavedMovies(movieList);
        searchByName(movieList);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  React.useEffect(() => {
    searchMovie();
  }, [search, shortMovie]);

  function searchMovie() {
    searchByName(savedMovies);
  }

  function handleChangeMovie(movie) {
    setSearchedMovies([...searchedMovies]);
  }

  function handlerShortMovieChange(state) {
    setShortMovie(state);
  }

  function handlerSearchChange({ searchText }) {
    setSearch(searchText);
  }

  function searchByName(moviesList) {
    setSearchedMovies(moviesList.filter(movie => {
      if (shortMovie && movie.duration > 40) {
        return false;
      }
      return search === '' ? true : (movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(search.toLowerCase()));
    }));
  }

  return (
    <section className="saved-movies">
      <SearchForm shortMovie={ shortMovie } onSearch={ handlerSearchChange } search={ search }
                  onChangeShortMovie={ handlerShortMovieChange }/>
      <hr className="page__line"/>
      <MoviesCardList movies={ searchedMovies } onChangeMovie={ handleChangeMovie } message={!searchedMovies || searchedMovies.length === 0 ? 'У вас еще нет избранных фильмов' : null}/>
    </section>
  );
}