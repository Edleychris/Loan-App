import React, { useState } from 'react';
import PropTypes from 'prop-types';
import applicationdata from '../data';
import styles from '../AllLoans/Clients.module.css';
import css from '../AllLoans/Clients.module.css';
import { BiCheckbox } from 'react-icons/bi';

export const AppClients = ({ selectAll, onAllCheckChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAllCheckChange = () => {
    const newSelectAll = !selectAll;
    onAllCheckChange(newSelectAll);

    if (newSelectAll) {
      setSelectedItems(applicationdata.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleCheckboxChange = (id) => {
    let updatedSelectedItems = [...selectedItems];

    if (updatedSelectedItems.includes(id)) {
      updatedSelectedItems = updatedSelectedItems.filter((item) => item !== id);
    } else {
      updatedSelectedItems.push(id);
    }

    setSelectedItems(updatedSelectedItems);
  };

  const isChecked = (id) => {
    return selectedItems.includes(id);
  };

  return (
    <div className={css.clientsblock}>
      <div  className={css.clientsdata_block}>
      <div>
        <div  className={css.clientsdata___block}>hello</div>
        <div className={css.clientsdata}>
        {selectAll ? (
          <BiCheckbox className={css.checkboxIcon_1} onClick={handleAllCheckChange} />
        ) : (
          <input type="checkbox" checked={false} onChange={handleAllCheckChange} className={styles.checkbox_12} />
        )}
        <h3>Case Number</h3>
        <h3>First Name</h3>
        <h3>Last Name</h3>
        <h3>Application Start Date</h3>
        <h3>Submission Date</h3>
        <h3>Application Status</h3>
      </div>
      </div>
      </div>
      <div className={styles.clientContainer_block_block_block}>
      <div className={styles.clientContainer}>
        {applicationdata.map((item) => {
          // let backgroundColorClass = '';

          // if (item.status === 'Docs. Reviewed') {
          //   backgroundColorClass = styles.approvedBackground;
          // }

          const itemId = item.id;
          const itemChecked = isChecked(itemId);
          let statusStyles = {};

          if (item.status === "Approved") {
            statusStyles.backgroundColor = "#33DD64"

          } else if (item.status === "Declined") {
            statusStyles.backgroundColor = "d30744"

         }else if (item.status === "Due"){
           statusStyles.backgroundColor = "#F3B516"

         } else if (item.status === "Incomplete Docs"){
         statusStyles.backgroundColor = "#fff"

          } else {
            statusStyles.backgroundColor = "#010E2A"
            
          }


          return (
            <div
              key={item.id}
              className={`${styles.clientinfo}`}
            >
              {itemChecked ? (
                <BiCheckbox
                  className={styles.checkboxIcon}
                  onClick={() => handleCheckboxChange(itemId)}
                />
              ) : (
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={false}
                  onChange={() => handleCheckboxChange(itemId)}
                />
              )}
              <div>{item.caseNumber}</div>
              <div>{item.firstName}</div>
              <div>{item.LastName}</div>
              <div>{item.applicationDate}</div>
              <div>{item.update}</div>
              <div 
                style={statusStyles} className={styles.Loan__Status1}
                >{item.status}</div>
            </div>
          );
        })}
      </div>

      </div>
    {/* </div> */}
    </div>

  );
};

AppClients.propTypes = {
  selectAll: PropTypes.bool.isRequired,
  onAllCheckChange: PropTypes.func.isRequired,
};
