import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validator";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your post'} component={Textarea}
                       name={'newPostText'} validate={[requiredField, maxLength50]}/>
            </div>

            <div>
                <button>Add Post</button>
            </div>

        </form>
    );
};


export type AddPostFormType = {
    newPostText: string
}

export default reduxForm<AddPostFormType>({
    form: 'profileAddPostForm'
})(AddPostForm)