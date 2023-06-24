import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import css from './search.module.css'
import data from "../AllLoans/Data";

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPrint, setIsOpenPrint] = useState(false);
  const [isOpenExport, setIsOpenExport] = useState(false);
  const [selectFormatExport, setSelectFormatExport] = useState(false);
  const [selectFormatPrint, setSelectFormatPrint] = useState(false);


  //updates on searchQuery Change
  useEffect(()=>{
    setFilteredData(data)
  }, [searchQuery])

const handleAllCheckChange = (e) => {
  const updatedData = filteredData.map((client) => ({
    ...client,
    checked: e.target.checked,
  }));
  setFilteredData(updatedData);
}


//for filter
  const handleFilterToggle = () => {
    setIsOpen(!isOpen)
   }

   const handleFilterClose = () => {
    setIsOpen(false)
  }

  //for filter options
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
  }

  //handle filter starts
    const handleFilter = () => {
   
      if (searchQuery === 'Approved' || searchQuery === 'Pending' || searchQuery === 'Declined') {
        let filteredResults = data.filter((client) =>
            client.LoanStatus.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
        setFilteredData(filteredResults);
    }
    
    // setFilteredData(filteredResults)
   
}

const handleFilterDate = () => {
  if (searchQuery) {
      
    let filteredResults = data.filter((client)=> 
    client.Date.includes(searchQuery) 
    );

      setFilteredData(filteredResults)
  }
}
//handle filter ends

//for print
    const handlePrintToggle = () => {
    setIsOpenPrint(!isOpenPrint)
    setIsOpenExport(false)
   }
   
   const handlePrintClose = () => {
    setIsOpenPrint(false)
  }

  const handleSelectFormatPrintToggle = () => {
    setSelectFormatPrint(!selectFormatPrint)
  }

  //for export
  const handleExportToggle = () => {
    setIsOpenExport(!isOpenExport)
    setIsOpenPrint(false)
   }
   
   const handleExportClose = () => {
    setIsOpenExport(false)
  }

  const handleSelectFormatExportToggle = () => {
    setSelectFormatExport(!selectFormatExport)
  }

  //for search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    
    <div className={css.main_container}>
       <div className={css.details_client_client}>
        <div className={css.component1_client_block}>
        <div className={css.component1_client}>
                   <div className={css.component101}>
                   <i className={`bi bi-search ${css.searchicon}`}></i>
                    <input type="text" placeholder='Muhammadu Buhari' className={css.search} value={searchQuery} onChange={handleSearchChange}/>
                   </div>
                    
                    <div className={css.filter_dropdown}>
                    <button type='button' className={css.filter} onClick={handleFilterToggle}>Filter </button>
                    <i className={`bi bi-funnel ${css.funnel}`}></i>
                   {isOpen && (
                     <div className={css.dropdown_menu}>
                     <i className={`bi bi-x ${css.cancel}`} onClick={handleFilterClose}></i>
                        <ul value={selectedOption} onChange={handleOptionChange}> 
                             <li className={css.filter_items} onClick={handleFilter}>by Loan Status</li>
                             <li className={css.filter_items} onClick={handleFilterDate}>by Date</li>

                        </ul>
                     </div>
                   )}
                    </div>
                </div>

                <div className={css.component2}>
                 <div className={css.print_btn}>
                 <button type='button' className={css.print} onClick={handlePrintToggle}>Print</button>
                    {isOpenPrint && (
                     <div className={css.select_format}>
                     <i className={`bi bi-x ${css.cancel2}`} onClick={handlePrintClose}></i>
                       <div className={css.format_text}>
                        <p onClick={handleSelectFormatExportToggle}>Select Format <i className={`bi bi-chevron-down`}></i></p>
                        </div>
                       
                        {selectFormatExport && (
                        <div className={css.select_options}>
                          <p className={css.options}>PDF</p>
                          <p className={css.options}>Excel</p>
                          <p className={css.options}>CSV</p>
                        </div>
                       )}
                       {/* </div> */}
                     </div>
                   )}
                </div>
                  <div className={css.export_btn}>
                  <button type='button' className={css.export} onClick={handleExportToggle}>Export Data</button>
                    {isOpenExport && (
                      <div className={css.select_format}>
                        <i className={`bi bi-x ${css.cancel2}`} onClick={handleExportClose}></i>
                        <div className={css.format_text}>
                        <p onClick={handleSelectFormatPrintToggle}>Select Format <i className={`bi bi-chevron-down`}></i> </p>
                        </div>
                            {selectFormatPrint && (
                              <div className={css.select_options}>
                                <p className={css.options}>PDF</p>
                                <p className={css.options}>Excel</p>
                                <p className={css.options}>CSV</p>
                              </div>
                       )}
                      </div>
                   )}
                  </div>
                </div>
        </div>
       </div>
    </div>
  );
}

Search.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Search;
