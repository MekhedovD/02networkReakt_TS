import React, { InputHTMLAttributes } from "react";
import {WrappedFieldProps} from "redux-form";
import s from "./FormsControls.module.css";


export const FormsControlElementCreator = (Element: string) => ({input, meta, ...props}: WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>) => {

  const hasError = meta.touched && meta.error;

  return (
    <>
    <Element className={hasError ? s.error : ""} {...input} {...props}/>
      {hasError && <span className={s.spanError}>{meta.error}</span>}
    </>
  )
}

export const FormControlTextarea = FormsControlElementCreator("textarea");
export const FormControlInput = FormsControlElementCreator("input");

// }
