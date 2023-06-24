import applicationdata from '../data';
import style from './AppInfo.module.css';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PropTypes from 'prop-types';
import { BiCheckbox } from 'react-icons/bi';
// import { useState } from 'react';



export const AppInfo = ({ selectedItems, onItemCheckChange }) => {
  // const [openedItemId, setOpenedItemId] = useState(null);
  // const [fileDropdownVisible, setFileDropdownVisible] = useState(false);


  // const handleExportClose = () => {
  //   setOpenedItemId(null);
  // };

  const handleCheckboxChange = (id) => {
    onItemCheckChange(id);
  };

  const isChecked = (id) => {
    return selectedItems.includes(id);
  };

  // const handleExportToggle = (id) => {
  //   if (openedItemId === id) {
  //     setOpenedItemId(null);
  //     setFileDropdownVisible(false);
  //   } else {
  //     setOpenedItemId(id);
  //   }
  // };

  // const handleFileChange = (id) => {
  //   if (openedItemId === id && fileDropdownVisible) {
  //     setFileDropdownVisible(false);
  //   } else {
  //     setOpenedItemId(id);
  //     setFileDropdownVisible(true);
  //   }
  // };


  return (
    <div>
      <div>
        {applicationdata.map((item) => {
          let backgroundColorClass = '';

          if (item.status === 'Docs. Reviewed') {
            backgroundColorClass = style.approvedBackground;
          }

          const itemId = item.id;
          const itemChecked = isChecked(itemId);


          return (
            <div
              key={item.id}
              className={`${style.clientinfo} ${backgroundColorClass}`}
            >
              {itemChecked ? (
                <BiCheckbox
                  className={style.checkboxIcon}
                  onClick={() => handleCheckboxChange(itemId)}
                />
              ) : (
                <input
                  type="checkbox"
                  className={style.checkbox}
                  checked={false}
                  onChange={() => handleCheckboxChange(itemId)}
                />
              )}
              <div>{item.caseNumber}</div>
              <div>{item.firstName}</div>
              <div>{item.LastName}</div>
              <div>{item.applicationDate}</div>
              <div>{item.update}</div>
              <div>{item.status}</div>
              <div className={style.arrowIcon}>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

AppInfo.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  onItemCheckChange: PropTypes.func.isRequired,
};