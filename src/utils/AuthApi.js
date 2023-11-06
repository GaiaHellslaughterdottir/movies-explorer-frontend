export default class AuthApi {

  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  postSignUp({name, email, password}) {
    return this._request(this._baseUrl + '/signup', {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
      .then((res) => {
        return res;
      });
  }

  postSignIn({email, password}) {
    return this._request(this._baseUrl + '/signin', {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((res) => {
        return res;
      });
  }

  getUserInfo(token) {
    return this._request(this._baseUrl + '/users/me', {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      },
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

export const auth = new AuthApi({
  baseUrl: 'http://localhost:3000',
});