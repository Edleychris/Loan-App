import React, { useState } from 'react'
import { CiSquareChevDown } from 'react-icons/ci'
import style from './loanloandetails.module.css'


const LDINIT = {loanamt: '', purpose: '', repay: '', outstanding: '', institution: '', lender: '',
    revenue: '', expenses: '', annualrev: '', monthprofit: '', average: '', npm: '', accname: '', accnumber: '', bankname: '',
    colatype: '', colaname: '', modelno: '', purchase: '', marketvalue: '', modelcolor: ''}
    
export const LoanLoanDetails = () => {
    const [ldinput, setLdinput] = useState(LDINIT);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setLdinput((prevState) => ({
            ...prevState,
            [id]: value
    }));
    console.log({id, value});
    }

    const [drop1, setDrop1] = useState(null);
    const [drop2, setDrop2] = useState(null);
    const [drop3, setDrop3] = useState(null);

    const toggleDropVisibility1 = () => {
        setDrop1((prevVisisble) => !prevVisisble);
    };
    const toggleDropVisibility2 = () => {
        setDrop2((prevVisisble) => !prevVisisble);
    };
    const toggleDropVisibility3 = () => {
        setDrop3((prevVisisble) => !prevVisisble);
    };

  return (
    <div>
        
        <div className={style.ld_body}>
            <div className={style.ld_divs}>
                <p className={`${style.ld_headers} ${style.header1}`}>Loan Application History</p>
                <span className={style.ld_span} onClick={toggleDropVisibility1}>
                    <CiSquareChevDown style={{width: '15px', height: '15px'}}/>
                </span>
            </div>
            {drop1 && (
                <div className={style.Iddrop_div1}>
                    <div className={style.Iddrop_head}>
                        <span>Case Number</span>
                        <span>Loan Amount</span>
                        <span>Balance</span>
                        <span>Next Payment Date</span>
                        <span>Payoff Progress</span>
                    </div>

                    <div className={style.Iddrop_body}>
                        <div className={style.Iddrop_body1}>
                            <span className={style.Iddrop_num}>RRZU9D6BVG</span>
                            <span>500,000</span>
                            <span>750,000</span>
                            <span>750,000</span>
                            <div className={style.lddrop_black}>
                                <span>90%</span>
                            </div>
                        </div>
                        <div className={style.Iddrop_body1}>
                            <span className={style.Iddrop_num}>RRZU9D6BVG</span>
                            <span>200,000</span>
                            <span>N/A</span>
                            <span>N/A</span>
                            <div className={style.lddrop_green}>
                                <span>100%</span>
                            </div>
                        </div>
                        <div className={style.Iddrop_body1}>
                            <span className={style.Iddrop_num}>RRZU9D6BVG</span>
                            <span>500,000</span>
                            <span>750,000</span>
                            <span>750,000</span>
                            <div className={style.lddrop_green}>
                                <span>100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div div className={style.ld_divs}>
                <p className={`${style.ld_headers} ${style.header2}`}>Loan Application Information</p>
                <span className={style.ld_span} onClick={toggleDropVisibility2}>
                   <CiSquareChevDown style={{width: '15px', height: '15px'}}/>
                </span>
            </div>
            {drop2 && (
                <form className={style.lddrop_div2}>
                    <div className={style.lddrop_div2top}>
                        <h1>Loan Information</h1>
                        <div className={style.lddrop_loaninfo}>
                            <div className={style.lddrop_loandata}>
                                <p className={style.lddrop_loan_p }>Loan Amount</p>
                                <input type="text" id='loanamt' value={ldinput.loanamt} onChange={handleChange} placeholder='NGN550,000'/>
                            </div>
                            <div className={style.lddrop_loandata}>
                                <p className={style.lddrop_loan_p }>Purpose of the Loan</p>
                                <input type="text" id='purpose' value={ldinput.purpose} onChange={handleChange} placeholder='Business'/>
                            </div>
                            <div className={style.lddrop_loandata}>
                                <p className={style.lddrop_loan_p }>Repayment Method</p>
                                <input type="text" id='repay' value={ldinput.repay} onChange={handleChange} placeholder='Monthly'/>
                            </div>
                            <div className={style.lddrop_loandata}>
                                <p className={style.lddrop_loan_pl }>Do you have any outstanding loan to be repaid?</p>
                                <input type="text" id='outstanding' value={ldinput.outstanding} onChange={handleChange} placeholder='Yes'/>
                            </div>
                            <div className={style.lddrop_loandata}>
                                <p className={style.lddrop_loan_pl }>Is the loan with our institution?</p>
                                <input type="text" id='institution' value={ldinput.institution} onChange={handleChange} placeholder='No'/>
                            </div>
                            <div className={style.lddrop_loandata}>
                                <p className={style.lddrop_loan_pl }>If No, please state the name of the lender</p>
                                <input type="text" id='lender' value={ldinput.lender} onChange={handleChange} placeholder='paga'/>
                            </div>
                        </div>
                    </div>

                    <div className={style.lddrop_div2down}>
                        <h1>Current Financial Information</h1>
                        <div className={style.lddrop_fininfo_form}>
                            <div className={style.lddrop_findiv}>
                                <div className={style.lddrop_gross}>
                                    <label htmlFor="revenue">Gross Monthly Revenue</label>
                                    <input type="text" id='revenue' value={ldinput.revenue} onChange={handleChange} placeholder='NGN450,000'/>
                                </div>
                                <div className={style.lddrop_gross}>
                                    <label htmlFor="expenses">Gross Monthly Expenses</label>
                                    <input type="text" id='expenses' value={ldinput.expenses} onChange={handleChange} placeholder='NGN300,000'/>
                                </div>
                                <div className={style.lddrop_gross}>
                                    <label htmlFor="annual">Gross Annual Revenue</label>
                                    <input type="text" id='annualrev' value={ldinput.annualrev} onChange={handleChange} placeholder='NGN5,400,000'/>
                                </div>
                            </div>
                            <div className={style.lddrop_findiv}>
                                <div className={style.lddrop_gross}>
                                    <label htmlFor="month">Average Monthly Profit</label>
                                    <input type="text" id='monthprofit' value={ldinput.monthprofit} onChange={handleChange} placeholder='NGN450,000'/>
                                </div>
                                <div className={style.lddrop_gross}>
                                    <label htmlFor="profit">Average Monthly Revenue</label>
                                    <input type="text" id='average' value={ldinput.average} onChange={handleChange} placeholder='NGN320,000'/>
                                </div>
                                <div className={style.lddrop_gross}>
                                    <label htmlFor="net">Net Monthly Profit</label>
                                    <input type="text" id='nmp' value={ldinput.npm} onChange={handleChange} placeholder='NGN420,000'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.lddrop_div2down}>
                        <h1>Bank Information</h1>
                            <div className={style.lddrop_findiv}>
                                <div className={style.lddrop_gross}>
                                    <label htmlFor="aname">Account Name</label>
                                    <input type="text" id='accname' value={ldinput.accname} onChange={handleChange} placeholder='Chioma Kahlay'/>
                                </div>
                                <div className={style.lddrop_gross}>
                                    <label htmlFor="anumber">Account Number</label>
                                    <input type="number" id='accnumber' value={ldinput.accnumber} onChange={handleChange} placeholder='0011993459'/>
                                </div>
                                <div className={style.lddrop_gross}>
                                    <label htmlFor="bankname">Bank Name</label>
                                    <input type="text" id='bankname' value={ldinput.bankname} onChange={handleChange} placeholder='Fidelity Bank'/>
                                </div>
                            </div>
                    </div>
                </form>
            )}
            <div div className={style.ld_divs}>
                <p className={`${style.ld_headers} ${style.header3}`}>Collateral Information</p>
                <span className={style.ld_span} onClick={toggleDropVisibility3}>
                    <CiSquareChevDown style={{width: '15px', height: '15px'}}/>
                </span>
            </div>
            {drop3 && (
                <form className={style.lddrop_div3down}>
                    <div className={style.lddrop_fininfo_form}>
                        <div className={style.lddrop_findiv}>
                            <div className={style.lddrop_gross}>
                                <label htmlFor="cola-type">Collateral Type</label>
                                <input type="text" id='colatype' value={ldinput.colatype} onChange={handleChange} placeholder='Vehicle'/>
                            </div>
                            <div className={style.lddrop_gross}>
                                <label htmlFor="cola-name">Collateral Name</label>
                                <input type="text" id='colaname' value={ldinput.colaname} onChange={handleChange} placeholder='Toyota Corolla'/>
                            </div>
                            <div className={style.lddrop_gross}>
                                <label htmlFor="model-no">Model No.</label>
                                <input type="text" id='modelno' value={ldinput.modelno} onChange={handleChange} placeholder='E210'/>
                            </div>
                        </div>

                        <div className={style.lddrop_findiv}>
                            <div className={style.lddrop_gross}>
                                <label htmlFor="purchase">Year of Purchase</label>
                                <input type="date" id='purchase' value={ldinput.purchase} onChange={handleChange} placeholder='2019'/>
                            </div>
                            <div className={style.lddrop_gross}>
                                <label htmlFor="market">Current Market Value</label>
                                <input type="text" id='marketvalue' value={ldinput.marketvalue} onChange={handleChange} placeholder='NGN3.5M'/>
                            </div>
                            <div className={style.lddrop_gross}>
                                <label htmlFor="modelcolor">Model Color</label>
                                <input type="text" id='modelcolor' value={ldinput.modelcolor} onChange={handleChange} placeholder='Silver'/>
                            </div>
                        </div>
                    </div>
                    <button className={style.lddrop_div3down_btn}>Proof of Ownership</button>
                </form>
            )}
        </div>
    </div>
  )
}
