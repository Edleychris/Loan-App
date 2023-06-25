import React, { useEffect, useState } from 'react'
import building from '../../assets/Buildings on onboarding page.jpg'
import logo from '../../assets/Group 7753.svg'
import styles from './landing.module.css'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setRedirect(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(()=>{
        if (redirect){
            navigate('/login');
        }
    }, [navigate, redirect]);
   
  return (
    <main className={styles.main}>
        <div className={styles.image}>
        <img src={building} alt="building" className={styles.img}/>
        </div>
        <div className={styles.text}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <h4>Your one stop virtual assistant for the Loan Organization System</h4>
        </div>
    </main>
  )
}

export default Landing