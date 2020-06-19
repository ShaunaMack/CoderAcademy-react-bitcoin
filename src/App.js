import React, {useState, useEffect} from 'react'
import CurrencySelector from './components/CurrencySelector'
import DataDisplay from './components/DataDisplay'
// import { defaults } from 'react-chartjs-2';

const App = () => {

  const defaultCurrency = "AUD";

  const [currency, setCurrency] = useState(defaultCurrency);
  const [bitcoinData, setBitcoinData] = useState({});

  const bitcoinApi = "https://api.coindesk.com/v1/bpi/historical/close.json";

  function currencyChangeHandler(newCurrency){
      setCurrency(newCurrency);
  }

  useEffect(() => {
    console.log("use Effect is happening");
    function getData() {
      fetch(`${bitcoinApi}?currency=${currency}`)
        .then(response => response.json())
        .then(data => setBitcoinData(data.bpi))
        .catch(error => console.error(error))
    }
    getData()
  }, [currency])

  return (
    <div >
          <h1>Bitcoin Index</h1>
          <CurrencySelector currency={currency} handleCurrencyChange={currencyChangeHandler}/>
          <h2>Data for {currency} </h2>
          <DataDisplay data={bitcoinData}/>
    </div>
  )
}

export default App
