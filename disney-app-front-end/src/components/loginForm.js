import React, {useState,useEffect} from 'react';//Why is useEffect imported here?
import { Link } from "react-router-dom";//Why is link imported here?
import {useForm} from "react-hook-form";
import * as yup from "yup";
import axios from "axios";//Why is axios imported here?
import {DummyData} from "../dummyData"
import { connect } from 'react-redux';
import { login } from '../actions';

const LoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  })
  
const LoginForm = (props) => {

    const mockData = DummyData;

    const {register,handleSubmit,errors} = useForm({
        validationSchema: LoginSchema
    })
    
    const OnSubmit= data =>{
        /*console.log(`submitting`)
        console.log(mockData.email,mockData.password)
        if(data.email===mockData.email && data.password===mockData.password){
            props.setUserData(mockData);
            props.setIsAuth(true);
        }*/
      login(data);
    }

    //Documentation says that login information is username and password
    return (
        <div className="loginWrapper">
        <h1>The Happiest Place on Earth for Everyone</h1>
        <form onSubmit = {handleSubmit(OnSubmit)}>
            <label htmlFor="Email">Email
                <input 
                    type="text" 
                    name="email" 
                    ref={register}/>
                {errors.email && <p>{errors.email.message}</p>}
            </label>
            <label htmlFor="password">password
                <input 
                    type="password" 
                    name="password" 
                    ref={register}/>
                {errors.password && <p>{errors.password.message}</p>}
            </label>
            <button>Sign In</button>
        </form>
        </div>
    )

    
};

const mapStateToProps = state => {
    return (
        state
    )
}

export default connect(mapStateToProps, {login})(LoginForm);