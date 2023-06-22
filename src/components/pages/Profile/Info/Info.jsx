import data from '.././data/data.jsx';
import style from './info.module.css';
import { BiCheckbox } from 'react-icons/bi';
import PropTypes from 'prop-types';


export const Info = ({ selectedItems, onItemCheckChange }) => {
  const handleCheckboxChange = (id) => {
    onItemCheckChange(id);
  };

  const isChecked = (id) => {
    return selectedItems.includes(id);
  };

  return (
    <div className={style.infoContainer}>
      <div>
        {data.map((item) => {

           const itemId = item.id;
           const itemChecked = isChecked(itemId);

           let statusStyle = {};
                
           if (item.status === "Approved") {
             statusStyle.backgroundColor = "#33DD64"

           } else if (item.status === "Declined") {
             statusStyle.backgroundColor = "red"

          }else if (item.status === "Due") {
            statusStyle.backgroundColor = "#F3B516"

          } else if (item.status === "Closed") {
          statusStyle.backgroundColor = "#6A8FE5"

           } else {
             statusStyle.backgroundColor = "Orange"
             
           }


          return (
            <div key={item.id} className={style.clientinfo}>
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
              <div style={statusStyle} className={style.LoanStatus}>{item.status}</div>
            </div>
                )

          
        })}
      </div>
    </div>
  );
};

Info.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  onItemCheckChange: PropTypes.func.isRequired,
};
