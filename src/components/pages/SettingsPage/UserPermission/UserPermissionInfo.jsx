import style from './UsePer.module.css';
import {MdKeyboardArrowDown} from 'react-icons/md'
import PropTypes from 'prop-types'
import userData from './data/data';
import { useState } from 'react';
import { Checkbox } from '@mui/material';


export const UsePermissionInfo = ({ selectedItems, onItemCheckChange }) => {
    const [openedItemId, setOpenedItemId] = useState(null);
    // const [fileDropdownVisible, setFileDropdownVisible] = useState(false);
  
  
    const handleExportClose = () => {
      setOpenedItemId(null);
    };
  
    const handleCheckboxChange = (id) => {
      onItemCheckChange(id);
    };
  
    const isChecked = (id) => {
      return selectedItems.includes(id);
    };
  
    const handleExportToggle = (id) => {
      if (openedItemId === id) {
        setOpenedItemId(null);
        setFileDropdownVisible(false);
      } else {
        setOpenedItemId(id);
      }
    };
  
    // const handleFileChange = (id) => {
    //   if (openedItemId === id && fileDropdownVisible) {
    //     setFileDropdownVisible(false);
    //   } else {
    //     setOpenedItemId(id);
    //     setFileDropdownVisible(true);
    //   }
    // };
  
    // const isFileOpen = (id) => {
    //   return openedItemId === id && fileDropdownVisible;
    // };
  


  return (
    <div>
      <div className={style.clientSettingsArea}>
        {userData.map((item) => {
          let backgroundColorClass = '';

          if (item.Status === 'Docs. Reviewed') {
            backgroundColorClass = style.approvedBackground;
          }

          const itemId = item.id;
          const itemChecked = isChecked(itemId);
          const isDropdownOpen = openedItemId === itemId;
          // const isFileDropdownOpen = isFileOpen(itemId);


          return (
            <div
              key={item.id}
              className={`${style.clientinfo_setting} ${backgroundColorClass}`}
            >
              {itemChecked ? (
                <Checkbox
                  className={style.checkboxIcon_setting}
                  onClick={() => handleCheckboxChange(itemId)}
                  
                />
              ) : (
                <input
                  type="checkbox"
                  className={style.checkbox_setting}
                  checked={false}
                  onChange={() => handleCheckboxChange(itemId)}
                />
              )}
              <div>{item.firstName}</div>
              <div>{item.lastName}</div>
              <div>{item.emailAddress}</div>
              <div>{item.Role}</div>
              <div>{item.Status}</div>
              <div className={style.action}>{item.Action}</div>
              <div className={style.arrowIcon_setting}>
                <MdKeyboardArrowDown
                className={style.icon_setting}
                onClick={() => handleExportToggle(itemId)}

                />
                {isDropdownOpen && (
                  <div className={style.format_setting}>
                    <i className="bi bi-x" onClick={handleExportClose}></i>
                    {/* <div className={style.text1__setting}> */}
                      {/* <div className={style.text11__setting}> */}
                      <p> Uploader  </p>
                      <p> Approver  </p>
                      <p> Reviewer </p>
                      
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

UsePermissionInfo.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  onItemCheckChange: PropTypes.func.isRequired,
};