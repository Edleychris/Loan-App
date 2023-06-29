import React from "react";
import avatar from '../../../assets/client.png';
import phone from '../../../assets/phone.svg';
import enve from '../../../assets/envelope.svg';
import style from './loanoverheader.module.css';

export const LoanOverHeader = () => {
  return (
    <div className={style.overGeneral}>
      <div className={style.overgenLeft}>
        <img src={avatar} alt="profile pic" />
        <div className={style.overgenDet}>
          <h1 className={style.overgenName}>Chioma Kahlay</h1>
          <div className={style.overgenId}>
            <span>Case ID;</span>
            <span>RRZU9D6BVG </span>
          </div>
          <div className={style.overgenAdd}>
            <span>
              <img
                src={phone}
                alt="p"
                style={{ width: "20px", height: "20px" }}
              />
              09055555558
            </span>
            <span>
              <img
                src={enve}
                alt="e"
                style={{ width: "20px", height: "20px" }}
              />
              paschalcodes@gmail.com
            </span>
          </div>
          <div className={style.overgenOfficer}>
            <span className={style.overgenOffice}>Loan Officer:</span>
            <span>John Doe</span>
          </div>
        </div>
      </div>
      <div className={style.overgenRight}>
        <div className={style.overgenTopActive}>
          <span className={style.overgenSpans}>Loan Type:</span>
          <span>Personal Loan</span>
        </div>
        <div className={style.overgenTopActiveStatus}>
          <span className={style.overgenSpans}>Loan Status</span>
          <div className={style.overgenActiveDot}>
            <span>Active</span>
            <span className={style.activeDot}></span>
          </div>
        </div>
        <div className={style.btnsBlock}>
        <button className={style.approve}>Approve</button>
        <button className={style.decline}>Decline</button>
        </div>
      </div>
    </div>
  );
};
