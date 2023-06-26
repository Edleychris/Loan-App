import {useState} from 'react'
import style from './security.module.css'
import { Link } from 'react-router-dom';
// import { ChangedPsw } from '../PopUps/ChangedPsw';
import EmailData from './EmailData';
import { BiChevronRight } from 'react-icons/bi';
import Navbar from "../../../Header/Navbar";
import Side from "../../../SideMenu/Side";
import "../../../../App.css";


export const Security = () => {
  const [activeTab, setActiveTab] = useState("Security");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  

  return (
    <div className="App">
    <Navbar />
    <div className="sideandpage">
      <Side />
  <div className="PageContent">
    <div>
    <div className={style.securityNav}>
    <Link to="/dashboard">Home</Link>
    <BiChevronRight className={style.icon} />
    <Link to="/settings">Settings</Link>
    <BiChevronRight className={style.icon} />
    <Link to="#">General</Link>
  </div>

  <div className={style.settings_tab_container}>
      <div className={style.settings_tab_header}>
        <div className={style.settings_tab_tabs}>
        <div className={`${style.settings_tab_tab} ${activeTab === "General" ? style.active : ""}`} 
          onClick={() => handleTabClick("General")}>
          <Link to='/settings'>
          General
          </Link>
          </div>
          <div className={`${style.settings_tab_tab} ${activeTab === "Profile" ? style.active : ""}`} 
          onClick={() => handleTabClick("Profile")}>
          <Link to='/settings/profile'>
          Profile
          </Link>
          </div>
          <div className={`${style.settings_tab_tab} ${activeTab === "User Permissions" ? style.active : ""}`} 
          onClick={() => handleTabClick("User Permissions")}>
          <Link to='/settings/userPermission'>
          User Permissions
          </Link>
          </div>
          <div className={`${style.settings_tab_tab} ${activeTab === "Notifications" ? style.active : ""}`} 
          onClick={() => handleTabClick("Notifications")}>
          <Link to='/settings/notification'>
          Notifications
          </Link>
          </div> 
          <div className={`${style.settings_tab_tab} ${activeTab === "Security" ? style.active : ""}`} 
          onClick={() => handleTabClick("Security")}>
          <Link to='/settings/security'>
          Security
          </Link>
          </div>
        </div>
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
    </div>
    </div>
    </div>
  )
}