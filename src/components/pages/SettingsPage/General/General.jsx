// import React, {useEffect, useState} from 'react'
import { BiChevronRight } from "react-icons/bi";
import style from "./general.module.css";
import { Link } from "react-router-dom";

export const General = () => {
  // const getLanguage = async () => {
  //     try {
  //         const response = await axios.get(`'https://google-translate1.p.rapidapi.com/language/translate/v2/languages'`);
  //         setData(response.data);
  //         setError(null);
  //     } catch (err) {
  //         setError(err.message);
  //         setData(null);
  //     } finally {
  //         setLoading(false);
  //     }
  // };

  // getLanguage();

  return (
    <div>
      <div className={style.generalNav}>
        <Link to="/dashboard">Home</Link>
        <BiChevronRight className={style.icon} />
        <Link to="/settings">Settings</Link>
        <BiChevronRight className={style.icon} />
        <Link to="#">General</Link>
      </div>
      <div className={style.settings_btn_container}>
        <div className={style.settings_btn}>
          <Link to="/settings" className={style.activeSetting}>
            General
          </Link>
          <Link to="/settings/profile" style={{ color: "#717070" }}>
            Profile
          </Link>
          <Link to="/settings/userpermission" style={{ color: "#717070" }}>
            User Permissions
          </Link>
          <Link to="/settings/notification" style={{ color: "#717070" }}>
            Notifications
          </Link>
          <Link to="/settings/security" style={{ color: "#717070" }}>
            Security
          </Link>
        </div>
      </div>

      <div className={style.general_set_Block_Block1}>
        <div className={style.general_set_Block}>
          <p>Updates</p>
        </div>

        <div className={style.general_set_Block}>
          <p>Legal & Regulatory</p>
        </div>
      </div>
    </div>
  );
};
