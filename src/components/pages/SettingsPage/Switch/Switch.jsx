import { useState } from "react";
import style from './switch.module.css';
  
const Switch = () => {

    const [toggle, setToggle] = useState(false);

    const handleChange =(e)=>{
        setToggle(e.target.checked);
        setToggle(!toggle)
        console.log(!toggle)
    }

  return (
    <div className= {style.container}>
      <div className= {style.toggle_switch}>
        <input type="checkbox" className={style.checkbox} name='label' id='label' />
        <label onClick={handleChange} className={style.label} htmlFor='label'>
          <span className={style.inner} />
          <span className={style.switch} />
        </label>
      </div>
    </div>
  );
};
  
export default Switch;