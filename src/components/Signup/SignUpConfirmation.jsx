import React from 'react'
import style from './signupconfirmation.module.css'
import {ConfirmationPops} from '../ConfirmationPops/ConfirmationPops'

export const SignUpConfirmation = () => {
  return (
    <div className={style.confirmEmail}>
       <ConfirmationPops message="Confirmation email resent"/>
    </div>
  )
}
