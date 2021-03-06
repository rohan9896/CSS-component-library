import React, { useState } from "react";
import "../style.css";
import "./PrimaryButton.css";

function PrimaryButton() {
  const [buttonColorCode, setButtonColorCode] = useState(`blue`);

  return (
    <div>
      <h2>Primary Button</h2>
      <div className="primaryButton__buttonContainer">
        <button
          onClick={() => setButtonColorCode(`blue`)}
          className="primary-button blue"
        >
          Primary Button
        </button>
        <button
          onClick={() => setButtonColorCode(`pink`)}
          className="primary-button pink"
        >
          Primary Button
        </button>
        <button
          onClick={() => setButtonColorCode(`red`)}
          className="primary-button red"
        >
          Primary Button
        </button>
        <button
          onClick={() => setButtonColorCode(`yellow`)}
          className="primary-button yellow"
        >
          Primary Button
        </button>
        <button
          onClick={() => setButtonColorCode(`lightgreen`)}
          className="primary-button lightgreen"
        >
          Primary Button
        </button>
        <button
          onClick={() => setButtonColorCode(`purple`)}
          className="primary-button purple"
        >
          Primary Button
        </button>
        <button
          onClick={() => setButtonColorCode(`lightOrange`)}
          className="primary-button lightOrange"
        >
          Primary Button
        </button>
        <button
          onClick={() => setButtonColorCode(`orange`)}
          className="primary-button orange"
        >
          Primary Button
        </button>
        <button
          onClick={() => setButtonColorCode(`greenishBlue`)}
          className="primary-button greenishBlue"
        >
          Primary Button
        </button>
        <button
          onClick={() => setButtonColorCode(`grey`)}
          className="primary-button grey"
        >
          Primary Button
        </button>
      </div>
      <div className="primaryButton__codeContainer">
        <p>{`<button class="primary-button ${buttonColorCode} ">Primary Button</button>`}</p>
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<button class="primary-button ${buttonColorCode} ">Primary Button</button>`
            )
          }
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default PrimaryButton;
