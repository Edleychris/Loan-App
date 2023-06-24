import "./App.css";
import { useState, useEffect } from "react";
import Navbar from './components/Header/Navbar'
import Side from "./components/SideMenu/Side";
import PageContent from "./components/pages/PageContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Landing from './components/LandingPage/Landing'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Confirmation from './components/Confirmation/Confirmation'
import Token from './components/Token/Token'
import ForgotPwd from './components/ForgotPwd/ForgotPwd'
import {ResetPassword} from './components/ResetPassword/ResetPassword'
import { ResetSuccessPage } from "./components/ResetPassword/ResetSuccessPage";
import 'react-toastify/dist/ReactToastify.css';

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
          
      <div className="App">
      <Navbar/>
      <div className="sideandpage">
        <Side  />
        <PageContent />
      </div>
    </div>

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
          </Routes>

        )}
     
      
    </Router>
  );
}

export default App;
