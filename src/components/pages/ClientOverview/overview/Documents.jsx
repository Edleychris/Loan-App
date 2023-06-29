import React from 'react'
// import './Overview.css'
// import './Documents.css'
import { Link } from 'react-router-dom';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import OverHeader from './OverHeader';
// import Navbar from '../../../Header/Navbar';
import { BiChevronRight } from 'react-icons/bi';
import css from './Documents.module.css'

const Documents = () => {
  return (
    <div>
        {/* <div className='App'>
            <Navbar/>
            <div className='pageandside'>
                <Side/>
                <div className='pageContent'>
                   
                <div className={css.documentNav}>
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

        <div className={css.documen_body}>
            <div className={css.documen_divs}>
                <p>Loan Agreement</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Drivers' License</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Birth Certificate</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Passport</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Bank Statement</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Tenancy Agreement</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Utility Bill</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Colateral Documents</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
        </div>
    </div>
  )
}

export default Documents;