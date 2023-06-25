import React, { useEffect, useState } from 'react'
import style from './signup.module.css'
import pic from '../images/business guy.png'
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './FormInput/FormInput';
import logo from '../../assets/Group 7753.svg';
import axios from 'axios';

const Signup = () => {
const [values, setValues] = useState(
  {
  firstName: "",
  lastName: "",
  role: "",
  phoneNumber: "",
  email: "",
  password: "",

}
)
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const emailRef = useRef();
const navigate = useNavigate()

const inputs = [
  {id: 1,
  name: 'firstName',
  type: 'text',
  placeholder: 'John',
  label: 'First Name',
  pattern: `^[^0-9]*[a-zA-Z][^0-9]*[a-zA-Z][^0-9]*[a-zA-Z][^0-9]*$` ,
  errorMessage: "At least 2 alphabets, no numbers",
  minlength: "2",
  required: true,

},
{id: 2,
  name: 'lastName',
  type: 'text',
  placeholder: 'Doe',
  label: 'Last Name',
  pattern: `^[^0-9]*[a-zA-Z][^0-9]*[a-zA-Z][^0-9]*[a-zA-Z][^0-9]*$` ,
  errorMessage: "At least 2 alphabets, no numbers",
  minlength: "2",
  required: true,

},
{id: 3,
  name: 'role',
  type: 'text',
  placeholder: 'Junior Loan Officer',
  label: 'Role',
  pattern: `^[^0-9]*[a-zA-Z][^0-9]*[a-zA-Z][^0-9]*[a-zA-Z][^0-9]*$`,
  errorMessage: "At least 2 alphabets, no numbers",
  minlength: "2",
  required: true,

},
{id: 4,
  name: 'phoneNumber',
  type: 'text',
  placeholder: '08122222222',
  label: 'Phone Number',
  pattern: `^[0-9]{11}$`,
  errorMessage: "Input should be 11 digits and not contain alphabets or symbols", 
  minlength: '11',
  maxlength:'11', 
  required: true,

},
{id: 5,
  name: 'email',
  type: 'email',
  placeholder: 'johndoe@gmail.com',
  label: 'Email',
  errorMessage: "Invalid email address",
  required: true,

},
{id: 6,
  name: 'password',
  type: 'password',
  placeholder: 'JohnDoe',
  label: 'Password',
  pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  errorMessage: "At least 8 characters including at least 1 uppercase, 1 number, 1 symbol. ",
  required: true,
}
]




const createAccount = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: "https://loanifyteama-production.up.railway.app/api/v1/auth/sign-up",
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      data: {

        firstName: values.firstName,  // Include the "firstName" field with a value
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        role: values.role,
        password: values.password,
        // Add any other data fields as needed
      }
    })
      .then(response => {
        // Handle the response data
        console.log(response.data);
        navigate('/confirmation')
      })
      .catch(error => {
        // Handle any errors
        if (error.message == 'Request failed with status code 500'){
          setError("User already exists")
        }
        console.error(error);
      });
      
     
   
}

const onChange = (e)=>{
  setValues({...values, [e.target.name]: e.target.value})
}


  return (
  <div className={style.signup_container}>
    <div className={style.signup_body}>
      
        <div><img src={pic} alt="picture" className={style.sideimg}/></div>

        <section className={style.section}>

 <img src={logo} alt="logo" className={style.logo}/>
 <div className={style.formContainer}>
 <div>
    <h1 className={style.signupheading}>Sign Up</h1>
  </div>

    <div className={style.signup_details}>
        <form onSubmit={createAccount} className={style.singup_form}> 
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} pattern={input.pattern} errorMessage={input.errorMessage} placeholder={input.placeholder}  className={style[`input-${input.name}`]} />
        ))}

          <button type='submit' className={style.submit} disabled={loading}>
            Sign up
           </button>

           <div className={style.login_signup}>
                        <p className={style.logintext}>Already have an account? </p>
                        <Link to='/login' className={style.loginlink}>Log in</Link>
            </div>

                  

        </form>
    </div>
 </div>

 
 </section>
    </div>
    
    </div>
  )
}

export default Signup