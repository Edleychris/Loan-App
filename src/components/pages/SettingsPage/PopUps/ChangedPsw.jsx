import { useState } from "react";
import style from "./changedpsw.module.css";
import PropTypes from "prop-types";
import { BsEyeSlash, BsEye } from "react-icons/bs";
// import PropTypes from 'prop-types';

const INITINPUT = { old_password: "", new_password: "", confirm_password: "" };

const ChangedPsw = ({ onSuccess }) => {
  const [form, setForm] = useState(INITINPUT);
  const [errorUI, setErrorUI] = useState({});
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible((prevVisible) => !prevVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevVisible) => !prevVisible);
  };

  const VALIDATION = {
    old_password: [
      {
        isValid: (value) => !!value,
        message: "Is required.",
      },
      {
        isValid: (value) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
        message: "Incorrect old password",
      },
    ],
    new_password: [
      {
        isValid: (value) => !!value,
        message: "Is required.",
      },
      {
        isValid: (value) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
        message:
          "Requires 6+ characters, Uppercase, Lowercase letters, numeric digit (0-9) and a special character.",
      },
    ],
    confirm_password: [
      {
        isValid: (value) => !!value,
        message: "Is required.",
      },
      {
        isValid: (value) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
        message:
          "Requires 6+ characters, Uppercase, Lowercase letters, numeric digit (0-9) and a special character.",
      },
    ],
  };

  const getErrorFields = (form) =>
    Object.keys(form).reduce((acc, key) => {
      if (!VALIDATION[key]) return acc;

      const errorsPerField = VALIDATION[key]

        .map((validation) => ({
          isValid: validation.isValid(form[key]),
          message: validation.message,
        }))

        .filter((errorPerField) => !errorPerField.isValid);

      return { ...acc, [key]: errorsPerField };
    }, {});

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (errorUI) setErrorUI(null);
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log({ id, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorFields = getErrorFields(form);
    const hasErrors = Object.values(errorFields).flat().length > 0;
    if (hasErrors) return setErrorUI({ ...errorFields });
    if (form.new_password !== form.confirm_password) {
      setErrorUI((prevErrors) => ({
        ...prevErrors,
        confirm_password: [{ message: "Must match the new password." }],
      }));
      return;
    }

    setForm(INITINPUT);
    console.log("Form submitted");
    onSuccess();
  };
  // className={style.editPopUp_change_psw}
  return (
    <div>
      <div>
        <div >
          <div className={style.editPopUp_form}>
          <div className={style.editPopUp_header_text}>
          <h4>Change Password</h4>
           </div>
            <form
              onSubmit={handleSubmit}
              className={style.editPopUp_header}
            >
            
              <div className={style.passwordWrapper}>
                <div className={style.editPasswordBlock_diff}>
                  <input
                    type="password"
                    id="old_password"
                    onChange={handleChange}
                    value={form.old_password}
                    placeholder="Old Password"
                  />
                </div>
                <div className={style.error}>
                  {errorUI?.old_password?.length ? (
                    <span style={{ color: "red" }}>
                      {errorUI.old_password[0].message}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className={style.passwordWrapper}>
                <div className={style.editPasswordBlock}>
                  <input
                    type={newPasswordVisible ? "text" : "password"}
                    id="new_password"
                    value={form.new_password}
                    onChange={handleChange}
                    placeholder="New Password"
                  />
                  {newPasswordVisible ? (
                    <BsEye
                      onClick={toggleNewPasswordVisibility}
                      className={style.editPasswordBlock__icon}
                    />
                  ) : (
                    <BsEyeSlash
                      onClick={toggleNewPasswordVisibility}
                      className={style.editPasswordBlock__icon}
                    />
                  )}
                </div>
                <div className={style.error}>
                  {errorUI?.new_password?.length ? (
                    <span style={{ color: "red" }}>
                      {errorUI.new_password[0].message}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className={style.passwordWrapper}>
                <div className={style.editPasswordBlock}>
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    id="confirm_password"
                    value={form.confirm_password}
                    name="confirm_password"
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                  {confirmPasswordVisible ? (
                    <BsEye
                      onClick={toggleConfirmPasswordVisibility}
                      className={style.editPasswordBlock__icon}
                    />
                  ) : (
                    <BsEyeSlash
                      onClick={toggleConfirmPasswordVisibility}
                      className={style.editPasswordBlock__icon}
                    />
                  )}
                </div>
                <div className={style.error}>
                  {errorUI?.confirm_password?.length ? (
                    <span style={{ color: "red" }}>
                      {errorUI.confirm_password[0].message}
                    </span>
                  ) : null}
                </div>
              </div>
              <div></div>
              <button type="submit" className={style.changePasswordBtn}>
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ChangedPsw.propTypes = {
  onClose: PropTypes.func.isRequired,
};
ChangedPsw.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default ChangedPsw;
