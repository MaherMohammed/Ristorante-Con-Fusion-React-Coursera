import React,{useState} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes.js'


function App() {

  const {dishes,setDishes} = useState(0);
  // setDishes(DISHES)
  return (
    <div className="App">
      <Navbar dark color= "primary">
        <div className='container'>
          <NavbarBrand href="/">
            Con Fusion
          </NavbarBrand>
        </div>

      </Navbar>

      <Menu dishes = {DISHES}/>
    </div>
  );
}

export default App;
