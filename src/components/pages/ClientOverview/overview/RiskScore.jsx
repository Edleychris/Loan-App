import React from 'react'
// import './Overview.css'
// import './RiskScore.css'
// import Header from '../../Pages/Header';
// import SideNav from '../../Pages/SideNav';
import { Link } from 'react-router-dom';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import OverHeader from './OverHeader';
import chart from '../../../../assets/chart.svg'
import Navbar from '../../../Header/Navbar';
import Side from '../../../SideMenu/Side';
import css from './RiskScore.module.css'
import { BiChevronRight } from 'react-icons/bi';

const RiskScore = () => {
  return (
    <div>
        {/* <div className='App'>
            <Navbar/>
            <div className='sideandpage'>
                <Side/>
                <div className='pageContent'>

                <div className={css.riskScoreNav}>
                <Link to="/dashboard">Home</Link>
                <BiChevronRight className={css.icon} />
                <Link to="/settings">Settings</Link>
                <BiChevronRight className={css.icon} />
                <Link to="#">General</Link>
              </div>

                    <OverHeader />

                    <div className='over-headlinks'>
                        <Link to='/clients/overview/general' className='overhead-general'>General Information</Link>
                        <Link to='/clients/overview/loan-details'>Loan Details</Link>
                        <Link to='/clients/overview/risk-score'>Risk Score</Link>
                        <Link to='/clients/overview/documents'>Documents</Link>
                    </div>
                </div>
            </div>
        </div> */}

        <div className={css.riskscore}>
            <div className={css.riskscore_top}>
                <div className={css.riskscore_det}>
                    <div className={css.riskscore_detblack}>
                        <p>Risk Score:</p>
                        <p>Risk Level:</p>
                        <p>System Decision:</p>
                        <p>Odds (Good:Bad):</p>
                        <p>Default Probability:</p>
                    </div>
                    
                    <div className={css.riskscore_detgreen}>
                        <p>700/800</p>
                        <p>Low</p>
                        <p className={css.riskscoredet_right}>Approve</p>
                        <p>80:20</p>
                        <p className={css.riskscoredet_right}>15%</p>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" />
                    <div className={css.riskchart_grade}>
                        <span>700</span>
                        <p>Good</p>
                    </div>
                </div>
            </div>
            <hr className={css.riskscore_line}/>
            <div className={css.riskscore_down}>
                <p>Decision Comments :</p>
                <div className={css.riskscore_deci}>
                    <p><span>1.</span> System recommends making a standard client check.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RiskScore;