import React from "react";
import {useForm} from "react-hook-form"
import * as yup from "yup"
import axios from "axios";
import { connect } from 'react-redux';
import { registerUser } from '../actions';

const  SignUp = () => {


  const SignUpSchema = yup.object().shape({
        userName:yup.string().required(),
        email:yup.string().email().required(),
        password:yup
        .string()
        .required()
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password should contain a number")
        .minLength(8,"Requires 8 or more characters"),
        location:yup.string().required(),
        role:yup.string().required("You must select a Role"),
        noOfChildren:yup.number().moreThan(0).positive(),
        phone:yup.number().minLength(10,"You must enter a valid Phone Number")


        
    }) 
    const{ register, handleSubmit,errors} = useForm({
        validationSchema: SignUpSchema
    });
    const createUser = event =>{

        console.log("submitting")

        axios
            // .post('https://backendci-disneyparents.herokuapp.com/api/users/register',event)
            .then(response=>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }


    return(
        <div>
            <h1>Join our Family</h1>
            <form onSubmit={handleSubmit(createUser)}>
                <label htmlFor="userName">Username</label>
                <input 
                    type="text" 
                    name="userName" 
                    ref={register} 
                    placeholder="Family Name"
                    id="userName"
                />
                {errors.userName && <p>{errors.userName.message}</p>}

                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    ref={register}
                    id="name"
                />
                {errors.name && <p>{errors.name.message}</p>}

                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    name="email" 
                    ref={register} 
                    placeholder="Enter E-mail"
                    id="email"
                />
                {errors.email && <p>{errors.email.message}</p>}

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    ref={register} 
                    placeholder="password"
                    id="password"
                />
                {errors.password && <p>{errors.password.message}</p>}

                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    name="location" 
                    ref={register} 
                    placeholder="location"
                    id="location"
                />
                {errors.location && <p>{errors.location.message}</p>}

                <p>Are you a</p>
                <label htmlFor="parent">Parent</label>
                <input 
                    type="radio" 
                    name="role" 
                    ref={register}
                    id="parent"
                />
                <label htmlFor="caregiver">Caregiver</label>
                <input 
                    type="radio" 
                    name="role" 
                    ref={register}
                    id="caregiver"
                />
                {errors.role && <p>{errors.role.message}</p>}

                <label htmlFor="numberOfChildren">Number of children</label>
                <input 
                    type="text" 
                    name="numberOfChildren" 
                    ref={register} 
                    placeholder="numberOfChildren"
                />      
                {errors.numberOfChildren && <p>{errors.numberOfChildren.message}</p>}

                <label htmlFor="phone">Phone Number</label>
                <input 
                    type="text" 
                    name="phone" 
                    ref={register} 
                    placeholder="phone"
                />
                {errors.phone && <p>{errors.phone.message}</p>}

                <button>Create Account</button>
            </form>
        </div>
    )
};
    const mapStateToProps = state => {
        return {
            state
        }
    };


export default connect(mapStateToProps, {registerUser})(SignUp);