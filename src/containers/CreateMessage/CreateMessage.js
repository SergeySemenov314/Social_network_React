import s from './CreateMessage.module.css';
import React from 'react';


const CreateMessage = (props) => {

  let newMessageInput = React.createRef();

  let addMessage = (evt) => {
    evt.preventDefault();
    let messageText = newMessageInput.current.value;
    alert(messageText);
    newMessageInput.current.value = '';
  }

    return (
      <>
        <form action="" className={s.form} onSubmit = {addMessage}>
            <input type="text" className={s.input} ref = {newMessageInput} />
            <button className = {s.button} ></button>
        </form>     
      </>
    );
}
  
export default CreateMessage;
  