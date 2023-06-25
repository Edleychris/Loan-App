
import { Routes, Route, Link } from 'react-router-dom';
// import Message from './Messages/Messages';
import Dashboard from "./Dashboard/Dashboard";
import Messages from "./Messages/Messages";
import Notifications from './Notifications/Notifications';
import Support from './Support/Support';
import Faq from './Support/Faq';
import UserMsg from './Messages/UserMsg';
import Client from './Clients/Client'
import { Settings } from './SettingsPage/Settings';
import { ProfileSettings } from './SettingsPage/ProfileSettings/ProfileSettings';
import AllUserPermission  from './SettingsPage/UserPermission/AllUserPermission'
import { Notification } from './SettingsPage/NotificationPage/Notification';
import { Security } from './SettingsPage/Security/Security';
import ParentChangePsw from './SettingsPage/PopUps/ParentChangePsw';
import Report from './Report/Report';
import Profile from './Profile/Profile';
import LoanTab from './Loans/LoanTab';


function PageContent() {
 
  return (
      <div >
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/messages" element={<Messages />} />
          <Route exact path="/notifications" element={<Notifications />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/support/Faq" element={<Faq />} />
          <Route exact path="/messages/user" element={<UserMsg />} />
          <Route exact path="/clients" element={<Client />} />
          <Route exact path='/settings' element={<Settings/>}/>
          <Route exact path='/settings/profile' element={<ProfileSettings/>}/>
          <Route exact path='/settings/userpermission' element={<AllUserPermission/>} />
          <Route exact path='/settings/notification' element={<Notification/>}/>
          <Route exact path='/settings/security' element={<Security/>}/>
          <Route exact path='/settings/security/change-password' element={<ParentChangePsw/>}/>
          <Route exact path='/reports' element={<Report/>}/>
          <Route exact path='/Profile' element={<Profile/>}/>
          <Route exact path='/loans' element={<LoanTab/>}/>
        </Routes>
      </div>
  );
}

export default PageContent;
