class MainApi {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getProfile() {
    console.log('getProfile');
    return fetch(`${this._baseUrl}/profile`, {
      mode: 'no-cors',
      headers: this._headers()
    })
      .then(res => {console.log('res', res)})
  };
}

  const mainApi = new MainApi({
    baseUrl: 'https://api.my-movies-explorer.nomoredomains.xyz',
    headers() { 
      return  {
      Accept: 'application/json',
      authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM0YjdlMGRjZGEzMGI4MGYxMjI3MmIiLCJpYXQiOjE2NTgyNTk0NTAsImV4cCI6MTY1ODg2NDI1MH0.aYxxq-MvyVfDGdB9w2FgqNm6svkJ6Vydj39DGNFDYrg',
      'Content-Type': 'application/json'
    }
    }
  });

  
  export default mainApi;