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

  patchUserProfileInfo({name, email}) {
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

  postSavedMovie({name, link}) {
    return this._request(this._baseUrl + '/cards', {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then((res) => {
        return res;
      });
  }

  deleteSavedMovie(_id) {
    return this._request(this._baseUrl + '/cards/' + _id, {
      headers: this._headers,
      method: 'DELETE'
    });
  }

  getSavedMovieList() {
    return this._request(this._baseUrl + '/cards', {
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
    const token = localStorage.getItem('token');
    if (token !== null) {
      options.headers.authorization = `Bearer ${token}`;
    }
    return fetch(url, options).then(this._checkResponse)
  }

}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
  headers: {'Content-Type': 'application/json'}
});