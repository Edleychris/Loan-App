import { General } from './General/General'
import { ProfileSettings } from './ProfileSettings/ProfileSettings'
import { Notification } from './NotificationPage/Notification'
import { Security } from './Security/Security'
import AllUserPermission from './UserPermission/AllUserPermission'
import Navbar from "../../Header/Navbar";
import Side from "../../SideMenu/Side";
import "../../../App.css";
import { useState } from 'react'
import style from './Settings.module.css'


export const Settings = () => {
  const [activeTab, setActiveTab] = useState("allLoans");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="App">
      <Navbar />
      <div className="sideandpage">
        <Side />
    <div className="PageContent">
       <div className={style.settings_tab_container}>
      <div className={style.settings_tab_header}>
        <div className={style.settings_tab_tabs}>
          <div
            className={`${style.settings_tab_tab} ${activeTab === "allLoans" ? style.active : ""}`}
            onClick={() => handleTabClick("allLoans")}
          >
           General
          </div>
          <div
            className={`${style.settings_tab_tab} ${activeTab === "newApp" ? style.active : ""}`}
            onClick={() => handleTabClick("newApp")}
          >
            Profile
          </div>
          <div
            className={`${style.settings_tab_tab} ${activeTab === "pending" ? style.active : ""}`}
            onClick={() => handleTabClick("pending")}
          >
            User Permissions
          </div>
          <div
            className={`${style.settings_tab_tab} ${activeTab === "active" ? style.active : ""}`}
            onClick={() => handleTabClick("active")}
          >
            Notifications
          </div>
          <div
            className={`${style.settings_tab_tab} ${activeTab === "dueLoans" ? style.active : ""}`}
            onClick={() => handleTabClick("dueLoans")}
          >
            Security
          </div>
        </div>
      </div>
    </div>

      <div >
        {activeTab === "allLoans" && <div className={style.settings_tab_tab_content}>
        <General />
        </div>}
        {activeTab === "newApp" && <div className={style.settings_tab_content}><ProfileSettings /></div>}
        {activeTab === "pending" && <div className={style.settings_tab_content}><AllUserPermission /></div>}
        {activeTab === "active" && <div className={style.settings_tab_content}><Notification /></div>}
        {activeTab === "dueLoans" && <div className={style.settings_tab_content}><Security /></div>}
      </div>
    </div>
    </div>
    </div>
  )
}