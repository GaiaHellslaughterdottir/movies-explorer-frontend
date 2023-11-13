class MoviesApi {

  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getMovieList() {
    return this.request(this.baseUrl + '/', {
      headers: this.headers,
      method: 'GET',
    })
      .then((res) => {
        const result = [];
        res.map((movie) => {
          result.push({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: 'https://api.nomoreparties.co' + movie.image.url,
            trailerLink: movie.trailerLink,
            thumbnail: 'https://api.nomoreparties.co' + movie.image.url,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            sourceID: movie.sourceID,
          })
        });
        return result;
      });
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка выполнения запроса: ${ res.status }`);
    }
  }

  request(url, options) {
    return fetch(url, options).then(this.checkResponse)
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: { 'Content-Type': 'application/json' }
});