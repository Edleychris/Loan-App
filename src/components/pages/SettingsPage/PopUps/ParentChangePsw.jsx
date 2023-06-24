import { useState } from 'react'
import ComfirmChangePage from './ComfirmChangePage';
import ChangedPsw from './ChangedPsw';
import { Link } from 'react-router-dom';


function ParentChangePsw() {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSuccess = () => {
      setShowConfirmation(true);
    };
  
    return (
      <div>
       {!showConfirmation ? (
          <ChangedPsw onSuccess={handleSuccess} />
        ) : (
          <Link to='/settings/security'>
          <ComfirmChangePage />
      </Link>

        )}
       
      </div>
    );
}

export default ParentChangePsw