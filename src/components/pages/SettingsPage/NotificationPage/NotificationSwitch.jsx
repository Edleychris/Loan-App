import { useState } from "react";
// import { NotifySwitch } from "./NotifySwitch";
import NotifySwitch from './NotifySwitch'

function NotificationSwitch() {
  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
  }
  return (
    <div>
      <NotifySwitch toggle={toggle} handleToggleChange={handleToggleChange} />
    </div>
  )
}

export default NotificationSwitch;
