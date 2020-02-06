import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom"
import * as yup from "yup";
import {DummyData} from "../dummyData"
import styled from "styled-components";
import "./loginForm.css"






const StyledWrapper = styled.div`
display:grid;
grid-template-columns:2fr 3fr;
height:100vh;
`;




const LoginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  })
  





const LoginForm = (props) => {

    const mockData = DummyData;

    const {register,handleSubmit,errors} = useForm({
        validationSchema: LoginSchema
    })
 
    //Submit function for login form takes the form submitted for data, checks it against dummydata/ or API get data,
    const onSubmit= data =>{
        console.log("submitting")
        if(data.username===mockData.username && data.password===mockData.password){
            props.setUserData(mockData);
            props.setIsAuth(true);
        }
      
    }

    return (
        <StyledWrapper className="loginWrapper">
            <div className="left__container">
                <div className="logo"/>
        <h1>The Happiest Place on Earth for Everyone</h1>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <label htmlFor="username">Username
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    ref={register}/>
                {errors.username && <p>{errors.username.message}</p>}
            </label>
            <label htmlFor="password">Password
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    ref={register}/>
                {errors.password && <p>{errors.password.message}</p>}
            </label>
            <button>Sign In</button>
        </form>
            <button className="signup__button"><Link to="/signup">Signup</Link></button>
        </div>
        <div className="right__container"/>
        </StyledWrapper>
    )
};


export default LoginForm;