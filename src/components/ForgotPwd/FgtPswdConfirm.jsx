// import React from 'react'
// import { ConfirmationPops } from '../ConfirmationPops/ConfirmationPops'
import style from './fgtpswdconfirm.module.css'
import { Link } from 'react-router-dom'
// import { ComfirmationPsw } from '../SettingsPage/PopUps/Comfirmationpsw.jsx'
import { ComfirmationPsw } from '../pages/SettingsPage/PopUps/Comfirmationpsw.jsx'
import Comfirmation from '../Comfirm Page/Comfirmation'
export const FgtPswdConfirm = () => {
  return (
    <div className={style.resetPasswordLink}>
       <Link to='/resetpassword'>
       <Comfirmation message='Reset password link has been sent to your email.'/>
       <Link to='/resetpaswword'>Reset Password</Link>
     </Link>
    </div>
  )
}
