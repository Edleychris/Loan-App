import notify from './notifications.module.css';
import data from './notifydata.jsx';
import borrower from '../../../assets/active borrower avatar.png';
import { Link } from 'react-router-dom';
import {IoSettingsOutline} from 'react-icons/io5'
import {BsDot} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { BiChevronRight } from "react-icons/bi";


const Notifications = () => {
  return (
    <div>
      <div className={notify.notify_overview}>
      <Link to='/dashboard'>Home</Link>
          <BiChevronRight className={notify.icon}/>
          <Link to='#'>All Notification</Link>
      </div>
 <section className={notify.notif_container}>
      <div className={notify.notif_header}>
        <div className={notify.notify_header_div}>
          <p className={notify.header_chats}>Clients</p>
          <span className={notify.number}>8</span>
        </div>
        <div className={notify.notify__setting__icon}>
        <Link to='/settings/notifications'>
        <IoSettingsOutline />
        </Link>
        </div>
        
      </div>

      <div className={notify.content2}>
        {data.map((client) => (
          <div className={notify.inner_content2} key={client.id}>
            <div className={notify.content_inner1}>
              <div className={notify.notif_flex}>
                <img src={borrower} alt="active borrower" className={notify.borrower} />

                <div className={notify.notif_column}>
                  <p className={notify.name_action}>
                    <b>{client.name}</b> made a new <b>{client.action}</b>
                  </p>
                  <div className={notify.time_type}>
                    <p>2 hrs. ago</p>
                    <BsDot className={notify.greydot} />
                    <p>Business Loan</p>
                  </div>
                </div>
              </div>
            </div>
            < RxDotFilled className={notify.bluedot} />
          </div>
        ))}
      </div>
    </section>
    </div>
   
  );
};

export default Notifications;
