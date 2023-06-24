import React from 'react'
import style from './confirmationpops.module.css'
import close from '../../assets/close.svg'
import { Link } from 'react-router-dom'


export const ConfirmationPops = ({ message }) => {
  return (
    <div>
        <div className={style.confirmation}>
           <Link to='/confirmation'>
              <img src={close} alt='close logo'/>
            </Link>
           <p>{message}</p>
        </div>
    </div>
  )
}
