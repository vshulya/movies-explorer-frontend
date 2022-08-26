import React, {useState, useEffect} from "react";
import './SearchForm.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import search_icon from '../../images/search_icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({onFilterClick, onSearch, query, setQuery, filterIsOn}) {

  //const formWithValidation = useFormWithValidation();
  //const { query } = formWithValidation.values;
  const { resetForm } = useFormWithValidation();
  const [error, setError] = useState('');

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
      if (!query) {
        setError('Type something in');
        setTimeout(() => {
        setError('');
      }, 3000);
      } else {
        onSearch(query);
        resetForm();
    }
  };

  return (
    <div className="searchForm">
      <form className="searchForm__form" onSubmit={handleSubmit} noValidate>
        <input className="searchForm__input"
          name="search-form"
          placeholder="Movie" 
          value={query || ''}
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          required />
        <button className="searchForm__button button" 
          type="submit"
          onSubmit={handleSubmit}>
            <img src={search_icon} alt="search" className="searchForm__search"/>
        </button>
      </form> 
      {error && <span className="searchForm__error">{error}</span>}   
      <FilterCheckbox 
        onFilterClick={onFilterClick}
        filterIsOn={filterIsOn} />
    </div>
  );
}

export default SearchForm;