import React from 'react';
import logo from './logo.svg';
import {Route,Link} from "react-router-dom"
import './App.css';

import Header from "./components/header";
import useForm from "./hooks/useForm"


function App() {
 
  const [{email, password }, handleChange] = useForm({
    email: "",
    password: ""
  });
  const login = event =>{
      event.preventDefault();
  }
  
  return (
    <>
    <Header/>
    <h1>The Happiest Place on Earth for Everyone</h1>
      <form onSubmit ={event =>{
        event.preventDefault();
      }}>
        <label htmlFor="email">Email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
        />
        </label>
        <label htmlFor="password">Password
          <input 
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange = {handleChange} 
            onBlur = {handleChange} 
            />
        </label>
        <button> Sign In </button>
        <button> Sign Up </button>
        
      </form>
    </>
  );
}

export default App;
