import styles from "./user.module.css";
import { useState } from "react";
import empty from "../../../../assets/Default_pfp.svg.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../features/userSlice";

export const User = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [role, setRole] = useState("Senior Loan Officer");
  const [photo, setPhoto] = useState("");

  // const user = useSelector(selectUser);

  // const user = {
    // firstName: 'John',
    // lastName: 'Doe',
    // photo: "url",
  // };

  return (
    
      <div className={styles.userProfile_settings_container}>
        <div className={styles.userProfile_block}>
          <div>
            {!photo ? (
              <img
                src={empty}
                alt="default photo"
                className={styles.emptyPhoto}
              />
            ) : (
              <img
                className={styles.Useravatar}
                alt="user profile"
                src={photo}
                sx={{ width: 140, height: 140 }}
              />
            )}
          </div>

          
            <div className={styles.about_user}>
              <h3>
                {firstName} 
                {lastName}
              </h3>
              <p>
                Role:
                <span className={styles.role}>{role}</span>
              </p>
              <p>
                Status:
                <span className={styles.status}>{status}</span>
              </p>
            </div>
          
        </div>
        <button className={styles.edit}>Edit</button>
      </div>
  );
};
