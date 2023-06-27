import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
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
// import { Settings } from "./components/pages/SettingsPage/Settings";
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
import { General } from "./components/pages/SettingsPage/General/General";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Dashboard');

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

    }
  };
  

  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <Router>
      <ToastContainer />

    {loggedIn ? (
      <Routes>
        <Route path="/dashboard" element={<Dashboard selectedItem={selectedItem}  onItemSelected={handleItemSelected}/>} />
        <Route
          exact
          path="/settings/security/change-password"
          element={<ParentChangePsw />}
        />
        <Route path="/reports" element={<Report />} />
        <Route path="/support" element={<Support />} />
        <Route path="/loans" element={<LoanTab />} />
        <Route path="/profile" element={<Profile selectedItem={selectedItem}  onItemSelected={handleItemSelected}/>} />
        <Route path="/support/faq" element={<Faq />} />
        <Route path="/messages/user" element={<UserMsg />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/settings" element={<General />} />
        <Route path="/settings/profile" element={<ProfileSettings />} />
        <Route
          exact
          path="/settings/userpermission"
          element={<AllUserPermission />}
        />
        <Route exact path="/settings/notification" element={<Notification />} />
        <Route exact path="/settings/security" element={<Security />} />
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/token' element={<Token handleLogin={handleLogin} />} />
        <Route path='/forgotpwd' element={<ForgotPwd />} />
        <Route path='/resetpassword' element={<ResetPassword/>} />
        <Route path='/resetsuccesspage' element={<ResetSuccessPage/>} />

        </Routes>
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
        <Route path="/settings" element={<General />} />
        <Route path="/settings/profile" element={<ProfileSettings />} />
        <Route
          exact
          path="/settings/userpermission"
          element={<AllUserPermission />}
        />
        <Route exact path="/settings/notification" element={<Notification />} />
        <Route exact path="/settings/security" element={<Security />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/support" element={<Support />} />
        <Route path="/loans" element={<LoanTab />} />
        <Route path="/profile" element={<Profile selectedItem={selectedItem}  onItemSelected={handleItemSelected}/>} />
        <Route path="/support/faq" element={<Faq />} />
        <Route path="/messages/user" element={<UserMsg />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/notifications" element={<Notifications />} /> */}
        {/* <Route path="/messages" element={<Messages />} /> */}
        {/* <Route path="/clients" element={<Client />} /> */}
        {/* <Route path="/settings" element={<General />} /> */}
        {/* <Route path="/settings/profile" element={<ProfileSettings />} /> */}
        {/* <Route
          exact
          path="/settings/userpermission"
          element={<AllUserPermission />}
        /> */}
        <Route exact path="/settings/notification" element={<Notification />} />
        <Route exact path="/settings/security" element={<Security />} />
        {/* <Route exact path="/settings/profile" element={<ProfileSettings />} />
        <Route
          exact
          path="/settings/userpermission"
          element={<AllUserPermission />}
        />
        <Route exact path="/settings/notification" element={<Notification />} />
        <Route exact path="/settings/security" element={<Security />} />
        <Route
          exact
          path="/settings/security/change-password"
          element={<ParentChangePsw />}
        /> */}
       
      </Routes>
    )}
    </Router>

  );
}

export default App;
