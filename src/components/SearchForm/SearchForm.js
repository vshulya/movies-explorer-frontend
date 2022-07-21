import React from "react";
import './SearchForm.css';
import search_icon from '../../images/search_icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({saved, onSearch, onSearchMovies, onSearchSavedMovies, onShortMoviesCheck, isChecked}) {
  const [search, setSearch] = React.useState('');

  function handleSearchChange (e) {
    setSearch(e.target.value);
    onSearch(e.target.value);
    handleValue(e);
  }
  function handleValue(e){
    onSearch(e.target.value);
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    onSearchMovies(search);
  }

  function handleSearchSavedMovies(e) {
    e.preventDefault();
    onSearchSavedMovies(search);
  }

  return (
    <div className="searchForm">
      <form className="searchForm__form" onSubmit={saved ? handleSearchSavedMovies : handleSearchMovies}>
        <input className="searchForm__input"
        type="search"
        name="search-form"
        id="search-form" 
        placeholder="Фильм" 
        value={search || ''} 
        onChange={handleSearchChange}
        required />
        <button className="searchForm__button button" 
        type="submit">
            <img src={search_icon} alt="значок поиска" className="searchForm__search"/>
        </button>
      </form>    
      <FilterCheckbox 
      onChange={onShortMoviesCheck} 
      isChecked={isChecked}/>
    </div>
  );
}

export default SearchForm;