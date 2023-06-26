import { useState, useRef } from "react";
import style from "./Tab.module.css";
import {Pending} from "./Pending/Pending";
import {Active} from "./Active/Active";
import {DueLoans} from "./DueLoans/DueLoans";
import {Extended} from "./Extended/Extended";
import {Defaulted} from "./Defaulted/Defaulted";
import {Closed} from "./Closed/Closed";
import { Clients } from "./AllLoans/Clients";
import { Link } from "react-router-dom";
import { BiChevronRight, BiChevronDown, BiSearch } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { CSVLink } from "react-csv";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import data from '../Loans/AllLoans/Data';
import { AppClients } from "./NewApplication/AppClients";
import Navbar from "../../Header/Navbar";
import Side from "../../SideMenu/Side";
import "../../../App.css";


const LoanTab = () => {
  const [activeTab, setActiveTab] = useState("allLoans");
  const [searchQuery, setSearchQuery] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPrint, setIsOpenPrint] = useState(false);
  const [isOpenExport, setIsOpenExport] = useState(false);
  const [selectFormatExport, setSelectFormatExport] = useState(false);
  const [selectFormatPrint, setSelectFormatPrint] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedOption, setSelectedOption] = useState("");
  const applicationNumber = "Application Number";
  const fullName = "Full Name";
  const loanStatus = "Loan Status";
  const date = "Date";

  const documentTitle = `${applicationNumber} ${fullName} ${loanStatus} ${date}`;
  
  const componentRef = useRef();
  const conponentPDF = useRef();

  


  // for filter button
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  

  const handleFilterClick = (status) => {
    setFilterStatus(status);
    setIsOpen(false);
  };

  

//for filter
  const handleFilterToggle = () => {
    setIsOpen(!isOpen)
    setIsOpenExport(false);
   }

   const handleFilterClose = () => {
    setIsOpen(false)
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

//handle filter ends



  const handleSelectFormatPrintToggle = () => {
    setIsOpenFilter(!isOpenFilter)

  }

  //for export
  const handleExportToggle = () => {
    setIsOpenExport(!isOpenExport)
    setIsOpen(false);
   }
   
   const handleExportClose = () => {
    setIsOpenExport(false)
  }

  const handleSelectFormatExportToggle = () => {
    setSelectFormatExport(!selectFormatExport)
  }

  //for search input


  const convertToCSV = () => {
    const headers = Object.keys(data[0]);
    const rows = data.map((client) =>
      headers.map((header) => client[header])
    );
    return [headers, ...rows];
  };
  

  const generatePDF = useReactToPrint({
    content: ()=> conponentPDF.current,
    documentTitle: "Clientdata",
  })



  return (
    <div className="App">
      <Navbar />
      <div className="sideandpage">
        <Side />
    <div className="PageContent">

    <div className={style.loantabNav}>
    <Link to="/dashboard">Home</Link>
    <BiChevronRight className={style.icon} />
    <Link to="/loans">Loans</Link>
    <BiChevronRight className={style.icon} />
    <Link to="/all-loans">All Loans</Link>
  </div>

        {/* Search  */}
      <div className={style.main_container}>
        <div className={style.main_container__1}>
        <div className={style.details_client_client}>
        <div className={style.component1_client_block}>
        <div className={style.component1_client}>
                   <div className={style.component101}>
                   <BiSearch className={style.searchicon}/>
                    <input type="text" placeholder='Search' className={style.search} value={searchQuery} onChange={handleSearch} />
                   </div>
                    

                    {/* filter button */}

                    <div className={style.filter_dropdown}>
                    <button type='button' className={style.filter} onClick={handleFilterToggle}>{filterStatus === "All" ? "Filter" : filterStatus} 
                    <CiFilter className={style.funnel}/>

                    </button>
                    
                   {isOpen && (
                     <div className={style.select_format}>
                     <IoIosClose
                className={style.cancel2}
                onClick={handleFilterClose}
                />
                        <ul value={selectedOption}
                        className={style.select_options} onChange={handleOptionChange}> 
                             <li  className={style.options} onClick={() => handleFilterClick('All')}> All</li>
                             <li className={style.options} onClick={() => handleFilterClick('Approved')}> Approved</li>
                             <li className={style.options} onClick={() => handleFilterClick('Pending')}> Pending</li>
                             <li className={style.options} onClick={() => handleFilterClick('Closed')}> Closed</li>
                             <li className={style.options} onClick={() => handleFilterClick('Due')}> Due</li>
                             <li className={style.options} onClick={() => handleFilterClick('Declined')}> Declined</li>
                             <li className={style.options} onClick={() => handleFilterClick('Extended')}> Extended</li>
                        </ul>
                     </div>
                   )}
                    </div>
                </div>

                <div className={style.component2}>
                 <div className={style.print_btn}>
                 <ReactToPrint
                      trigger={() => (
                        <button
                        type='button' className={style.print}
                        >
                          Print
                        </button>
                      )}
                      content={() => componentRef.current}
                      documentTitle={documentTitle}
                      pageStyle="@page { size: auto; margin: 10mm; }"
                    />
                </div>
                  <div className={style.export_btn}>
                  <button type='button' className={style.export} onClick={handleExportToggle}>Export Data</button>
                    {isOpenExport && (
                      <div className={style.select_format}>
                      <IoIosClose className={style.cancel2} onClick={handleExportClose}/>
                        
                        <div className={style.format_text}>
                        <p onClick={handleSelectFormatPrintToggle}>Select Format <BiChevronDown/> </p>
                        </div>
                            {isOpenFilter && (
                              <div className={style.select_options}>
                      <p className={style.options} onClick={generatePDF}>PDF</p>
                      <p className={style.options}>Excel</p>
                      <CSVLink style={{color:"black"}} data={convertToCSV()} filename="client_data.csv">
                        <p className={style.options}>CSV</p>
                      </CSVLink>
                    </div>
                       )}
                      </div>
                   )}
                  </div>
                </div>
        </div>
       </div>
        </div>

    </div>



 <div className={style.loan_tab_container}>
      <div className={style.loan_tab_header}>
        <div className={style.loan_tab_tabs}>
          <div
            className={`${style.loan_tab_tab} ${activeTab === "allLoans" ? style.active : ""}`}
            onClick={() => handleTabClick("allLoans")}
          >
            All Loans
          </div>
          <div
            className={`${style.loan_tab_tab} ${activeTab === "newApp" ? style.active : ""}`}
            onClick={() => handleTabClick("newApp")}
          >
            New Applications
          </div>
          <div
            className={`${style.loan_tab_tab} ${activeTab === "pending" ? style.active : ""}`}
            onClick={() => handleTabClick("pending")}
          >
            Pending
          </div>
          <div
            className={`${style.loan_tab_tab} ${activeTab === "active" ? style.active : ""}`}
            onClick={() => handleTabClick("active")}
          >
            Active
          </div>
          <div
            className={`${style.loan_tab_tab} ${activeTab === "dueLoans" ? style.active : ""}`}
            onClick={() => handleTabClick("dueLoans")}
          >
            Due Loans
          </div>
          <div
            className={`${style.loan_tab_tab} ${activeTab === "extended" ? style.active : ""}`}
            onClick={() => handleTabClick("extended")}
          >
            Extended
          </div>
          <div
            className={`${style.loan_tab_tab} ${activeTab === "defaulted" ? style.active : ""}`}
            onClick={() => handleTabClick("defaulted")}
          >
            Defaulted
          </div>
          <div
            className={`${style.loan_tab_tab} ${activeTab === "closed" ? style.active : ""}`}
            onClick={() => handleTabClick("closed")}
          >
            Closed
          </div>
        </div>
      </div>
    </div>

      <div >
        {activeTab === "allLoans" && <div className={style.loan_tab_tab_content}>
        <Clients searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterStatus={filterStatus} />
        </div>}
        {activeTab === "newApp" && <div className={style.loan_tab_content}><AppClients searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterStatus={filterStatus}/></div>}
        {activeTab === "pending" && <div className={style.loan_tab_content}><Pending searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterStatus={filterStatus}/></div>}
        {activeTab === "active" && <div className={style.loan_tab_content}><Active searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterStatus={filterStatus}/></div>}
        {activeTab === "dueLoans" && <div className={style.loan_tab_content}><DueLoans searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterStatus={filterStatus}/></div>}
        {activeTab === "extended" && <div className={style.loan_tab_content}><Extended searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterStatus={filterStatus}/></div>}
        {activeTab === "defaulted" && <div className={style.loan_tab_content}><Defaulted searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterStatus={filterStatus}/> </div>}
        {activeTab === "closed" && <div className={style.loan_tab_content}><Closed searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterStatus={filterStatus}/> </div>}
      </div>
    </div>
    </div>
    </div>
   
  );
};

export default LoanTab;
