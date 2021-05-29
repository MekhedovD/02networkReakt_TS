import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControlInput} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/Validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

type LoginPropsType = {
  // isAuth: boolean
  login: (login: string, password: string, rememberMe: boolean) => void;
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Email"
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
          type="password"
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

const Login = (props: LoginPropsType) => {

  const onSubmit = (formData: FormDataType) => {
    props.login(formData.login, formData.password, formData.rememberMe)
    // console.log(formData)
  }

  // if (props.) {
  //   return <Redirect to={"/profile"}/>
  // }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);
