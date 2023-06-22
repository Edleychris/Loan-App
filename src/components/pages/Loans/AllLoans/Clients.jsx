import css from './Clients.module.css';
import PropTypes from 'prop-types';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { BiCheckbox } from 'react-icons/bi';
import styles from './Clients.module.css';
import data from './Data';
import { useState } from 'react';



export const Clients = ({ searchQuery, setSearchQuery, filterStatus  }) => {
  const [clientDataChecked, setClientDataChecked] = useState(false);
  const [checkboxesChecked, setCheckboxesChecked] = useState(Array(data.length).fill(false));
  


  const handleClientDataCheck = () => {
    setClientDataChecked(!clientDataChecked);
    setCheckboxesChecked(Array(data.length).fill(!clientDataChecked));
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxesChecked = [...checkboxesChecked];
    newCheckboxesChecked[index] = !newCheckboxesChecked[index];
    setCheckboxesChecked(newCheckboxesChecked);
  };


  const filteredData = filterStatus === 'All' ? data : data.filter((item) => item.status === filterStatus);
  return (
    <div className={css.clientsblock}>
      <div  className={css.clientsdata_block}>
      <div>
        <div  className={css.clientsdata___block}>hello</div>
        <div className={css.clientsdata}>
        {clientDataChecked ? (
          <BiCheckbox className={css.checkboxIcon_1} onClick={handleClientDataCheck} />
        ) : (
          <input type="checkbox" className={styles.checkbox_12} onClick={handleClientDataCheck} />
        )}
        <h3>Case Number</h3>
        <h3>First Name</h3>
        <h3>Last Name</h3>
        <h3>Application Date</h3>
        <h3>Recent Update</h3>
        <h3>Loan Status</h3>
        </div>
       
      </div>
      </div>
      
      <div className={styles.clientContainer_block_block_block}>
      <div className={styles.clientContainer}>
        {filteredData.map((item, index) => {
          const textColorClass = item.status === 'Approved' ? styles.yellowText : item.status === 'Pending' ? styles.darkPinkText : '';
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
          let statusStyles = {};
                
          if (item.status === "Approved") {
            statusStyles.backgroundColor = "#33DD64"

          } else if (item.status === "Declined") {
            statusStyles.backgroundColor = "red"

         }else if (item.status === "Due"){
           statusStyles.backgroundColor = "#F3B516"

         } else if (item.status === "Closed"){
         statusStyles.backgroundColor = "#6A8FE5"

          } else {
            statusStyles.backgroundColor = "Orange"
            
          }


          return (
            <div key={itemId} className={`${styles.clientinfo}`}>
              {checkboxesChecked[index] ? (
                <CheckBoxIcon
                  className={styles.checkboxIcon}
                  onClick={() => handleCheckboxChange(index)}
                />
              ) : (
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={false}
                  onChange={() => handleCheckboxChange(index)}
                />
              )}
              <div>{item.caseNumber}</div>
              <div>{item.firstName}</div>
              <div>{item.LastName}</div>
              <div>{item.applicationDate}</div>
              <div>{item.update}</div>
              <div
                style={statusStyles} className={styles.Loan__Status}
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

Clients.propTypes = {
  selectAll: PropTypes.bool.isRequired,
  onAllCheckChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  selectedStatus: PropTypes.string.isRequired,
  setSelectedStatus: PropTypes.func.isRequired,
};
