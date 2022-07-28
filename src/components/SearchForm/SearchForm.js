import React, {useState} from "react";
import './SearchForm.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import search_icon from '../../images/search_icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({onFilterClick, onSearch, isLoading}) {

  const [query, setQuery]= useState('');

  //const formWithValidation = useFormWithValidation();
  //const { searchText } = formWithValidation.values;
  //const { handleChange, resetForm } = formWithValidation;
  const [error, setError] = React.useState('');

  // React.useEffect(() => {
  //   resetForm();
  // }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      setError('Нужно ввести ключевое слово');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      onSearch(query);
      //resetForm();
    }
  };

  return (
    <div className="searchForm">
      <form className="searchForm__form" onSubmit={handleSubmit}>
        <input className="searchForm__input"
        name="search-form"
        id="search-form" 
        placeholder="Фильм" 
        value={query}
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
        required />
        <button className="searchForm__button button" 
        type="submit"
        onSubmit={handleSubmit}>
        {error && <span className="searchForm_error">{error}</span>}
            <img src={search_icon} alt="значок поиска" className="searchForm__search"/>
        </button>
      </form>    
      <FilterCheckbox 
      onFilterClick={onFilterClick} />
    </div>
  );
}

export default SearchForm;