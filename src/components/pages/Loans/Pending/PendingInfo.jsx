import pendingdata from './data';
import style from '../NewApplication/AppInfo.module.css'
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PropTypes from 'prop-types';
import { BiCheckbox } from 'react-icons/bi';
// import { useState } from 'react';



export const PendingInfo = ({ selectedItems, onItemCheckChange }) => {
  // const [openedItemId, setOpenedItemId] = useState(null);
  // const [fileDropdownVisible, setFileDropdownVisible] = useState(false);


  const handleCheckboxChange = (id) => {
    onItemCheckChange(id);
  };

  const isChecked = (id) => {
    return selectedItems.includes(id);
  };

  return (
    <div>
       <div>
           {pendingdata.map((item)=>{
          let backgroundColorClass = ''; // Default background color class

          if (item.id === 2 || item.id === 4 || item.id === 5 || item.id === 6 || item.id === 7) {
            backgroundColorClass = style.approvedBackground;
          }
          const itemId = item.id;
          const itemChecked = isChecked(itemId);
            return (
              <div key={item.id}
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
            )
           })}
        </div>     
    </div>
  )

}

PendingInfo.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  onItemCheckChange: PropTypes.func.isRequired,
};
