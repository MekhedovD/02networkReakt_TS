import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css"
import {v1} from "uuid";

type DialogsItemType = {
  name: string
  _id: string
}

const DialogItem = (props: DialogsItemType) => {
  let path = "/dialogs/" + props._id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;