import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Landing from "./components/LandingPage/Landing";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Confirmation from "./components/Confirmation/Confirmation";
import Token from "./components/Token/Token";
import ForgotPwd from "./components/ForgotPwd/ForgotPwd";
import { ResetPassword } from "./components/ResetPassword/ResetPassword";
import { ResetSuccessPage } from "./components/ResetPassword/ResetSuccessPage";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Notifications from "./components/pages/Notifications/Notifications";
import Messages from "./components/pages/Messages/Messages";
import Report from "./components/pages/Report/Report";
import Client from "./components/pages/Clients/Client";
import { Settings } from "./components/pages/SettingsPage/Settings";
import Support from "./components/pages/Support/Support";
import LoanTab from "./components/pages/Loans/LoanTab";
import Profile from "./components/pages/Profile/Profile";
import { ProfileSettings } from "./components/pages/SettingsPage/ProfileSettings/ProfileSettings";
import AllUserPermission from "./components/pages/SettingsPage/UserPermission/AllUserPermission";
import { Notification } from "./components/pages/SettingsPage/NotificationPage/Notification";
import { Security } from "./components/pages/SettingsPage/Security/Security";
import ParentChangePsw from "./components/pages/SettingsPage/PopUps/ParentChangePsw";
import Faq from "./components/pages/Support/Faq";
import UserMsg from "./components/pages/Messages/UserMsg";
import Overview from "./components/pages/ClientOverview/overview/Overview";
import LoanDetails from './components/pages/ClientOverview/overview/LoanDetails';
import RiskScore from './components/pages/ClientOverview/overview/RiskScore';
import Documents from './components/pages/ClientOverview/overview/Documents';
import Contract from './components/pages/ClientOverview/overview/Contract';
import { LoanOverview } from "./components/pages/LoansOverview/LoanOverview";
import {LoanLoanDetails }from './components/pages/LoansOverview/LoanLoanDetails';
import {LoanRiskScore} from './components/pages/LoansOverview/LoanRiskScore';
// import LoanDocument from './components/pages/LoansOverview/LoanDocument';
import {LoanDocument} from './components/pages/LoansOverview/LoanDocument';
import {LoansContract} from './components/pages/LoansOverview/LoansContract';
import { GeneralInfo } from "./components/pages/ClientOverview/overview/GeneralInfo";
import { LoanGeneralInfo } from "./components/pages/LoansOverview/LoanGeneralInfo";




function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState('dashboard');

  useEffect(()=>{
    localStorage.removeItem('token')
  }, [])

  const handleLogin = (token) => {
    if (token.join('').length === 4) {
      setLoggedIn(true);
      toast.success('Login successful', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });

  // Navigate to the dashboard
      navigate('/dashboard');
    }
  };

  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <Router>
      <ToastContainer />

    {loggedIn ? (
        <Route path="/dashboard" element={<Dashboard />} />
    ) : (
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/token' element={<Token handleLogin={handleLogin} />} />
        <Route path='/forgotpwd' element={<ForgotPwd />} />
        <Route path='/resetpassword' element={<ResetPassword/>} />
        <Route path='/resetsuccesspage' element={<ResetSuccessPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/settings" element={<Settings />} />
        <Route exact path="/settings/profile" element={<ProfileSettings />} />
        <Route exact path="/settings/userpermission" element={<AllUserPermission />}/>
        <Route exact path="/settings/notification" element={<Notification />} />
        <Route exact path="/settings/security" element={<Security />} />
        <Route exact path="/settings/security/change-password" element={<ParentChangePsw />}/>
        <Route path="/reports" element={<Report />} />
        <Route path="/support" element={<Support />} />
        <Route path="/loans" element={<LoanTab />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support/faq" element={<Faq />} />
        <Route path="/messages/user" element={<UserMsg />}/>
        <Route path="/clients/overview/general" element={<Overview/>}/>
        <Route path="/clients/overview/general" element={<GeneralInfo/>}/>
        <Route path='/clients/overview/loan-details' element={<LoanDetails/>} />
        <Route path='/clients/overview/risk-score' element={<RiskScore/>} />
        <Route path='/clients/overview/documents' element={<Documents />} />
        <Route path='/loans/loan-contract' element={<Contract />} />
        <Route path="/loans/overview/general" element={<LoanOverview/>}/>
        <Route path="/loans/overview/general" element={<LoanGeneralInfo/>}/>
        <Route path='/loans/overview/loan-details' element={<LoanLoanDetails/>} />
        <Route path='/loans/overview/risk-score' element={<LoanRiskScore/>} />
        <Route path='/loans/overview/documents' element={<LoanDocument />} />
        <Route path='/loans/overview/loan-contract' element={<LoansContract />} />
        
      
        
      </Routes>
    )}
    </Router>

  );
}

export default App;
