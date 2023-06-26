import style from "./notifications.module.css";
import { Link } from "react-router-dom";
import NotificationSwitch from "./NotificationSwitch";
import { BiChevronRight } from "react-icons/bi";
import Navbar from "../../../Header/Navbar";
import Side from "../../../SideMenu/Side";
import "../../../../App.css";
import { useState } from "react";

export const Notification = () => {
  const [activeTab, setActiveTab] = useState("Notifications");

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
      <div className={style.notificationOverviewnNav}>
        <Link to="/dashboard">Home</Link>
        <BiChevronRight className={style.icon} />
        <Link to="/settings">Settings</Link>
        <BiChevronRight className={style.icon} />
        <Link to="#">notification</Link>
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

      <div className={style.notificationBlock}>
        <div className={style.emailNotificationBlock}>
          <div className={style.emailBlock}>
            <h4>Email Notifications</h4>
            <p>
              Get emails to find out what happens when you're not online. You
              can turn them off.
            </p>
          </div>

          <div>
            <div className={style.notification}>
              <NotificationSwitch />
              <div className={style.notificationText}>
                <h5>New Applications</h5>
                <p>Get notified about new loan applications</p>
              </div>
            </div>

            <div className={style.notification}>
              <NotificationSwitch />
              <div className={style.notificationText}>
                <h5>Extension Applications</h5>
                <p>Get notified about new loan extension applications</p>
              </div>
            </div>

            <div className={style.notification}>
              <NotificationSwitch />
              <div className={style.notificationText}>
                <h5>Due Loans</h5>
                <p>Get notified about due loans</p>
              </div>
            </div>

            <div className={style.notification}>
              <NotificationSwitch />
              <div className={style.notificationText}>
                <h5>Completed Loans</h5>
                <p>Get notified about completed loans</p>
              </div>
            </div>

            <div className={style.notification}>
              <NotificationSwitch />
              <div className={style.notificationText}>
                <h5>New Messages</h5>
                <p>Get notified about new messages</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.pushNotificationBlock}>
          <div className={style.pushBlock}>
            <h4>Push Notifications</h4>
            <p>
              Get push notifications in-app to find out what happens when you're
              not online. You can turn them off.
            </p>
          </div>

          <div>
            <div className={style.notification}>
              <NotificationSwitch />
              <div className={style.notificationText}>
                <h5>New Applications</h5>
                <p>Get notified about new loan applications</p>
              </div>
            </div>

            <div className={style.notification}>
              <NotificationSwitch />
              <div className={style.notificationText}>
                <h5>Extension Applications</h5>
                <p>Get notified about new loan extension applications</p>
              </div>
            </div>

            <div className={style.notification}>
              <NotificationSwitch />
              <div className={style.notificationText}>
                <h5>Due Loans</h5>
                <p>Get notified about due loans</p>
              </div>
            </div>

            <div className={style.notification}>
              <NotificationSwitch />
              <div className={style.notificationText}>
                <h5>Completed Loans</h5>
                <p>Get notified about completed loans</p>
              </div>
            </div>

            <div className={style.notification}>
              <NotificationSwitch />
              <div className={style.notificationText}>
                <h5>New Messages</h5>
                <p>Get notified about new messages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};
