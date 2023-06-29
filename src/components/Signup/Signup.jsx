import React, { useState } from 'react';
import style from './signup.module.css';
import pic from '../images/business guy.png';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Group 7753.svg';
import axios from 'axios';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Confirmation from '../Confirmation/Confirmation';


const INITIAL = { firstName: '', lastName: '', role: '', phoneNumber: '', email: '', password: '' };

const Signup = ({onSuccess}) => {
  const [form, setForm] = useState(INITIAL);
  const [errorUI, setErrorUI] = useState({});
  const [loading, setLoading] = useState(false);
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [confirmationPage, setConfirmationPage] = useState(false);
  const navigate = useNavigate();
  // const [values, setValues] = useState({
  //   firstName: '',
  //   lastName: '',
  //   role: '',
  //   phoneNumber: '',
  //   email: '',
  //   password: '',
  // });
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const createAccount = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: 'https://loanifyteama-production.up.railway.app/api/v1/auth/sign-up',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      data: {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        role: form.role,
        password: form.password,
        // Add any other data fields as needed
      },
    })
      .then((response) => {
        console.log(response.data);
        navigate('/confirmation');
      })
      .catch((errorUI) => {
        if (errorUI.message === 'Request failed with status code 500') {
          setErrorUI('User already exists');
        }
        console.error(errorUI);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  

  const VALIDATION = {
    email: [
      {
        isValid: (value) => !!value,
        message: 'Is required.',
      },
      {
        isValid: (value) => /\S+@\S+\.\S+/.test(value),
        message: 'Not an email.',
      },
  ],

  password: [
    {
      isValid: (value) => !!value,
      message: "Is required.",
    },
    {
      isValid: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
      message:
        "Requires 6+ characters, Uppercase, Lowercase letters, numeric digit (0-9) and a special character.",
    },
  ],
  
  };

  const getErrorFields = (form) =>
    Object.keys(form).reduce((acc, key) => {
      if (!VALIDATION[key]) return acc;

      const errorsPerField = VALIDATION[key]

        .map((validation) => ({
          isValid: validation.isValid(form[key]),
          message: validation.message,
        }))

        .filter((errorPerField) => !errorPerField.isValid);

      return { ...acc, [key]: errorsPerField };
    }, {});

    const handleChange = (e) => {
      const { id, value } = e.target;
      if (errorUI) setErrorUI(null);
      setForm((prevState) => ({
        ...prevState,
        [id]: value,
      }));
      console.log({ id, value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const errorFields = getErrorFields(form);
      const hasErrors = Object.values(errorFields).flat().length > 0;
      if (hasErrors) return setErrorUI({ ...errorFields });

      setForm(INITIAL);
      console.log("Form submitted");
      setConfirmationPage(true);
      onSuccess();
      }

      const handleSuccess = () => {
        setConfirmationPage(true);
        onSuccess();
      };

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  return (
    <div className={style.signup_container}>
      <div className={style.signup_body}>
       
        <img src={pic} alt="picture" className={style.sideimg} />
       

        <section className={style.section}>
          <img src={logo} alt="logo" className={style.logo} />
          <div className={style.formContainer}>
            
              <h1 className={style.signupheading}>Sign Up</h1>
           

            <div className={style.signup_details}>
              <form onSubmit={handleSubmit} className={style.singup_form}>

                <div className={style.inputFieldBlock}>
                  <label className={style.label} htmlFor="firstName">
                    First Name
                  </label>
                  <input
                type="text" 
                id="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
                className={style.signup__input}
                required
              />
                </div>
                
             

                <div className={style.inputFieldBlock}>
                  <label className={style.label} htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                type="text" 
                id="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className={style.signup__input}
                required
              />
                </div>

                <div className={style.inputFieldBlock}>
                  <label className={style.label} htmlFor="role">
                    Role
                  </label>
                  <input
                type="text" 
                id="role"
                value={form.role}
                onChange={handleChange}
                placeholder="John"
                className={style.signup__input}
                required
              />
                </div>

                <div className={style.inputFieldBlock}>
                  <label className={style.label} htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                type="number" 
                id="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="08122222222"
                minLength={'11'}
                maxLength={'11'}
                className={style.signup__input}
                required
              />
                </div>

                <div>
                  <div className={style.inputFieldBlock}>
                  <label className={style.label} htmlFor="email">
                    Email
                  </label>
                  <input
                type="text" 
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                className={style.signup__input}
              />
              </div>
              <p className={style.error}>
                            {errorUI?.email?.length ? (
                                <span style={{ color: 'red' }}>
                                    {errorUI.email[0].message}
                                </span>
                            ) : null}
              </p>
              </div>

                <div>
                <div className={style.inputFieldBlock}>
                  <label className={style.label} htmlFor="password">
                    Password
                  </label>

                  <div className={style.passwordEyeBlock}>
                  <input
                type={PasswordVisible ? 'text' : 'password'} 
                id="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className={style.signup__input}
              />
              {PasswordVisible ? (
                <BsEye
                  onClick={togglePasswordVisibility}
                  className={style.signupPasswordBlock__icon}
                />
              ) : (
                <BsEyeSlash
                  onClick={togglePasswordVisibility}
                  className={style.signupPasswordBlock__icon}
                />
              )}
              </div>
                
                <p className={style.error}>
              {errorUI?.password?.length ? (
                <span style={{ color: "red" }}>
                  {errorUI.password[0].message}
                </span>
              ) : null}
            </p>
            </div>
            </div>

                <button type="submit" className={style.submit} disabled={loading}>
                  Sign up
                </button>
                {confirmationPage  ? (<Confirmation onSuccess={handleSuccess}/>) : (
                  <Signup/>
              )}
                // {confirmationPage && <Confirmation/>}
                
                {/* <div className={style.login_signup}>
                  <p className={style.logintext}>Already have an account?</p>
                  <Link to="/login" className={style.loginlink}>
                    Log in
                  </Link>
                </div> */}
              </form>
              <div className={style.login_signup}>
                  <p className={style.logintext}>Already have an account?</p>
                  <Link to="/login" className={style.loginlink}>
                    Log in
                  </Link>
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
