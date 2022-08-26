class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers()
    })
    .then(this._checkResponse);
  };
}

  const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers() { 
      return  {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      }
    }
  });
  
  export default moviesApi;