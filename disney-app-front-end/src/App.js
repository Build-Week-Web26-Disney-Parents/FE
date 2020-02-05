import React, {useState} from 'react';
import {Route,Redirect} from "react-router-dom"
import './App.css';

import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import LoginForm from "./components/LoginForm";
import Settings from "./components/Settings"


function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [userData, setUserData] = useState({
      email:"billnye@yahoo.com",
      password:"bill",
      posts:["Hello"]
    })

    console.log(isAuth);
    console.log(`userData: ${userData.email}, ${userData.password},${userData.posts}`)
  return (
    <>
    {isAuth?
      <Redirect to="/profile"/>:
      <Redirect to="/login"/>}


    <Route path="/login">
      <LoginForm setUserData={setUserData}setIsAuth={setIsAuth}/>
    </Route>
    <Route path="/profile">
      <Profile user={userData}/>
    </Route>
    <Route path="/signup/" component={SignUp}/>
    <Route path="/settings">
      <Settings userData={userData}/>
    </Route>
  
      
        

 
    </>
  );
}

export default App;
