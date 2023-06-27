import { useEffect, useState } from 'react'
import { useRef } from 'react';
import styles from './login.module.css';
import business from '../images/business guy.png'
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/Group 7753.svg'
import {BsEye, BsEyeSlash} from 'react-icons/bs'
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { login } from '../../features/userSlice';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errUser, setErrUser] = useState('');
    const [errPwd, setErrPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

  // const dispatch = useDispatch();


 
    useEffect(()=>{
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        setErrUser('')
        setErrPwd('');
    }, [user, pwd])

   

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

        if(!emailRegex.test(user)){
            setErrUser('Invalid email address.')
        }
        else if(!passwordRegex.test(pwd)){
            setErrPwd('Password must be at least 8 characters, including 1 uppercase, 1 symbol, and 1 digit.')
        }
     
        axios({
            method: 'POST',
            url: "https://loanifyteama-production.up.railway.app/api/v1/auth/login",
            headers: {
              'Content-Type': 'application/json',
            
            },
            data: {
              email: user,
              password: pwd,
            
            }
          })
            .then(response => {
              // Handle the response data
              console.log(response.data);
              localStorage.setItem('token', response.data.token);
              if(response.data.status == true) {
                navigate('/token')

                // dispatch(login({
                //   name: firstName,
                //   email: email,
                //   password: password,
                //   signedUp: true,
                // }))
              }
            })
            .catch(error => {
              // Handle any errors
              console.error(error);
              if(error.message == 'Request failed with status code 404'){
                setErrMsg('Incorrect email or password. Try again!')  
              }
              else{
                navigate('/token')
              }
            });
          

    }

    const showPwd = () => {
        setShowPassword((prevVisible) => !prevVisible);
      };



  return (
        <body className={styles.bodyContainer}>
            <section className={styles.body}>

                <div>
                    <img src={business} alt="picture" className={styles.sidepic}/>
                </div>
                <div className={styles.right_login_page}>
                <img src={logo} alt="logo" className={styles.logo}/>

                <div className={styles.main_login}>

                    <h2 className={styles.welcome}>Welcome Back</h2>
                   
                    <form onSubmit={handleSubmit} className={styles.login_form}>
   
                        <div className={styles.input}>

                            <div className={styles.username}>
                                {/* <label htmlFor="email" className={styles.form_label1}>Email</label> */}
                                <input type="email" id='email' ref={userRef} autoComplete='off' onChange={(e) => setUser(e.target.value)} value={user} required className={styles.form_input} placeholder='Email Address'/>
                                <p className={styles.errMsg}>{errUser}</p>   
                            </div>
                            

                            <div className={styles.password}>
                                {/* <label htmlFor="password" className={styles.form_label2}>Password</label> */}
                                <input type={showPassword ? 'text' : 'password'} id='password' onChange={(e) => setPwd(e.target.value)} value={pwd} required className={styles.form_input} placeholder='Password'/>
                                {showPassword ? (<BsEye onClick={showPwd} className={styles.login__icon}/>) : (<BsEyeSlash onClick={showPwd} className={styles.login__icon}/>)}
                                <p className={styles.errMsg} aria-live='assertive'>{errMsg}</p>
                            </div>
                            
                            <p className={styles.errMsg}>{errPwd}</p>   

                            


                            <Link to='/forgotpwd' className={styles.forgotpwd}>Forgot password?</Link>
   
                        </div>


                        <button className={styles.login}>Log In</button>
                    </form>

                        <div className={styles.signup}>
                        <p className={styles.signuptext}>Just joined the team? </p>
                        <Link to='/signup' className={styles.signuplink}>Sign up</Link>
                        </div>

                </div>
                </div>
            </section>

        </body>
  )
}

export default Login;



               