import React, {useState} from "react";
import './SearchForm.css';
import search_icon from '../../images/search_icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({previousSearchText, onFilterClick}) {

  const [searchText, setSearchText] = useState(previousSearchText);

  return (
    <div className="searchForm">
      <form className="searchForm__form">
        <input className="searchForm__input"
        type="search"
        name="search-form"
        id="search-form" 
        placeholder="Фильм" 
        value={searchText || ''} 
        onChange={e => setSearchText(e.target.value)}
        required />
        <button className="searchForm__button button" 
        type="submit">
            <img src={search_icon} alt="значок поиска" className="searchForm__search"/>
        </button>
      </form>    
      <FilterCheckbox 
      onFilterClick={onFilterClick} />
    </div>
  );
}

export default SearchForm;