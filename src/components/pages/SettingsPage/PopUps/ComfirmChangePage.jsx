import { ComfirmationPsw } from './Comfirmationpsw.jsx';
import style from './passwordpopup.module.css'


function ComfirmChangePage() {
  return (
    <div className={style.ComfirmChangePage_container}>
    <div className={style.ComfirmChangePage}>
        <ComfirmationPsw message="Password changed successfully" />
    </div>
    </div>
  )
}

export default ComfirmChangePage