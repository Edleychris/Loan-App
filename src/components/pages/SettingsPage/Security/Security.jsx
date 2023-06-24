import {useState} from 'react'
import style from './security.module.css'
import { Link } from 'react-router-dom';
// import { ChangedPsw } from '../PopUps/ChangedPsw';
import EmailData from './EmailData';
import { BiChevronRight } from 'react-icons/bi';


export const Security = () => {

  
// const [openPop, setOpenPop] = useState(false)

//   const handleButtonClick =(e)=>{
//     e.preventDefault();
//     setOpenPop(!openPop);
    
//   }

  // const handleDropdownClose = () =>{
  //   setOpenPop(false)
  // }




  return (
    <div>
    <div className={style.securityNav}>
    <Link to="/dashboard">Home</Link>
    <BiChevronRight className={style.icon} />
    <Link to="/settings">Settings</Link>
    <BiChevronRight className={style.icon} />
    <Link to="#">General</Link>
  </div>

      <div className={style.settings_btn_container}>
      <div className={style.settings_btn}>
        <Link to='/settings' style={{color:'#CCCCC0'}}>General</Link>
        <Link to='/settings/profile' style={{color:'#CCCCC0'}}>Profile</Link>
        <Link to='/settings/userpermission' style={{color:'#CCCCC0'}}>User Permissions</Link>
        <Link to='/settings/notification' style={{color:'#CCCCC0'}}>Notifications</Link>
        <Link to='/settings/security' className={style.activeSetting}>Security</Link>
      </div>
      </div>
     

      <div className={style.securityContainer}>
        <div className={style.general_set_Block}>
          <div className={style.securityTextBlock}>
            <h4>Email Address</h4>
            <p>The email address associated with your account   </p>
          </div>

          {EmailData.map((data)=>{
            return(
              <div key={data.id} className={style.editBlock}>
            <p>{data.email}</p>
          </div>
          )
        })}

        </div>

        <div className={style.general_set_Block}>
          <div  className={style.securityTextBlock}>
            <h4>Password</h4>
            <p>Set a unique password to protect your account</p>
          </div>
          <Link to='/settings/security/change-password' className={style.changePassword}>Change Password</Link>
        </div>
        <div className={style.general_set_Block}>
          <div  className={style.securityTextBlock}>
            <h4>Delete Account</h4>
            <p>Permanently delete your account</p>
          </div>
          <Link  path='/signup' className={style.delete}>Delete</Link>
        </div>
      </div>
    </div>
  )
}