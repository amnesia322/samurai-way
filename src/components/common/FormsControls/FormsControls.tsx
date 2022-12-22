import {WrappedFieldProps} from "redux-form/lib/Field";
import s from './FormsControls.module.css'


export const FormControl: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div>
            <div>
                {props.children}
            </div>
            {hasError && <span className={s.errorText}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

/*

export const Textarea: React.FC<WrappedFieldProps>  = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div>
            <div>
                <textarea {...input} {...props}
                          className={`${s.textarea} ${hasError && s.error}`}/>
            </div>
            {hasError && <span className={s.errorText}>{meta.error}</span>}
        </div>
    )
}
*/
