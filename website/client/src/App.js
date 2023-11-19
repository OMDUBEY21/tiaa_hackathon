import React , {createContext, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Chatbot from './components/Chatbot';
//import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage  from './components/Errorpage';
import Logout from './components/Logout';

import { initialState, reducer } from './reducer/UseReducer';


export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
  )
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>

      <UserContext.Provider value= {{state, dispatch}}>

        <Navbar />
        <Routing />

      </UserContext.Provider>
    </>
  );
};

export default App;
