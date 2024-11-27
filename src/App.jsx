import { useState } from "react";
import "./style/App.css";
import Currency from "./Currency";

function App() {
  return (
    <div className="App">
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/151/530/original/Blue_International_Currency_Exchange_Banner.png?1732663989"
        alt=""
      />
      <Currency />
    </div>
  );
}

export default App;
