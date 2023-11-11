class MainApi {

  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserProfileInfo() {
    return this._request(this._baseUrl + '/users/me', {
      headers: this._headers,
      method: 'GET',
    })
      .then((res) => {
        return res;
      });
  }

  patchUserProfileInfo({ name, email }) {
    return this._request(this._baseUrl + '/users/me', {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then((res) => {
        return res;
      });
  }

  postSavedMovie({ country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN, sourceID }) {
    return this._request(this._baseUrl + '/movies', {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        thumbnail: thumbnail,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN,
        sourceID: sourceID,
      })
    })
      .then((res) => {
        return res;
      });
  }

  deleteSavedMovie(_id) {
    return this._request(this._baseUrl + '/movies/' + _id, {
      headers: this._headers,
      method: 'DELETE'
    });
  }

  getSavedMovieList() {
    return this._request(this._baseUrl + '/movies', {
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
      return Promise.reject(res.status);
    }
  }

  _request(url, options) {
    const token = localStorage.getItem('token');
    if (token !== null) {
      options.headers.authorization = `Bearer ${ token }`;
    }
    return fetch(url, options).then(this._checkResponse)
  }

}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' }
});