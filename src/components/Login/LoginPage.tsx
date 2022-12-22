import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {minLengthCreator, requiredField} from "../../utils/validators/validator";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {login} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import s from './LoginPage.module.css'

const minLength5 = minLengthCreator(5)

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                       type={'password'} validate={[requiredField, minLength5]}/>
            </div>
            <div>
                Remember Me
                <Field type="checkbox" name={'rememberMe'} component={Input} />
            </div>
           {props.error && <span className={s.error}>{props.error} </span>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const onSubmit = (formData: LoginFormDataType) => {
        dispatch(login(formData))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export type LoginFormDataType = {
    login: string | null
    password: string | null
    rememberMe?: boolean | null
    captcha?: boolean | null
}


export default LoginForm;