import './App.css';

import React, { useEffect, useState } from 'react'

// import the API category from AWS Amplify
import { API } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'

function App() {

// create coins variable and set to empty array
const [coins, updateCoins] = useState([])

// define function to all API
async function fetchCoins() {
  const data = await API.get('cryptoapi', '/coins')
  updateCoins(data.coins)
}

// call fetchCoins function when component loads
useEffect(() => {
  fetchCoins()
}, [])

return (
  <div className="App">
    {
      coins.map((coin, index) => (
        <div key={index}>
          <h2>{coin.rank}) {coin.name} - {coin.symbol}</h2>
          <h5>Price USD: ${coin.price_usd}, Market CAP: ${coin.market_cap_usd}, BTC Price: ${coin.price_btc}</h5>
        </div>
      ))
    }
  </div>
);

}

export default withAuthenticator(App, { includeGreetings: true })
