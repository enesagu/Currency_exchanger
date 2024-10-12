import React, { useEffect, useState } from "react";
import "../css/currency.css";
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';

let BASE_URL = "https://api.currencyapi.com/v3/latest";
let API_KEY = "YOUR API";


function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurreny] = useState("TRY");
  const [result, setReult] = useState(0);

  const exchange = async () =>{
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);
    // console.log(result);
    const response =  await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result = (response.data.data[toCurrency].value * amount).toFixed(2);
    setReult(result);



  }



  useEffect (() =>{
    
  })

  return (
    <div className="currency-div">
      <div
        style={{
          marginTop: "-50px",
          backgroundColor: "white",
          textAlign: "center",
          fontFamily: "arial",
          width: "100%",
          border: "5px solid white",
        }}
      >
        <h3 className="title">DÖVİZ KURU UYGULAMASI</h3>
      </div>

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input 
        value={amount}
        onChange={(e)=> setAmount(e.target.value)}
        type="number" className="amount" />
        <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option">
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaArrowRight
          style={{
            fontSize: "50px",
            backgroundColor: "white",
            borderRadius: "25px",
            margin: "0 15px",
          }}
        />
        <select onChange={(e) => setToCurreny(e.target.value)} className="to-currency-option">
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>
        <input disabled="True" value={result} onChange={(e) => setReult(e.target.value)} type="number" className="result" />
      </div>
      <div>
        <button
        onClick={exchange}
        className="exchange-button">Çevir</button>
      </div>
    </div>
  );
}

export default Currency;
