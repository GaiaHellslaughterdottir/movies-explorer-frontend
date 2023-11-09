class MoviesApi {

  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getMovieList() {
    return this._request(this._baseUrl + '/', {
      headers: this._headers,
      method: 'GET',
    })
      .then((res) => {



        return res;
      });
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка выполнения запроса: ${res.status}`);
    }
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {'Content-Type': 'application/json'}
});