// import { SideNav } from '../Profile/Sidenav/SideNav'
import { General } from './General/General'
import { ProfileSettings } from './ProfileSettings/ProfileSettings'
import { Notification } from './NotificationPage/Notification'
import { Security } from './Security/Security'
// import { UserPermission } from './UserPermission/UserPermission'
import { Route, Routes } from 'react-router-dom'
import AllUserPermission from './UserPermission/AllUserPermission'


export const Settings = () => {
  return (
    <div>
      <div className='container'>
        <div className='section-2 settings-page'>
          <Routes>
          <Route path='/' element={<General/>} />
          <Route path='/settings/profile' element={<ProfileSettings/>} />
          <Route path='/settings/userpermission' element={<AllUserPermission/>}/>
          <Route path='/settings/notification' element={<Notification/>}/>
          <Route path='/settings/security' element={<Security/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}