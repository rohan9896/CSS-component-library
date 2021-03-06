import React from "react";
import "../style.css";
import './PrimaryButton.css'

function PrimaryButton() {
  return (
    <div>
      <h2>Primary Button</h2>
      <div className="primaryButton__container">
        <button className="primary-button blue">Primary Button</button>
        <button className="primary-button pink">Primary Button</button>
        <button className="primary-button red">Primary Button</button>
        <button className="primary-button yellow">Primary Button</button>
        <button className="primary-button lightgreen">Primary Button</button>
        <button className="primary-button purple">Primary Button</button>
        <button className="primary-button lightOrange">Primary Button</button>
        <button className="primary-button orange">Primary Button</button>
        <button className="primary-button greenishBlue">Primary Button</button>
        <button className="primary-button grey">Primary Button</button>

      </div>
    </div>
  );
}

export default PrimaryButton;
