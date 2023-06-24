import React, { useState } from 'react'
import style from './forminput.module.css'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {label, onChange, errorMessage, id, ...inputProps} = props;

  const handleFocus = (e)=>{
    setFocused(true)
  }

  return (
    <div className={style.formdiv}>
        <label >{label}</label>
        <input 
          className={style.input}
          {...inputProps} 
          onChange={onChange} 
          onBlur={handleFocus} 
          onWheel={(e)=> e.target.blur()}
          focused={focused.toString()}
          />
        <p className={style.error}>{errorMessage}</p>
    
        {/* <div>
           <label htmlFor="username">Username</label>
            <input type="text" className={style.input} id='username' placeholder='John' ref={userRef} required value={email} onChange={(e)=> setEmail(e.target.value)} />
           </div>


           <div>
           <label htmlFor="email">Email</label>
            <input type="email" className={style.input} id='email' placeholder='johndoe@gmail.com' ref={emailRef} required value={email} onChange={(e)=> setEmail(e.target.value)} />
           </div>

           <div >
           <label htmlFor="password">Password</label>
            <input type={passwordType} className={style.input} id='password' placeholder='.......' required ref={passwordRef} value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type='button' onClick={showPwd} className={style.show}>Show</button>
           </div>

           <div >
           <label htmlFor="confirmpassword">Confirm Password</label>
            <input type={passwordType} className={style.input} id='confirmpassword' placeholder='.......' required ref={confirmpasswordRef}/>
            <button type='button' onClick={showPwd} className={style.show}>Show</button>
           </div> */}
    </div>
  )
}

export default FormInput