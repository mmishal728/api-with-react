import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {
  const [countries,setCountries] =useState([]);
  const [cart,setCart]= useState([]);
  const handleAddCountry = (country)=> {
    const newCart = [...cart,country];
    setCart(newCart)
  }
    useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res=>res.json())
      .then(data=>setCountries(data))
      
    })
  return (
    <div className="App">
      <h1>Country loaded:{countries.length}</h1>
      <h4>Country Added:{cart.length}</h4>
      <Cart cart={cart}></Cart>
    
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key= {country.alpha3Code}> </Country>  )
        }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
