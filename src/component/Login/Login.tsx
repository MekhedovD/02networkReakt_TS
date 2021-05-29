import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControlInput} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/Validators";

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Login"
          name="login"
          component ={FormControlInput}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          component ={FormControlInput}
          validate={[required]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component ={FormControlInput}/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm);

export const Login = () => {

  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

