import {useState} from "react";
import navstyle from "./Nav.module.css";
import img1 from "../../assets/Group 7753.svg";
import img2 from "../../assets/Avatar.png";
import {AiOutlineMail} from "react-icons/ai";
import {IoIosNotificationsOutline} from "react-icons/io";
import NavOverview from "./NavOverview";
import PropTypes from 'prop-types';
import DropdownProfile from '../Dropdowns/DropdownProfile'
import DropNotify from '../Dropdowns/DropNotify'
import Dropmsg from '../Dropdowns/Dropmsg'

function Nav({selectedItem}) {
    const [open, setOpen] = useState(false);
    const [showNotify, setShowNotify] = useState(false);
    const [showMsg, setShowMsg] = useState(false);

   
    const handleProfileClick = (e) => {
        e.preventDefault();
        setOpen(!open);
        setShowNotify(false);
        setShowMsg(false);
    };

    const handleNotifyClick = (e) => {
        e.preventDefault();
        setOpen(false);
        setShowNotify(!showNotify);
        setShowMsg(false);
    };

    const handleMsgClick = (e) => {
        e.preventDefault();
        setOpen(false);
        setShowNotify(false);
        setShowMsg(!showMsg);
    };

    return (
        <div className={navstyle.navbar}>
            <div className={navstyle.nav}>
                <div className={navstyle.logo}>
                    <img src={img1}
                        alt="logo"/>
                </div>
                <div className={navstyle.links}>
                    <a href=""
                        onClick={handleMsgClick}>
                        <AiOutlineMail className={navstyle.nav_icon}/>
                    </a>
                    <a href=""
                        onClick={handleNotifyClick}>
                        <IoIosNotificationsOutline className={navstyle.nav_icon}/>
                    </a>
                    <a href="" className={navstyle.profile_pic}
                        onClick={handleProfileClick}>
                        <img src={img2}
                            alt=""/>
                    </a>
                </div>
            </div>
            {
            open && <DropdownProfile onClose={handleProfileClick}/>
        }

            {
            showNotify && <DropNotify onClose={handleNotifyClick}/>
        }

            {
            showMsg && <Dropmsg onClose={handleMsgClick}/>
        }



            <NavOverview selectedItem={selectedItem}/>
        </div>
    );
}

Nav.propTypes = {
    selectedItem: PropTypes.string.isRequired
};

export default Nav;
