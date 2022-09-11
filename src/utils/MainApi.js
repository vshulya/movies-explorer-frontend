class MainApi {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify({ email, password, name})
    })
      .then(this._checkResponse)
  }
  
  authorize (email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify({ email, password })
    })
      .then(this._checkResponse)
  }

  editProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name, 
        email
      })
    })
      .then(this._checkResponse)
  };

  getProfile (token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(this._checkResponse)
  }

  //check token
  getContent (token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(this._checkResponse)
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }, 
      body: JSON.stringify({
        country: movie.country || 'unknown',
        director: movie.director || 'unknown',
        duration: movie.duration || 'No data',
        year: movie.year || 'unknown',
        description: movie.description || 'No description',
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink || 'No trailer',
        thumbnail: `https://api.nomoreparties.co/${movie.image.url}` || 'No image',
        movieId: movie.id || 'No data',
        nameRU: movie.nameRU,
        nameEN: movie.nameEN || 'No name',
      })
    })
    .then(this._checkResponse)
  };

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then(this._checkResponse)
  };

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then(this._checkResponse)
  };
}

  const mainApi = new MainApi({
    baseUrl: 'http://140.82.42.116/api',
    // baseUrl: 'https://api.my-movies-explorer.nomoredomains.xyz',
    headers() { 
      return  {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  });

  export default mainApi;
  // `Bearer ${localStorage.getItem('jwt')}`