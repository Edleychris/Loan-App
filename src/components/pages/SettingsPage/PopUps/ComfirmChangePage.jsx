import { ComfirmationPsw } from './Comfirmationpsw.jsx';
import style from './passwordpopup.module.css'


function ComfirmChangePage() {
  return (
    <div className={style.ComfirmChangePage}>
        <ComfirmationPsw message="Password changed successfully" />
    </div>
  )
}

export default ComfirmChangePage