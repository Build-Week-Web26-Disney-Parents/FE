import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";




const  Settings = (props) => {


const settingsSchema = yup.object().shape({
        userName:yup.string().required(),
        email:yup.string().email().required(),
        password:yup
        .string()
        .required()
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password should contain a number")
        .min(8,"Requires 8 or more characters"),
        location:yup.string().required(),
        noOfChildren:yup.number().moreThan(0).positive(),
        phone:yup.number().min(10,"You must enter a valid Phone Number")


        
    }) 
    const{ register, handleSubmit,errors} = useForm({
        validationSchema: settingsSchema
    });
    const updateUser = event =>{
        console.log("submitting")
        // axios
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
            <form onSubmit={handleSubmit(updateUser)}>
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

                <button>Update Account</button>
            </form>
        </div>
    )
};

export default Settings;