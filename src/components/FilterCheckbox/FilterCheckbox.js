import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className="filterCheckbox">
      <label class="filterCheckbox__checkbox">
        <input type="checkbox" />
        <span class="filterCheckbox__switch"></span>
      </label>
	
      {/* <label class="filterCheckbox__checkbox">
        <input type="checkbox" checked />
        <span class="filterCheckbox-switch"></span>
      </label> */}
      <p className="filterCheckbox__caption">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;