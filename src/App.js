import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Cart from './component/Country/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart]= useState([]);


  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {setCountries(data);
      const names = data.map(country =>country.name)
    })
    .catch(error =>console.log(error))
  }, [])
  const handleAddCountry=(country)=>{
    const newCart = [...cart, country]
    setCart(newCart)
  }
  return (
    
    <div className="App">
     <h1>Country Loaded:{countries.length}</h1>
     <h4>Country Added:{cart.length}</h4>
     <Cart cart={cart}></Cart>
     {
         countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpa3Code}></Country> )
     }
    </div>
  );
}

export default App;
