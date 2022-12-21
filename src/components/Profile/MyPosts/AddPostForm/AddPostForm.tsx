import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter your post'} component={'textarea'}
                   name={'newPostText'}/>
            <button >Add Post</button>
        </form>
    );
};

export const AddPostFormRedux = reduxForm<AddPostFormType>({
    form: 'profileAddPostForm'
})(AddPostForm)

export type AddPostFormType = {
    newPostText: string
}

export default AddPostForm;