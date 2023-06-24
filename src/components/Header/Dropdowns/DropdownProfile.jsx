import { FiX } from 'react-icons/fi';
import dropcss from './Dropdown.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function DropdownProfile({ onClose }) {
  const [visible, setVisible] = useState(true);

  const handleFixClick = () => {
    setVisible(false);
    onClose();
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={dropcss.profile_container}>
      <div className={dropcss.picon}>
        <FiX className={dropcss.fix} onClick={handleFixClick} />
      </div>
      <div className={dropcss.pro_list}>
        <ul>
          <Link to="/settings/profile">
            <li>Online</li>
          </Link>
          <Link to="/settings/profile">
            <li>On Break</li>
          </Link>
          <Link to="/settings/profile">
            <li>Offline</li>
          </Link>
          <Link to="/profile">
            <li>View Profile</li>
          </Link>
          <Link to="/settings/profile">
            <li>Profile Settings</li>
          </Link>
          <Link to="/login" style={{color: 'red'}}>
            <li>Log Out</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

DropdownProfile.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  
export default DropdownProfile;
