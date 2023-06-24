import css from './allclients.module.css';
import CheckBoxIcon from '@mui/material/Checkbox'
import PropTypes from 'prop-types';

export const AllClients = ({ selectAll, onAllCheckChange }) => {
  const handleAllCheckChange = (e) => {
    const checked = e.target.checked;
    onAllCheckChange(checked);
  };

  return (
    <div className={css.clientsblock}>
      <h2>All Clients</h2>
      <div className={css.clientsdata}>
      {selectAll ? (
          <CheckBoxIcon className={css.checkbox} onClick={handleAllCheckChange} />
        ) : (
          <input type="checkbox" checked={false} onChange={handleAllCheckChange} className={css.checkbox2}/>
        )}
        <h3>Case Number</h3>
        <h3>First Name</h3>
        <h3>Last Name</h3>
        <h3>Application Date</h3>
        <h3>Recent Update</h3>
        <h3>Loan Status</h3>
      </div>
    </div>
  );
};
AllClients.propTypes = {
  selectAll: PropTypes.bool.isRequired,
  onAllCheckChange: PropTypes.func.isRequired,
};
