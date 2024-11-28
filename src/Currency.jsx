import React, { useState, useEffect } from "react";
import "./style/Currency.css";
import { TiArrowRightThick } from "react-icons/ti";
import axios from "axios";

let request_url = "https://api.freecurrencyapi.com/v1/latest";
let api_key = "fca_live_XF5KOouKU2IkF50jEOupBsVMh6To3Hzyvzf8Ev8m";

function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(`${request_url}?apikey=${api_key}`);
        const currencyKeys = Object.keys(response.data.data);
        setCurrencies(currencyKeys);
      } catch (error) {
        console.error("ERROR", error);
      }
    };

    fetchCurrencies();
  }, []);

  const exchange = async () => {
    const response = await axios.get(
      `${request_url}?apikey=${api_key}&base_currency=${fromCurrency}`
    );
    console.log(response.data.data[toCurrency] * amount);
    setResult((response.data.data[toCurrency] * amount).toFixed(2));
  };

  return (
    <div className="container">
      <div className="currency-div">
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <select
          value={fromCurrency}
          onChange={(event) => setFromCurrency(event.target.value)}
          className="from-currency-option"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <TiArrowRightThick
          style={{ fontSize: "30px", color: "#12BA8A", marginRight: "5px" }}
        />
        <select
          value={toCurrency}
          className="to-currency-option"
          onChange={(event) => setToCurrency(event.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>{" "}
        <input
          type="number"
          className="result"
          value={result}
          onChange={(event) => setResult(event.target.value)}
        />
      </div>
      <button onClick={exchange}>CALCULATE</button>
    </div>
  );
}

export default Currency;
