import PropTypes from 'prop-types';
import { ImSwitch } from 'react-icons/im';
import { BiCircle } from 'react-icons/bi';
import style from './notifyswitc.module.css';

const NotifySwitch = ({ toggle, handleToggleChange }) => {

  const handleClick = (e) => {
    handleToggleChange(e.target.checked);
    console.log(toggle)
  };

  return (
    <div className={style.container} style={{ background: !toggle ? 'blue' : 'lightgrey'}}>
      <div
        className={`toggle-btn ${!toggle ? style.active : ''}`}
        onClick={handleClick}
      >
        <div className={style.iconContainer}>
          <BiCircle className={style.Switch_icon}/>
          {!toggle ? (
          <ImSwitch  />
        ) : (
          <div className={style.disableBlock}>
          <ImSwitch className={`${style.Switch_icon} ${style.disableIcon}`} />
          </div>
        )}

        </div>
      </div>
    </div>
  );
};

NotifySwitch.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggleChange: PropTypes.func.isRequired,
};

export default NotifySwitch;
