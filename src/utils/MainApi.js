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

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers(), 
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
      headers: this._headers()
    })
    .then(this._checkResponse)
  };

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers()
    })
    .then(this._checkResponse)
  };
}

  const mainApi = new MainApi({
    baseUrl: 'https://api.my-movies-explorer.nomoredomains.xyz',
    headers() { 
      return  {
        "origin": "localhost:3000",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials': 'true',
      Accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM0YjdlMGRjZGEzMGI4MGYxMjI3MmIiLCJpYXQiOjE2NTg5MjYzMjIsImV4cCI6MTY1OTUzMTEyMn0.fvKFt01M5FmK4gB-aXKsIPbmIbifmo9F2tEFmgz6yAc',
      'Content-Type': 'application/json'
      }
    }
  });

  export default mainApi;