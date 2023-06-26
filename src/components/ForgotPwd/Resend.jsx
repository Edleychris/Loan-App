import React from 'react';
import style from './resend.module.css';

function Resend() {
  return (
    <div className={style.ResendcomfirmationContainer}>
      <div className={style.Resendclose}>
      </div>
      <div className={style.Resend_confirmation}>
        <p className={style.Resend_reset}>Token resent to your email.</p>
      </div>
    </div>
  )
}

export default Resend