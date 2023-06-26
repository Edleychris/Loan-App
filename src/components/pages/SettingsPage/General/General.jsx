import { BiChevronRight } from "react-icons/bi";
import style from "./general.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Header/Navbar";
import Side from "../../../SideMenu/Side";
import "../../../../App.css";
import { useState } from "react";

export const General = () => {
  const [activeTab, setActiveTab] = useState("General");

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
  <div className={style.generalNav}>
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
          <Link to='/settings/userpermission'>
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
    <div>
      <div className={style.general_set_Block_Block1}>
        <div className={style.general_set_Block}>
          <p>Updates</p>
        </div>

        <div className={style.general_set_Block}>
          <p>Legal & Regulatory</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};
