import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const dispatch = useDispatch();

    const onSubmit = (formData: LoginFormDataType) => {
        //dispatch(getUserLoginTC(formData))
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export type LoginFormDataType = {
    login: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}



export default LoginForm;