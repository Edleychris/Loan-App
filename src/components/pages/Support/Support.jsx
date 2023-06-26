import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import sup from './support.module.css';
import SupportComfirm from './SupportComfirm';
import PhoneNumber from './PhoneNumber';
import Navbar from '../../Header/Navbar';
import Side from '../../SideMenu/Side';
import '../../../App.css';

const Support = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleReportIssueClick = () => {
    setShowMessage((prevShowMessage) => !prevShowMessage);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') {
      return;
    }
    console.log('Sending message:', message);
    setMessage('');
    setShowMessage(false); // Hide the dropdown after sending the message
    setShowConfirmation(true);
  };

  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showConfirmation]);

  return (
    <div className="App">
      <Navbar />
      <div className="sideandpage">
        <Side />
        <div className="PageContent">
          <div className={sup.supportNav}>
            <Link to="/dashboard">Home</Link>
            <BiChevronRight className={sup.icon} />
            <Link to="#">Support</Link>
          </div>
          <section className={sup.support_container}>
            <div className={sup.support_cell}>
              <Link to="/support/faq">
                <h5 className={sup.support_dropdown} style={{ fontWeight: 700, fontSize: 16, padding: '10px' }}>
                  FAQ
                </h5>
              </Link>
            </div>
            <div className={sup.support_cell}>
              <div className={sup.toll_container}>
                <h5 style={{ fontWeight: 700, fontSize: 16 }}>Toll Free Call</h5>
                <p>Talk to a support officer at any time</p>
              </div>
              <div>
                <PhoneNumber number="08133822178" />
              </div>
            </div>
            <div className={sup.support_cell}>
              <div className={sup.support_cell__block}>
                <h5
                  className={sup.toll}
                  style={{ fontWeight: 700, fontSize: 16, cursor: 'pointer' }}
                  onClick={handleReportIssueClick}
                >
                  Report an Issue <span><BiChevronDown /></span>
                </h5>
                {showMessage && (
                  <div className={sup.toll__text_area}>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={handleMessageChange}
                      className={sup.message_box}
                      style={{ padding: '10px', fontSize: '20px' }}
                    ></textarea>
                    <button onClick={handleSendMessage} className={sup.message_box_button}>
                      Send
                    </button>
                  </div>
                )}
                {showConfirmation && <SupportComfirm className={sup.support__comfirm} />}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Support;
