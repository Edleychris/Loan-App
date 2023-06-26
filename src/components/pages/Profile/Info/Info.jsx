import data from '.././data/data.jsx';
import style from './info.module.css';
import PropTypes from 'prop-types';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { useState } from 'react';


export const Info = ({ selectedItems, onItemCheckChange }) => {
  const [clientDataChecked, setClientDataChecked] = useState(false);
  const [checkboxesChecked, setCheckboxesChecked] = useState(Array(data.length).fill(false));


  const handleClientDataCheck = () => {
    const newClientDataChecked = !clientDataChecked;
    setClientDataChecked(newClientDataChecked);
    setCheckboxesChecked(Array(data.length).fill(newClientDataChecked));
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxesChecked = [...checkboxesChecked];
    newCheckboxesChecked[index] = !newCheckboxesChecked[index];
    setCheckboxesChecked(newCheckboxesChecked);
  };
  const isChecked = (id) => {
    return selectedItems.includes(id);
  };

  return (
    <div>
    <div className={style.clientsblock}>
    <h2>All Clients</h2>
    <div className={style.clientsdata}>
    {clientDataChecked ? (
        <ImCheckboxChecked className={style.checkbox1} onClick={handleClientDataCheck} />
      ) : (
        <ImCheckboxUnchecked type="checkbox" checked={false} onClick={handleClientDataCheck} className={style.checkbox2}/>
      )}
      <h3>Case Number</h3>
      <h3>First Name</h3>
      <h3>Last Name</h3>
      <h3>Application Date</h3>
      <h3>Recent Update</h3>
      <h3>Loan Status</h3>
    </div>
  </div>
    <div className={style.infoContainer}>
      <div>
        {data.map((item, index) => {

           const itemId = item.id;
           const itemChecked = isChecked(itemId);

           let statusStyle = {};
                
           if (item.status === "Approved") {
             statusStyle.backgroundColor = "#33DD64"

           } else if (item.status === "Declined") {
             statusStyle.backgroundColor = "red"

          }else if (item.status === "Due"){
            statusStyle.backgroundColor = "#F3B516"

          } else if (item.status === "Closed"){
          statusStyle.backgroundColor = "#6A8FE5"

           } else {
             statusStyle.backgroundColor = "Orange"
             
           }


          return (
            <div>
      
            <div key={item.id} className={style.clientinfo}>
              {checkboxesChecked[index] ? (
                <ImCheckboxChecked
                  className={style.checkboxIcon}
                  onClick={() => handleCheckboxChange(index)}
                />
              ) : (
                <ImCheckboxUnchecked
                  // type="checkbox"
                  className={style.checkbox}
                  checked={false}
                  onClick={() => handleCheckboxChange(index)}
                />
              )}

             
                  <div>{item.caseNumber}</div>
              <div>{item.firstName}</div>
              <div>{item.LastName}</div>
              <div>{item.applicationDate}</div>
              <div>{item.update}</div>
              <div style={statusStyle} className={style.LoanStatus}>{item.status}</div>
            </div>
            </div>
                )

          
        })}
      </div></div>
    </div>
  );
};

Info.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  onItemCheckChange: PropTypes.func.isRequired,
};
