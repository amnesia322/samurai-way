import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'}
                       placeholder={'Enter your message'}/></div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
};

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({
    form: 'dialogAddMessageForm'
}) (AddMessageForm)

export type AddMessageFormType = {
    newMessageBody: string
}

export default AddMessageForm;