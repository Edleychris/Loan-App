import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../AllLoans/Clients.module.css';
import css from '../AllLoans/Clients.module.css';
import { BiCheckbox } from 'react-icons/bi';
import pendingdata from './data';

export const Pending = ({ selectAll, onAllCheckChange, searchQuery, setSearchQuery, filterStatus }) => {
  const [clientDataChecked, setClientDataChecked] = useState(false);
  const [checkboxesChecked, setCheckboxesChecked] = useState(Array(pendingdata.length).fill(false));

  const handleClientDataCheck = () => {
    setClientDataChecked(!clientDataChecked);
    setCheckboxesChecked(Array(pendingdata.length).fill(!clientDataChecked));
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxesChecked = [...checkboxesChecked];
    newCheckboxesChecked[index] = !newCheckboxesChecked[index];
    setCheckboxesChecked(newCheckboxesChecked);
  };

  const filteredData = filterStatus === 'All' ? pendingdata : pendingdata.filter((item) => item.status === filterStatus);

  return (
    <div className={css.clientsblock}>
      <div className={css.clientsdata_block}>
        <div>
          <div className={css.clientsdata___block}>hello</div>
          <div className={css.clientsdata011}>
            {selectAll ? (
              <BiCheckbox className={css.checkboxIcon_1} onClick={handleClientDataCheck} />
            ) : (
              <input type="checkbox" checked={false} onChange={handleClientDataCheck} className={styles.checkbox_12} />
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
          {filteredData.map((item) => {
            if (
              searchQuery &&
              !(
                item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.LastName.toLowerCase().includes(searchQuery.toLowerCase())
              )
            ) {
              return null;
            }

            const itemId = item.id;
            const itemChecked = checkboxesChecked[itemId];
            let statusStyles = {};
            let statusColor = {};

            if (item.status === 'Approved') {
              statusStyles.backgroundColor = '#33DD64';
              statusColor.textColor = '#fff';
            } else if (item.status === 'Declined') {
              statusStyles.backgroundColor = '#d30744';
              statusColor.textColor = '#fff';
            } else if (item.status === 'Due') {
              statusStyles.backgroundColor = '#F3B516';
              statusColor.textColor = '#fff';
            } else if (item.status === 'Incomplete Docs') {
              statusStyles.backgroundColor = '#fff';
            } 
            else if (item.status === 'Pending') {
              statusStyles.backgroundColor = '#F3B516';
            }
             else {
              statusStyles.backgroundColor = '#010E2A';
              statusColor.textColor = '#fff';
            }

            return (
              <div key={item.id} className={`${styles.clientinfo__All}`}>
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
                  style={{
                    backgroundColor: statusStyles.backgroundColor,
                    color: statusColor.textColor,
                  }}
                  className={styles.Loan__Status1}
                >
                  {item.status}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Pending.propTypes = {
  selectAll: PropTypes.bool.isRequired,
  onAllCheckChange: PropTypes.func.isRequired,
};
