import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";
import {HeaderContainerType} from "./HeaderContainer";

const  Header = (props: HeaderContainerType) => {
  return (
    <header className={s.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRN5IdkZGOBECwRAqpYx6HH_Pr4Wy164El1Cg&usqp=CAU" alt=""/>
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div>
          : <NavLink to={"/login"}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;