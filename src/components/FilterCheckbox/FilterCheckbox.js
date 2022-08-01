import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({onFilterClick}) {
  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__checkbox">
        <input 
          type="checkbox" 
          onChange={onFilterClick} />
          {/* value={filterIsOn} */}
          {/* defaultChecked={filterIsOn} */}
        <span className="filterCheckbox__switch"></span>
      </label>
      <p className="filterCheckbox__caption">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;