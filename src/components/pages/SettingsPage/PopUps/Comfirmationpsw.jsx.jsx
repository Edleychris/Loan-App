import checked from '../../../../assets/Generic.svg'
import style from './passwordpopup.module.css'
import close from '../../../../assets/Controls.svg'
import {Link } from 'react-router-dom';

export const ComfirmationPsw = ({ message }) => {
  return (
    <div className={style.confirmationContainer}>
      <div className={style.close}>
        <Link to='/settings/security'>
        <img src={close} alt='close logo'/>
        </Link>

      </div>
      <div className={style.confirmation}>
        <img src={checked} alt='Checked mark'/>
        <p>{message}</p>
      </div>
    </div>
  )
}