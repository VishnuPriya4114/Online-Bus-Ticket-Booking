import { ReactDOM } from 'react';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import Home from './HOME/Home';
import Logo from './Logo';
import Search from './Search.js';
import FindBus from './FindBus';
import Seatbooking from './Seatbooking';
import Checkout from './Checkout';
import MyAccount from './HOME/MyAccount';
import Help from './Help';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import {createContext} from 'react';
export const Context=createContext(null);


const Navigate = () => {
  return (
    <div className='App'>
    <Context.Provider value={"Most preffered Travels"}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Logo/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Search" element={<Search/>}/>
    <Route path="/FindBus" element={<FindBus/>}/>
    <Route path="/Seatbooking" element={<Seatbooking/>}/>
    <Route path="/Checkout" element={<Checkout/>}/>
    <Route path="/MyAccount" element={<MyAccount/>}/>
    </Routes>
    </BrowserRouter>
    </Context.Provider>
    </div>
  )
}

export default Navigate;