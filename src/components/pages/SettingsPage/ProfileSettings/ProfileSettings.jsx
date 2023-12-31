import React, { useState } from "react";
import style from "./profilesettings.module.css";
import { Link, Outlet } from "react-router-dom";
import profileData from "./ProfileData";
import ParentSwitch from "../Switch/ParentSwitch";
import { BiChevronRight, BiCamera } from "react-icons/bi";
import empty from '../../../../assets/Default_pfp.svg.png';
import Navbar from "../../../Header/Navbar";
import Side from "../../../SideMenu/Side";
import "../../../../App.css";


export const ProfileSettings = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("olufemiayo@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("08022222222");
  const [address, setAddress] = useState("No 10, Superman lane, Infinity street, Oz");
  const [role, setRole] = useState("Senior Loan Officer");
  const [isEditing, setIsEditing] = useState(false);
  const [photo, setPhoto] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const user = {
    // firstName: 'John',
    // lastName: 'Doe',
    photo: 'url'
  };

  const handleNameClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleCameraDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleGalleryDropdown = () => {
    setShowDropdown(!showDropdown);
    // Add logic for gallery option here
  };

//   const handleCameraOption = () => {  
//     const takePicture = () => {
//     };

//     const uploadPicture = (picture) => {
//       setPhoto(picture);
//     };

//     takePicture();
//   // After capturing the picture, call uploadPicture with the captured picture data
//   uploadPicture(capturedPicture);
// };



  return (
    <div className="App">
    <Navbar />
    <div className="sideandpage">
      <Side />
  <div className="PageContent">
    <div>
  <div className={style.profilesettingsNav}>
        <Link to="/dashboard">Home</Link>
        <BiChevronRight className={style.icon} />
        <Link to="/settings">Settings</Link>
        <BiChevronRight className={style.icon} />
        <Link to="#">Profile</Link>
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
    <div>
      
      
        <div className={style.userProfile_settings_container}>
          <div className={style.user_block}>
            <div className={style.displayPhoto}>

             {!photo ? <img  src={empty} alt='default photo' className={style.noPhoto}/> :
              <img
                className={style.avatar}
                alt="user profile"
                src={photo}
                sx={{ width: 140, height: 140 }}
              />
            }
            <BiCamera className={style.camera} onClick={handleCameraDropdown} />
            {showDropdown && (
              <div className={style.dropdown}>
                <div className={style.dropdownItem} onClick={handleCameraDropdown}>
                  Camera
                </div>
                <div className={style.dropdownItem} onClick={handleGalleryDropdown}>
                  Gallery
                </div>
              </div>
            )}
  
            </div>
            <div>
              <div className={style.about_user}>
                <h3>
                  {firstName} {lastName}
                </h3>
                <p>
                  Role:
                  <span className={style.role}>{role}</span>
                </p>
                <p>
                  Status:
                  <span className={style.status}>{status}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.User_form_header}>
          <h3>Personal Information</h3>
        </div>

        <div className={style.profileForm}>
        <div>
          <div className={style.user_wrapper}>
            <label>First Name</label>
            {!isEditing ? (
              <span onClick={handleNameClick}>{firstName}</span>
            ) : (
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            )}
          </div>

          <div className={style.user_wrapper}>
            <label>Email</label>
            {!isEditing ? (
              <span onClick={handleNameClick}>{email}</span>
            ) : (
              <input type="email" value={email} onChange={handleEmailChange} />
            )}
          </div>

          <div className={style.user_wrapper}>
            <label>Address</label>
            {!isEditing ? (
              <span onClick={handleNameClick}>{address}</span>
            ) : (
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
              />
            )}
          </div>

          <ParentSwitch className={style.user_parent_switch} />
        </div>

        <div>
          <div className={style.user_wrapper}>
            <label>Last Name</label>
            {!isEditing ? (
              <span onClick={handleNameClick}>{lastName}</span>
            ) : (
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
              />
            )}
          </div>

          <div className={style.user_wrapper}>
            <label>Phone Number</label>
            {!isEditing ? (
              <span onClick={handleNameClick}>{phoneNumber}</span>
            ) : (
              <input
                type="number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            )}
          </div>

          <div className={style.user_wrapper}>
            <label>Role</label>
            {!isEditing ? (
              <span onClick={handleNameClick}>{role}</span>
            ) : (
              <input type="text" value={role} onChange={handleRoleChange} />
            )}
          </div>
        </div>
      </div>
      <div className={style.save_profile_btn_container} >
        <button className={style.save_profile_btn} onClick={handleSave}>Save</button>
      </div>
    </div>
    </div>
    </div>
    </div></div>
  );
};

