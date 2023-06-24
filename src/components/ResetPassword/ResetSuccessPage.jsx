// import ComfirmationPsw from '../pages/SettingsPage/PopUps/ChangedPsw'
import { Link } from 'react-router-dom'
import style from './resetsuccesspage.module.css'
import Comfirmation from '../Comfirm Page/Comfirmation'


export const ResetSuccessPage = () => {
  return (
    <div className={style.resetPasswordLink}>
      <Link to='/login'>
      <Comfirmation message="Password reset successful!"  className={style.loginLink_black}/>
        <Link className={style.loginLink}>Log in</Link>
      </Link>
       
    </div>

  )
}
