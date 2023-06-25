import React, { useRef, useState } from "react";
// import sidepic from '../images/business guy.png'
import sidepic from "../images/business guy.png";
import logo from "../../assets/Group 7753.svg";
import style from "./resetpassword.module.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ResetSuccessPage } from "./ResetSuccessPage";

const INITINPUT = { new_password: "", confirm_password: "" };

export const ResetPassword = ({ onSuccess }) => {
  const [form, setForm] = useState(INITINPUT);
  const [errorUI, setErrorUI] = useState({});
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showResetSuccess, setShowResetSuccess] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible((prevVisible) => !prevVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevVisible) => !prevVisible);
  };

  const VALIDATION = {
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
    setShowResetSuccess(true);
    onSuccess();
  };

  return (
    <div className={style.reset_holder}>
      <div  className={style.reset_holder_section}>

      <div className={style.image}>
        <img src={sidepic} alt="sidepic" className={style.sideimg} />
      </div>
<div className={style.reset__whole}>

      <img src={logo} alt="logo" className={style.reset_logo} />

      <div className={style.reset_details}>
        {/* <div className="reset_text"> */}
          <h1 className={style.reset_text}>Reset Password</h1>
        {/* </div> */}

        <form onSubmit={handleSubmit} className={style.reseteditPopUp_change_psw}>
          <div className={style.resetpasswordWrapper}>
            <div className={style.editPasswordBlock}>
              <input
                type={newPasswordVisible ? "text" : "password"}
                id="new_password"
                value={form.new_password}
                onChange={handleChange}
                placeholder="New Password"
                className={style.reset__input}
              />
              {newPasswordVisible ? (
                <BsEye
                  onClick={toggleNewPasswordVisibility}
                  className={style.reseteditPasswordBlock__icon}
                />
              ) : (
                <BsEyeSlash
                  onClick={toggleNewPasswordVisibility}
                  className={style.reseteditPasswordBlock__icon}
                />
              )}
            </div>
            <p className={style.error}>
              {errorUI?.new_password?.length ? (
                <span style={{ color: "red" }}>
                  {errorUI.new_password[0].message}
                </span>
              ) : null}
            </p>
          </div>

          <div className={style.resetpasswordWrapper}>
            <div className={style.editPasswordBlock}>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirm_password"
                value={form.confirm_password}
                name="confirm_password"
                onChange={handleChange}
                placeholder="Confirm Password"
                className={style.reset__input}
              />
              {confirmPasswordVisible ? (
                <BsEye
                  onClick={toggleConfirmPasswordVisibility}
                  className={style.reseteditPasswordBlock__icon}
                />
              ) : (
                <BsEyeSlash
                  onClick={toggleConfirmPasswordVisibility}
                  className={style.reseteditPasswordBlock__icon}
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
            Reset Password
          </button>
          {showResetSuccess && <ResetSuccessPage />}
        </form>
      </div>
      </div>
</div>
    </div>
  );
};
