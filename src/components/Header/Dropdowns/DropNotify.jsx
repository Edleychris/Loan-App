import {FiX} from 'react-icons/fi';
import dropcss from './Dropdown.module.css';
import img1 from '../../../assets/Avatar (3).png'
import {IoSettingsOutline} from 'react-icons/io5';
import {IoIosCheckmark} from 'react-icons/io';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function DropNotify({onClose}) {

    const [visible, setVisible] = useState(true);

  const handleFixClick = (e) => {
    e.stopPropagation();
    setVisible(false);

    onClose();
  };
  const handleMsgClose = () => {
    setVisible(false);
  };
  if (!visible) {
    return null;
  }

    return (
        <div className={dropcss.notify_container}>
            <div className={dropcss.notify}>
                <h3>Notifications</h3>
                <FiX className={dropcss.fix}
                    onClick={handleFixClick}/>
            </div>
            <div className={dropcss.notify_links}>
                <a href="" className={dropcss.active}>
                    <li>New</li>
                </a>
                
            </div>
            <div className={dropcss.notify_notice}>
            <div className={dropcss.notify_popout}>
                <div>
                    <img src={img1}
                        alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className={dropcss.active}></span>
            </div>
            <div className={dropcss.notify_popout}>
                <div>
                    <img src={img1}
                        alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className={dropcss.active}></span>
            </div>
            <div className={dropcss.notify_popout}>
                <div>
                    <img src={img1}
                        alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className={dropcss.active}></span>
            </div>
            <div className={dropcss.notify_popout}>
                <div>
                    <img src={img1}
                        alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className={dropcss.active}></span>
            </div>
            <div className={dropcss.notify_popout}>
                <div>
                    <img src={img1}
                        alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className={dropcss.active}></span>
            </div>
            <div className={dropcss.notify_popout}>
                <div>
                    <img src={img1}
                        alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className={dropcss.active}></span>
            </div>
            <div className={dropcss.notify_popout}>
                <div>
                    <img src={img1}
                        alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className={dropcss.active}></span>
            </div>
            </div>
           

            <div className={dropcss.notify_footer}>
            <hr className={dropcss.hr}/>

                <div className={dropcss.footer1}>
                    <IoSettingsOutline className={dropcss.footerIcon}/>
                    <p>
                        <span>
                            <IoIosCheckmark className={dropcss.footerIcon}/>
                        </span>
                        Mark all as read
                    </p>
                </div>
                <div className={dropcss.footer2}>
                <Link to="/notifications" className={dropcss.button} onClick={handleMsgClose}>View all Notifications</Link>
                </div>
            </div>
        </div>
    )
}

DropNotify.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default DropNotify
