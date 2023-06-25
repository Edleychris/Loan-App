import { useEffect, useState, useRef } from "react";
import css from "./client.module.css";
import { ClientInfo } from "./ClientData";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { CSVLink } from "react-csv";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import { BiChevronRight } from "react-icons/bi";
import { CiFilter, CiSearch } from "react-icons/ci";
import Navbar from "../../Header/Navbar";
import Side from "../../SideMenu/Side";
import "../../../App.css";

const Client = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenExport, setIsOpenExport] = useState(false);
  const [selectFormatExport, setSelectFormatExport] = useState(false);
  const [selectFormatPrint, setSelectFormatPrint] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const applicationNumber = "Application Number";
  const fullName = "Full Name";
  const loanStatus = "Loan Status";
  const date = "Date";
  const documentTitle = `${applicationNumber} ${fullName} ${loanStatus} ${date}`;

  const componentRef = useRef();
  const conponentPDF = useRef();

  useEffect(() => {
    setFilteredData(ClientInfo);
  }, [searchQuery]);

  //for filter
  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
    setIsOpenExport(false);
  };

  const handleFilterClose = () => {
    setIsOpen(false);
  };

  //for filter options
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFilterClick = (status) => {
    setFilterStatus(status);
    setIsOpen(false);
  };

  //for export
  const handleExportToggle = () => {
    setIsOpenExport(!isOpenExport);
    setIsOpen(false);
  };

  const handleExportClose = () => {
    setIsOpenExport(false);
  };
  const handleSelectFormatPrintToggle = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const handleSelectFormatExportToggle = () => {
    setSelectFormatExport(!selectFormatExport);
  };

  //for search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSearch(e.target.value);
  };

  //for checkbox change
  const handleCheckboxChange = (e, clientId) => {
    const updatedData = filteredClients.map((client) => {
      if (client.id === clientId) {
        console.log(client);
        return { ...client, checked: e.target.checked };
      }
      console.log(client.id);
      return client;
    });
    setFilteredData(updatedData);
  };

  const handleAllCheckChange = (e) => {
    const updatedData = filteredClients.map((client) => ({
      ...client,
      checked: e.target.checked,
    }));
    setFilteredData(updatedData);
  };

  const convertToCSV = () => {
    const headers = Object.keys(filteredData[0]);
    const rows = filteredData.map((client) =>
      headers.map((header) => client[header])
    );
    return [headers, ...rows];
  };

  const filteredClients =
    filterStatus === "All"
      ? ClientInfo
      : ClientInfo.filter((client) => client.LoanStatus === filterStatus);

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Clientdata",
    // onAfterPrint:()=>alert('Page saved in PDF')
  });

  return (
    <div className="App">
      <Navbar />
      <div className="sideandpage">
        <Side />
        <div className="PageContent">
          <div className={css.clientNav}>
            <Link to="/dashboard">Home</Link>
            <BiChevronRight className={css.icon} />
            <Link to="/Clients">Clients</Link>
          </div>
          <div>
            <div className={css.details_client_client}>
              <div className={css.component1_client_block}>
                <div className={css.component1_client}>
                  <div className={css.component101}>
                    <CiSearch className={css.searchicon} />
                    <input
                      type="text"
                      placeholder="Search"
                      className={css.search}
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>

                  <div className={css.filter_dropdown}>
                    <div className={css.filterButtonArea}>
                      <button
                        className={css.filter}
                        onClick={handleFilterToggle}
                      >
                        Filter
                        <CiFilter className={css.funnel} />
                      </button>
                    </div>
                    {isOpen && (
                      <div className={css.select_format}>
                        <IoIosClose
                          className={css.cancel2}
                          onClick={handleFilterClose}
                        />
                        <ul
                          value={selectedOption}
                          className={css.select_options}
                          onChange={handleOptionChange}
                        >
                          <li
                            className={css.options}
                            onClick={() => handleFilterClick("All")}
                          >
                            All
                          </li>
                          <li
                            className={css.options}
                            onClick={() => handleFilterClick("Approved")}
                          >
                            Approved
                          </li>
                          <li
                            className={css.options}
                            onClick={() => handleFilterClick("Pending Review")}
                          >
                            Pending
                          </li>
                          <li
                            className={css.options}
                            onClick={() => handleFilterClick("Declined")}
                          >
                            Declined
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className={css.component2}>
                  <div className={css.print_btn}>
                    <ReactToPrint
                      trigger={() => (
                        <button
                          type="button"
                          className={css.print}
                          // onClick={handlePrintToggle}
                        >
                          Print
                        </button>
                      )}
                      // content={() => componentRef.current}
                      // documentTitle= " Client Data"
                      content={() => componentRef.current}
                      documentTitle={documentTitle}
                      pageStyle="@page { size: auto; margin: 10mm; }"
                    />
                  </div>
                  <div className={css.export_btn}>
                    <button
                      type="button"
                      className={css.export}
                      onClick={handleExportToggle}
                    >
                      Export Data
                    </button>
                    {isOpenExport && (
                      <div className={css.select_format}>
                        <IoIosClose
                          className={css.cancel2}
                          onClick={handleExportClose}
                        />
                        <div className={css.format_text}>
                          <p onClick={handleSelectFormatPrintToggle}>
                            Select Format <BiChevronDown />{" "}
                          </p>
                        </div>
                        {isOpenFilter && (
                          <div className={css.select_options}>
                            <p className={css.options} onClick={generatePDF}>
                              PDF
                            </p>
                            <p className={css.options}>Excel</p>
                            <CSVLink
                              style={{ color: "black" }}
                              data={convertToCSV()}
                              filename="client_data.csv"
                            >
                              <p className={css.options}>CSV</p>
                            </CSVLink>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={css.clientsblock} ref={conponentPDF}>
                <div className={css.clientsdata} ref={componentRef}>
                  <input
                    type="checkbox"
                    name="checkall"
                    id="check"
                    onChange={handleAllCheckChange}
                    className={css.check}
                  />
                  <h3>Application Number</h3>
                  <h3>Full Name</h3>
                  <h3>Loan Status</h3>
                  <h3>Date</h3>
                </div>

                <section className={css.client_table}>
                  <div
                    className={css.ClientInfo_Block_Container}
                    ref={componentRef}
                  >
                    {filteredClients.map((client) => {
                      if (
                        searchQuery &&
                        !(
                          client.fullName
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()) ||
                          client.applicationNumber
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                        )
                      ) {
                        return null;
                      }

                      let statusStyle = {};

                      if (client.LoanStatus === "Approved") {
                        statusStyle.backgroundColor = "#33DD64";
                      } else if (client.LoanStatus === "Declined") {
                        statusStyle.backgroundColor = "red";
                      } else if (client.LoanStatus === "Due") {
                        statusStyle.backgroundColor = "#F3B516";
                      } else if (client.LoanStatus === "Closed") {
                        statusStyle.backgroundColor = "#6A8FE5";
                      } else {
                        statusStyle.backgroundColor = "Orange";
                      }

                      return (
                        <div key={client.id} className={css.clientinfo__client}>
                          {/* <div> */}
                          <input
                            type="checkbox"
                            name="check"
                            id="check"
                            className={css.check}
                            checked={client.checked}
                            onChange={(e) => handleCheckboxChange(e, client.id)}
                          />
                          <Link to="/clientprofile/overview">
                            <div className={css.clientinfo2}>
                              {client.applicationNumber}
                            </div>

                            <div>{client.fullName}</div>

                            <div
                              className={css.actualStatus}
                              style={statusStyle}
                            >
                              {client.LoanStatus}
                            </div>

                            <div>{client.Date}</div>
                          </Link>
                        </div>
                      );
                    })}
                    {/* </div> */}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
