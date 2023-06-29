import React from 'react';
import chart from '../../../assets/chart.svg';
import css from './loanriskscore.module.css';

export const LoanRiskScore = () => {
  return (
    <div>
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
