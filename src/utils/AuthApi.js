export default class AuthApi {

  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  postSignUp({name, email, password}) {
    return this.request(this.baseUrl + '/signup', {
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
    return this.request(this.baseUrl + '/signin', {
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
    return this.request(this.baseUrl + '/users/me', {
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

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  request(url, options) {
    return fetch(url, options).then(this.checkResponse)
  }
}

export const auth = new AuthApi({
  baseUrl: 'http://localhost:3000',
});