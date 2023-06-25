import React from 'react';
import style from './resend.module.css';
import closeImg from '../../assets/Controls.svg'
// import { Link } from 'react-router-dom';

function Resend() {
  return (
    <div className={style.ResendcomfirmationContainer}>
      <div className={style.Resendclose}>
        <img src={closeImg} alt="close image" />
      </div>
      <div className={style.Resend_confirmation}>
        <p className={style.Resend_reset}>Token resent to your email.</p>
      </div>
    </div>
  )
}

export default Resend