import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsElements = props.messagesPage.dialogs.map(el => (
    <Dialog name={el.name} id={el.id} />
  ));

  let messagesElements = props.messagesPage.messages.map(el => (
    <Message text={el.text} id={el.id} />
  ));

  let elementCreate = React.createRef();

  let onChange = e => {
    let text = e.target.value;
    props.onChange(text);
  };
  let addMessage = () => {
    props.addMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onChange}
              ref={elementCreate}
              placeholder="Enter your message"
              value={props.messagesPage.newMessageText}
            ></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
