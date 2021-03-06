import React from "react";
import "../style.css";
import "./IconButton.css";

function IconButton() {
  return (
    <div>
      <h2>Icons Buttons</h2>
      <div className="iconButton__buttonContainer">
        <button className="icon-button">
          <img
            alt="icon"
            src="https://raw.githubusercontent.com/rohan9896/CSS-component-library/0c5b4503814556a48beebd849585d17afb142e06/icons/left-arrow.svg"
          />
        </button>
        <button className="icon-button">
          <img
            alt="icon"
            src="https://raw.githubusercontent.com/rohan9896/CSS-component-library/0c5b4503814556a48beebd849585d17afb142e06/icons/rightArrow.svg"
          />
        </button>
        <button class="icon-button">
          <img
            alt="icon"
            src="https://raw.githubusercontent.com/rohan9896/CSS-component-library/eae5ccfe00eabccae185a910d6a29a36f8feb893/icons/cancel.svg"
          />
        </button>
        <button class="icon-button">
          <img
            alt="icon"
            src="https://raw.githubusercontent.com/rohan9896/CSS-component-library/ad81ebf5b89717f278f85a1970c851520dfa6768/icons/check.svg"
          />
        </button>
        <button class="icon-button">
          <img
            alt="icon"
            src="https://raw.githubusercontent.com/rohan9896/CSS-component-library/eae5ccfe00eabccae185a910d6a29a36f8feb893/icons/trash.svg"
          />
        </button>
      </div>
    </div>
  );
}

export default IconButton;
