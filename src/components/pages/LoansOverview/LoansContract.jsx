import React, { useRef} from 'react'
import { Link } from 'react-router-dom';
import document from '../../../assets/document.png'
// import Side from '../../../SideMenu/Side';
import { BiChevronRight } from 'react-icons/bi';
import css from './loancontract.module.css'
import ReactToPrint from "react-to-print";
import Navbar from '../../Header/Navbar';
import Side from '../../SideMenu/Side';

export const LoansContract = () => {
 
  const componentRef = useRef();
  const documentTitle = 'Loan Contract';
  
  return (
    <div className="App">
    <Navbar/>
    <div className="sideandpage">
      <Side/>
      <div className="PageContent">
        <div className={css.contractNav}>
          <Link to="/dashboard">Home</Link>
          <BiChevronRight className={css.icon} />
          <Link to="/settings">Loans</Link>
          <BiChevronRight className={css.icon} />
          <Link to="#">Loan Contract</Link>
        </div>

        <div className={css.contractBlock}>
        <h1 className={css.contract_h1}>Loan Contract</h1>
        <div className={css.contractBody}>
            <div className={css.contractBtns}>
                <h1></h1>
                <div className={css.contractBtn}>
                    <ReactToPrint
                      trigger={() => (
                        <button
                          type="button"
                          className={css.contractPrint}
                        >
                          Print
                        </button>
                      )}
                      content={() => componentRef.current}
                      documentTitle={documentTitle}
                      pageStyle="@page { size: auto; margin: 10mm; }"
                    />

                    <button className={css.contractEdit}>Edit Document</button>
                </div>
                <Link to='/clients/overview/documents' className={css.contractRet}>Return to Document</Link>
            </div>
            <div className={css.contractLetter}>
                <img ref={componentRef} src={document} alt="document" />
            </div>
        </div>
        </div>

        
      </div>
    </div>
  </div>
  )
}
  

