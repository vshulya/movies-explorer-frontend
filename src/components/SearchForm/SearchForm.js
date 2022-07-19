import React from "react";
import './SearchForm.css';
import search from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return (
    <div className="searchForm">
      <form className="searchForm__form">
        <input className="searchForm__input"
        type="text" 
        id="movie-input" 
        placeholder="Фильм" 
        name="name"
        required />
        <button className="searchForm__button button" type="submit">
            <img src={search} alt="значок поиска" className="searchForm__search"/>
        </button>
      </form>    
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;