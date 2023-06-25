import { Link } from 'react-router-dom'
import style from './resetsuccesspage.module.css'
import checked from '../../assets/Generic.svg'
export const ResetSuccessPage = () => {
  return (
    <div className={style.ResetcomfirmationContainer}>
      <div className={style.Rest_comfirmation}>
        <img src={checked} alt='Checked mark'/>
        <p>Password Reset Successful!</p>
        <Link to='/login'>
        <span>Log in</span>
        </Link>
      </div>
    </div>
  )
}
