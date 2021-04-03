import s from './CreatePost.module.css';
import React from 'react';


const CreatePost = (props) => {

  let newPostTextarea = React.createRef();

  let addPost = (evt) => {
    evt.preventDefault();
    props.addPost();
  }

  let onPostChange = ()=> {
    let newPostText = newPostTextarea.current.value;
    props.updateNewPostText(newPostText);
    newPostTextarea.current.value = props.newPostText;
  } 

    return (
      <>
        <div className='pageBlock'>
          <form action="" className = {s.form} onSubmit = {addPost} >
            <textarea name="" id="" cols="30" rows="10" placeholder = 'Что нового?' className = {s.textarea} ref = {newPostTextarea} value = {props.newPostText} onChange = {onPostChange}></textarea>
            <div className={s.btnWrapper}>
              <button className = {s.btn}>Отправить</button>
            </div>           
          </form>       
        </div> 
      </>
    );
}
  
export default CreatePost;
  