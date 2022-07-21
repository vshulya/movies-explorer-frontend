import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({onChange, isChecked}) {
  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__checkbox">
        <input type="checkbox" 
        onChange={onChange} 
        checked={isChecked}/>
        <span className="filterCheckbox__switch"></span>
      </label>
      <p className="filterCheckbox__caption">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;