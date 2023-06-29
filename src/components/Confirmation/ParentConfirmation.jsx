import React from 'react'
import Confirmation from './Confirmation'
import Signup from '../Signup/Signup'

export const ParentConfirmation = () => {

    const [showConfirmationPage, setShowConfirmationPage] = useState(false);

    const handleSuccess = () => {
        setShowConfirmationPage(true);
      };

  return (
    <div>
    {showConfirmationPage ? (<Confirmation onSuccess={handleSuccess}/>) : (
        <Signup/>
    )}
    </div>
  )
}
