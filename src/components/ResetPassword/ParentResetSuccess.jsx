import React from 'react'
import Login from '../Login/Login';
import { ResetPassword } from './ResetPassword';

export const ParentResetSuccess = () => {

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSuccess = () => {
      setShowConfirmation(true);
    };

  return (
    <div>
        {!showConfirmation ? (
            <Login onSuccess={handleSuccess} />
          ) : (
            <ResetPassword onSuccess={handleSuccess}/>
      )}
    </div>
  )
}
