import React from 'react'

function Logout() {
    const handleLogout = () => {

    }
    const handleCancel =() => {
        
    }
  return (
    <div>
        <h3>Are you sure you want to logout?</h3>
        <div>
            <button onClick={handleLogout}>Yes</button>
            <button onClick={handleCancel}>No</button>
        </div>
    </div>
  )
}

export default Logout