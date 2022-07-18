class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getProfile() {
    console.log('getProfile');
    return fetch(`${this._baseUrl}/profile`, {
      headers: this._headers()
    })
      .then(res => {console.log('res', res)})
  };
}

  const api = new Api({
    baseUrl: 'https://api.my-movies-explorer.nomoredomains.xyz',
    headers() { 
      return  {
      Accept: 'application/json',
      authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmMzMDFjNWQ0MjUxM2ZjOWQ0YTQ0ODQiLCJpYXQiOjE2NTY5NDcxNTAsImV4cCI6MTY1NzU1MTk1MH0.QTq-yhLmW_ZzFySGnA3d43ayjpTaouE57ea5CWGCyig',
      'Content-Type': 'application/json'
    }
    }
  });

  
  export default api;