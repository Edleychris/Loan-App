import css from './AllUser.module.css';
import { useState } from "react";
import userData from './data/data';
import { BiChevronRight } from 'react-icons/bi';
import {Link} from 'react-router-dom';
import Navbar from "../../../Header/Navbar";
import Side from "../../../SideMenu/Side";
import "../../../../App.css";
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { BiChevronDown } from 'react-icons/bi';
import {GrFormClose} from 'react-icons/gr';


function NewApp() {

  const [selectAll, setSelectAll] = useState(false);
  // const [selectedItems, setSelectedItems] = useState([]);
  const [activeTab, setActiveTab] = useState("User Permissions");
  const [openedItemId, setOpenedItemId] = useState(null);
  const [clientDataChecked, setClientDataChecked] = useState(false);
  const [checkboxesChecked, setCheckboxesChecked] = useState(Array(userData.length).fill(false));

  const handleClientDataCheck = () => {
    const newClientDataChecked = !clientDataChecked;
    setClientDataChecked(newClientDataChecked);
    setCheckboxesChecked(Array(userData.length).fill(newClientDataChecked));
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxesChecked = [...checkboxesChecked];
    newCheckboxesChecked[index] = !newCheckboxesChecked[index];
    setCheckboxesChecked(newCheckboxesChecked);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleExportClose = () => {
    setOpenedItemId(null);
  };
  const handleExportToggle = (id) => {
    if (openedItemId === id) {
      setOpenedItemId(null);
      setFileDropdownVisible(false);
    } else {
      setOpenedItemId(id);
    }
  };
  return (
    <div className="App">
    <Navbar />
    <div className="sideandpage">
      <Side />
  <div className="PageContent">
    <div>
    <div className={css.userPermissionNav}>
        <Link to="/dashboard">Home</Link>
        <BiChevronRight className={css.icon} />
        <Link to="/settings">Settings</Link>
        <BiChevronRight className={css.icon} />
        <Link to="#">User Permission</Link>
      </div>
      <div className={css.settings_tab_container}>
      <div className={css.settings_tab_header}>
        <div className={css.settings_tab_tabs}>
        <div className={`${css.settings_tab_tab} ${activeTab === "General" ? css.active : ""}`} 
          onClick={() => handleTabClick("General")}>
          <Link to='/settings'>
          General
          </Link>
          </div>
          <div className={`${css.settings_tab_tab} ${activeTab === "Profile" ? css.active : ""}`} 
          onClick={() => handleTabClick("Profile")}>
          <Link to='/settings/profile'>
          Profile
          </Link>
          </div>
          <div className={`${css.settings_tab_tab} ${activeTab === "User Permissions" ? css.active : ""}`} 
          onClick={() => handleTabClick("User Permissions")}>
          <Link to='/settings/userPermission'>
          User Permissions
          </Link>
          </div>
          <div className={`${css.settings_tab_tab} ${activeTab === "Notifications" ? css.active : ""}`} 
          onClick={() => handleTabClick("Notifications")}>
          <Link to='/settings/notification'>
          Notifications
          </Link>
          </div>
          <div className={`${css.settings_tab_tab} ${activeTab === "Security" ? css.active : ""}`} 
          onClick={() => handleTabClick("Security")}>
          <Link to='/settings/security'>
          Security
          </Link>
          </div>
        </div>
      </div>
    </div>

    <div className={css.clientsblock}>
      <div className={css.clientblocks_1}>
        hello
                <div className={css.clientsdata}>
                {clientDataChecked ? (
          <ImCheckboxChecked className={css.checkboxIcon_1_client_1} onClick={handleClientDataCheck} />
        ) : (
          <ImCheckboxUnchecked className={css.checkboxIcon_1_client_1} onClick={handleClientDataCheck} />
        )}
           <h3>First Name</h3>
          <h3>Last Name</h3>
          <h3>Email Address</h3>
          <h3>Role</h3>
          <h3>Status</h3>
          <h3>Action</h3>
                </div>
                </div>

                <section className={css.client_table}>
                  <div
                    className={css.ClientInfo_Block_Container}
                   
                  >
                    {userData.map((item, index) => {
                       let statusStyle = {};

                       if (item.Action === "Choose") {
                         statusStyle.backgroundColor = "#ffff";
                       } 
                       const itemId = item.id;
                       const isDropdownOpen = openedItemId === itemId;
                      return (
                        <div key={item.id} className={css.clientinfo__client}>
                          {/* <div> */}
                          {checkboxesChecked[index] ? (
                  <ImCheckboxChecked
                  className={css.checkboxIcon_1_client}
                  onClick={() => handleCheckboxChange(index)}
                />
              ) : (
                <ImCheckboxUnchecked
                  type="checkbox"
                  className={css.checkboxIcon_1_client}
                  checked={false}
                  onClick={() => handleCheckboxChange(index)}
                />
              )}
              <p>{item.firstName}</p>
              <p>{item.lastName}</p>
              <p>{item.emailAddress}</p>
              <p>{item.Role}</p>
              <p>{item.Status}</p>
              <p className={css.action} style={statusStyle}>{item.Action} <BiChevronDown onClick={() => handleExportToggle(itemId)}/>
              {isDropdownOpen && (
                  <div className={css.format_setting}>
                    <GrFormClose className={css.bi_close} onClick={handleExportClose}/>
                      <p> Uploader  </p>
                      <p> Approver  </p>
                      <p> Reviewer </p>
                      
                  </div>
                )}</p>
               </div>
                      );
                    })}
                  </div>
                </section>
              </div>
    </div>
    </div>
    </div>
    </div>
  );
    
}

export default NewApp