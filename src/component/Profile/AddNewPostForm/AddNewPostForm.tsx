import {maxLengthCreator, required} from "../../../utils/Validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControlTextarea} from "../../common/FormsControls/FormsControls";
// import {PostFormDateType} from "../MyPost/MyPost";

const maxLength10 = maxLengthCreator(10);

export type PostFormDateType = {
  newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<PostFormDateType>> = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={FormControlTextarea}
          name="newPostText"
          validate={[required, maxLength10]}
          placeholder={"Post message"}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export const AddNewPostFormRedux = reduxForm<PostFormDateType>({form: "profileAddPostForm"})(AddNewPostForm);
