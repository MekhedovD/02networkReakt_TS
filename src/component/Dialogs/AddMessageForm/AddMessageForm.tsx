import {maxLengthCreator, required} from "../../../utils/Validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControlTextarea} from "../../common/FormsControls/FormsControls";
import {MessageFormDataType} from "../Dialogs";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={FormControlTextarea}
          validate={[required, maxLength50]}
          name="messageText"
          placeholder="Enter your message" />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

export const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: "dialogAddMessageForm"})(AddMessageForm);