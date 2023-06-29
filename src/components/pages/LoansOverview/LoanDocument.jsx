import React from 'react'
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import css from './loandocuments.module.css'

export const LoanDocument = () => {
    return (
       <div className={css.documen_body}>
            <div className={css.documen_divs}>
                <p>Loan Agreement</p>
                <Link to='/loans/overview/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Drivers' License</p>
                <Link to='/loans/overview/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Birth Certificate</p>
                <Link to='/loans/overview/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Passport</p>
                <Link to='/loans/overview/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Bank Statement</p>
                <Link to='/loans/overview/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Tenancy Agreement</p>
                <Link to='/loans/overview/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Utility Bill</p>
                <Link to='/loans/overview/loan-contract'>Open File</Link>
            </div>
            <div className={css.documen_divs}>
                <p>Colateral Documents</p>
                <Link to='/loans/overview/loan-contract'>Open File</Link>
            </div>
        </div>
   
    )
}
