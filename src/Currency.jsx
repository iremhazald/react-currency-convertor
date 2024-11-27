import React from "react";
import "./style/Currency.css";
import { TiArrowRightThick } from "react-icons/ti";

function Currency() {
  return (
    <div className="container">
      <div className="currency-div">
        <input type="number" className="amount" />
        <select className="from-currency-option">
          <option>USD</option>
          <option>EUR</option>
          <option>TL</option>
        </select>
        <TiArrowRightThick
          style={{ fontSize: "30px", color: "#12BA8A", marginRight: "5px" }}
        />
        <select className="to-currency-option">
          <option>USD</option>
          <option>EUR</option>
          <option>TL</option>
        </select>{" "}
        <input type="number" className="result" />
      </div>
      <button>CALCULATE</button>
    </div>
  );
}

export default Currency;
