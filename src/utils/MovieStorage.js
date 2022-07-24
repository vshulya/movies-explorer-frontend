class MovieStorage {
getSearchRequest() {
  if (localStorage.getItem('searchRequest') !== null) {
    const searchRequestData = JSON.parse(localStorage.searchRequest);
    return searchRequestData;
  } else {
    return {
      movies: [],
      checkBox: false
    };
  }
}
saveSearchRequest (configObj) {
  localStorage.setItem("searchRequest", JSON.stringify(configObj));
}


}

export default MovieStorage;