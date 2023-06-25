import styles from "./Report.module.css";
import PChart from "./PChart";
import { RiArrowDropDownLine } from "react-icons/ri";
import PGraph from "./PGraph";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import ReportData from "./ReportData";
import "../../../App.css";
import Navbar from '../../Header/Navbar';
import Side from "../../SideMenu/Side";


function Report() {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 100; i--) {
    years.push(i);
  }

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];


  return (
    <div className="App">
      <Navbar />
      <div className="sideandpage">
        <Side />
    <div className="PageContent">
      <div className={styles.reportsNav}>
        <Link to="/dashboard">Home</Link>
        <BiChevronRight className={styles.icon} />
        <Link to="/loans">Loans</Link>
        <BiChevronRight className={styles.icon} />
        <Link to="#">Reports</Link>
      </div>

      {ReportData.map((val) => {
        return (
          <div className={styles.report}>
            <div className={styles.activity}>
              <div className={styles.year}>
                <span className={styles.activities}>Activities</span>
                <select id="year" className={styles.year__year}>
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={year} value={year} className={styles.dropdown}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.top}>
                <div className={styles.totalnum}>
                  <span className={styles.tota}>
                    Total number of loan application
                  </span>
                  <span className={styles.tota}>
                    Total number of all loan application
                  </span>
                </div>

                <div className={styles.totalnum}>
                  <span className={styles.nu}>{val.tNumLoanApp}</span>
                  <span className={styles.nu}>{val.tValLoanApp}</span>
                </div>
              </div>

              <div className={styles.chart}>
                <PChart />
                <span>
                  Active Disbursement <p>{val.active}</p>
                </span>
              </div>
              <div className={styles.default}>
                <div className={styles.df}>
                  <span className={styles.dot}></span>
                  <p>Defaults</p>
                </div>

                <div className={styles.footer}>
                  <div className={styles.footertotal}>
                    <span className={styles.total}>
                      Total number of default
                    </span>
                    <span className={styles.total}>
                      Total number of defaulting payment
                    </span>
                    <span className={styles.total}>
                      Total number of disbursed loans
                    </span>
                    <span className={styles.total}>
                      Total number of loan repayment loans
                    </span>
                  </div>
                  <div className={styles.numnum}>
                    <span className={styles.num}>{val.tNumDefault}</span>
                    <span className={styles.num}>{val.tValDefaultingPay}</span>
                    <span className={styles.num}>{val.tValDisbursedLoan}</span>
                    <span className={styles.num}>{val.tValRepaymentLoan}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <Activities />
        <Payment /> */}

            <div className={styles.payment}>
              <div className={styles.month}>
                <span>Completed Payments</span>
                {/* <span>Month <RiArrowDropDownLine className={styles.drop}/></span> */}
                {/* <label htmlFor="month">Month:</label> */}
                <select id="month" className={styles.month__month}>
                  <option value="">Month</option>
                  {months.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.second}>
                <div className={styles.second1}>
                  <span>{val.tValCompletedPay}</span>
                  <span>Total number of completed payments</span>
                </div>
                <div className={styles.second1}>
                  <span>{val.tAmtCompletedPay}</span>
                  <span>Total amount of completed payments</span>
                </div>
              </div>

              <div className={styles.approved}>
                <span>Approved vs Pending</span>
                <div className={styles.pgraph}>
                  <PGraph />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
    </div>
  );
}

export default Report;
