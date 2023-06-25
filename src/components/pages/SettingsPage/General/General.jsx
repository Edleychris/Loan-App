// import React, {useEffect, useState} from 'react'
import { BiChevronRight } from "react-icons/bi";
import style from "./general.module.css";
import { Link } from "react-router-dom";

export const General = () => {

  return (
    <div>
      <div className={style.generalNav}>
        <Link to="/dashboard">Home</Link>
        <BiChevronRight className={style.icon} />
        <Link to="/settings">Settings</Link>
        <BiChevronRight className={style.icon} />
        <Link to="#">General</Link>
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
