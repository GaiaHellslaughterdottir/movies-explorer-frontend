class MainApi {

  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  patchUserProfileInfo({ name, email }) {
    return this.request(this.baseUrl + '/users/me', {
      headers: this.headers,
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
    return this.request(this.baseUrl + '/movies', {
      headers: this.headers,
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
    return this.request(this.baseUrl + '/movies/' + _id, {
      headers: this.headers,
      method: 'DELETE'
    });
  }

  getSavedMovieList() {
    return this.request(this.baseUrl + '/movies', {
      headers: this.headers,
      method: 'GET',
    })
      .then((res) => {
        return res;
      });
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  request(url, options) {
    const token = localStorage.getItem('token');
    if (token !== null) {
      options.headers.authorization = `Bearer ${ token }`;
    }
    return fetch(url, options).then(this.checkResponse)
  }

}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' }
});