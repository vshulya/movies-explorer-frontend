import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({onFilterClick, filterIsOn}) {
  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__checkbox">
        <input 
          checked={filterIsOn}
          type="checkbox" 
          onChange = {(e) => onFilterClick(e.target.checked)} />
        <span className="filterCheckbox__switch"></span>
      </label>
      <p className="filterCheckbox__caption">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;