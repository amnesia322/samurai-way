import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validator";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'}
                       placeholder={'Enter your message'} validate={[requiredField, maxLength50]}/></div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
};


export type AddMessageFormType = {
    newMessageBody: string
}

export default reduxForm<AddMessageFormType>({
    form: 'dialogAddMessageForm'
}) (AddMessageForm);