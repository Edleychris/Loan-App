import React, { useState } from "react";
// import './Overview.css'
// import Header from '../../Pages/Header';
// import SideNav from '../../Pages/SideNav';
import { Link } from "react-router-dom";
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import OverHeader from "./OverHeader";
import Navbar from "../../../Header/Navbar";
import Side from "../../../SideMenu/Side";
import { BiChevronRight } from "react-icons/bi";
import css from "./Overview.module.css";
import '../../../../App.css';
import Client from "../../../../assets/active borrower avatar.png";
import { ClientProfileData } from "./ClientProfileData";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GeneralInfo}  from "./GeneralInfo";
import LoanDetails from "./LoanDetails";
import RiskScore from "./RiskScore";
import Documents from "./Documents";

const OVERINPUT = {
  firstname: "",
  middlename: "",
  lastname: "",
  sex: "",
  dob: "",
  marital: "",
  email: "",
  phone: "",
  nin: "",
  address: "",
  tenancy: "",
  placeholder: "",
  placework: "",
  jobtitle: "",
  workmail: "",
  staffnum: "",
  startdate: "",
  enddate: "",
  companyadd: "",
  fullname: "",
  empstatus: "",
  guarantmail: "",
  guarantnum: "",
  guarantdob: "",
  guarantnin: "",
  guarantwork: "",
  guaworkadd: "",
};

const Overview = () => {
  const [overinput, setOverInput] = useState(OVERINPUT);
  const [activeTab, setActiveTab] = useState("allLoans");
      
        const handleTabClick = (tab) => {
          setActiveTab(tab);
        };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setOverInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log({ id, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${info.firstname} ${info.lastname} ${info.email}`);
    setOverInput(INFOINPUT);
    console.log("submitted");
  };

  return (
    <div className="App">
    <Navbar />
    <div className="sideandpage">
      <Side />
      <div className="PageContent">
        <div className={css.overviewInfoNav}>
          <Link to="/dashboard">Home</Link>
          <BiChevronRight className={css.icon} />
          <Link to="/settings">All Clients</Link>
          <BiChevronRight className={css.icon} />
          <Link to="#">Clients Overview</Link>
          <BiChevronRight className={css.icon} />
          <Link to="#">General Information</Link>
        </div>

        <div className={css.topBar}>
        <OverHeader/>
        <div className={css.BorrowerInfo}>
        <div className={css.overview_tab_container}>
      <div className={css.overview_tab_header}>
        <div className={css.overview_tab_tabs}>
          <div
            className={`${css.overview_tab_tab} ${activeTab === "allLoans" ? css.active : ""}`}
            onClick={() => handleTabClick("allLoans")}
          >
           General Information
          </div>
          <div
            className={`${css.overview_tab_tab} ${activeTab === "newApp" ? css.active : ""}`}
            onClick={() => handleTabClick("newApp")}
          >
           Loan Details
          </div>
          <div
            className={`${css.overview_tab_tab} ${activeTab === "pending" ? css.active : ""}`}
            onClick={() => handleTabClick("pending")}
          >
            Risk Score
          </div>
          <div
            className={`${css.overview_tab_tab} ${activeTab === "active" ? css.active : ""}`}
            onClick={() => handleTabClick("active")}
          >
            Documents
          </div>
        </div>
      </div>
    </div>
  

    <div>
        {activeTab === "allLoans" && <div className={css.client_tab_content}>
        <GeneralInfo/>
        </div>}
        {activeTab === "newApp" && <div className={css.client_tab_content}><LoanDetails /></div>}
        {activeTab === "pending" && <div className={css.client_tab_content}><RiskScore/></div>}
        {activeTab === "active" && <div className={css.client_tab_content}><Documents/></div>}
      </div>
      </div>
        
        </div>
      </div>
    </div>
  </div>
  );
};

export default Overview;


