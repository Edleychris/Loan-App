import React, { useState } from 'react';
import PropTypes from 'prop-types';
import applicationdata from '../data';
import styles from '../AllLoans/Clients.module.css';
import css from '../AllLoans/Clients.module.css';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';


export const AppClients = ({ selectAll, onAllCheckChange, searchQuery, setSearchQuery, filterStatus }) => {
  const [clientDataChecked, setClientDataChecked] = useState(false);
  const [checkboxesChecked, setCheckboxesChecked] = useState(Array(applicationdata.length).fill(false));
  const caseNumber = "Application Number";
  const fullName = "Full Name";
  const loanStatus = "Loan Status";
  const date = "Date";

  const documentTitle = `${caseNumber} ${fullName} ${loanStatus} ${date}`;
  const handleClientDataCheck = () => {
    const newClientDataChecked = !clientDataChecked;
    setClientDataChecked(newClientDataChecked);
    setCheckboxesChecked(Array(applicationdata.length).fill(newClientDataChecked));
  };


  const handleCheckboxChange = (index) => {
    const newCheckboxesChecked = [...checkboxesChecked];
    newCheckboxesChecked[index] = !newCheckboxesChecked[index];
    setCheckboxesChecked(newCheckboxesChecked);
  };


  const filteredData = filterStatus === 'All' ? applicationdata : applicationdata.filter((item) => item.status === filterStatus);

  return (
    <div className={css.clientsblock}>
      <div className={css.clientsdata_block}>
        <div>
          <div className={css.clientsdata___block}>hello</div>
          <div className={css.clientsdata011}>
            {clientDataChecked ? (
          <ImCheckboxChecked className={css.checkboxIcon_1_app} onClick={handleClientDataCheck} />
        ) : (
          <ImCheckboxUnchecked className={styles.checkbox_12_app} onClick={handleClientDataCheck} />
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
          {filteredData.map((item, index) => {
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
            // const itemChecked = checkboxesChecked[itemId];
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
            } else {
              statusStyles.backgroundColor = '#010E2A';
              statusColor.textColor = '#fff';
            }

            return (
              <div key={itemId} className={`${styles.clientinfo__All}`}>
                {checkboxesChecked[index] ? (
                  <ImCheckboxChecked
                  className={styles.checkboxIcon1_app}
                  onClick={() => handleCheckboxChange(index)}
                />
              ) : (
                <ImCheckboxUnchecked
                  type="checkbox"
                  className={styles.checkbox1_app}
                  checked={false}
                  onClick={() => handleCheckboxChange(index)}
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

AppClients.propTypes = {
  selectAll: PropTypes.bool.isRequired,
  onAllCheckChange: PropTypes.func.isRequired,
};
