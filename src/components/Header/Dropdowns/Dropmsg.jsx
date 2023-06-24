import img1 from '../../../assets/Avatar (3).png'
import { FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';
import dropcss from './Dropdown.module.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Dropmsg({ onClose }) {
    const [showMsg, setShowMsg] = useState(true);

    const handleClose = () => {
        setShowMsg(false);
        onClose(false);
      };
    
      const handleMsgClose = () => {
        setShowMsg(false);
      };
    
      if (!showMsg) {
        return null; // Return null when showMsg is false to hide the component
      }
      
  return (
    <div className={dropcss.msg_container} style={{ display: showMsg ? 'block' : 'none' }}>
        <div className={dropcss.msg}>
            <h3>Messages</h3>
            <FiX className={dropcss.fix} onClick={handleClose}/>
        </div>
        <div className={dropcss.msg_links}>
            <a href="" className={dropcss.active}>
                <li>New messages</li>
            </a>
        </div>
        <div className={dropcss.msg_popout}>
           
            <div>
                <img src={img1} alt="" />
            </div>
            <div className={dropcss.newMsg}>
              <p className={dropcss.sender}>Jane Doe</p>
              <p className={dropcss.unreadMsg}>Hello, please you have a chan... <span>1hr</span></p>
            </div>
            
            <span className={dropcss.active}></span>
        </div>
        <div className={dropcss.msg_popout}>
            <div>
                <img src={img1} alt="" />
            </div>
            <div className={dropcss.newMsg}>
              <p className={dropcss.sender}>Jane Doe</p>
              <p className={dropcss.unreadMsg}>Hello, please you have a chan... <span>1hr</span></p>
            </div>
            <span className={dropcss.active}></span>
        </div>
        <div className={dropcss.msg_popout}>
            <div>
                <img src={img1} alt="" />
            </div>
            <div className={dropcss.newMsg}>
              <p className={dropcss.sender}>Jane Doe</p>
              <p className={dropcss.unreadMsg}>Hello, please you have a chan... <span>1hr</span></p>
            </div>
            <span className={dropcss.active}></span>
        </div>
        <div className={dropcss.msg_popout}>
            <div>
                <img src={img1} alt="" />
            </div>
            <div className={dropcss.newMsg}>
            <p className={dropcss.sender}>Jane Doe</p>
            <p className={dropcss.readMsg}>Hello, please you have a chan... <span>1hr</span></p>
          </div>
            <span className={dropcss.inactive}></span>
        </div>
        <div className={dropcss.msg_popout}>
            <div>
                <img src={img1} alt="" />
            </div>
            <div className={dropcss.newMsg}>
              <p className={dropcss.sender}>Jane Doe</p>
              <p className={dropcss.readMsg}>Hello, please you have a chan... <span>1hr</span></p>
            </div>
            <span className={dropcss.inactive}></span>
        </div>
        <div className={dropcss.msg_footer}>
            <hr className={dropcss.hr}/>
            <div className={dropcss.btn}>
                <Link to="/messages" className={dropcss.button} onClick={handleMsgClose}>View all Messages</Link>
            </div>
        </div>
    </div>
  )
}

Dropmsg.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

export default Dropmsg