import { Checkbox } from '@mui/material';
import css from './userpermission.module.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export const UserPermission =  ({ selectAll, onAllCheckChange }) => {
  const handleAllCheckChange = () => {
    onAllCheckChange(!selectAll);
  };

  return (
    <div >
    

 <div className={css.clients_setting_block}>
       <div className={css.clients_setting_data}>
       {selectAll ? (
          <Checkbox className={css.checkbox_setting} onClick={handleAllCheckChange}/>
        ) : (
          <input type="checkbox" checked={false} onChange={handleAllCheckChange} className={css.checkbox_setting2}/>
        )}
          <h3>First Name</h3>
          <h3>Last Name</h3>
          <h3>Email Address</h3>
          <h3>Role</h3>
          <h3>Status</h3>
          <h3>Action</h3>
       </div>
    </div>

    </div>
    

   
  )
}
UserPermission.propTypes = {
  selectAll: PropTypes.bool.isRequired,
  onAllCheckChange: PropTypes.func.isRequired,
};