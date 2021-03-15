import s from './CreatePost.module.css';
import React from 'react';


const CreatePost = () => {

  let newPostTextarea = React.createRef();

  let addPost = (evt) => {
    evt.preventDefault();
    let postText = newPostTextarea.current.value;
    alert(postText);
    newPostTextarea.current.value = '';
  }

    return (
      <>
        <div className='pageBlock'>
          <form action="" className = {s.form} onSubmit = {addPost} >
            <textarea name="" id="" cols="30" rows="10" placeholder = 'Что нового?' className = {s.textarea} ref = {newPostTextarea} ></textarea>
            <div className={s.btnWrapper}>
              <button className = {s.btn}>Отправить</button>
            </div>           
          </form>       
        </div> 
      </>
    );
}
  
export default CreatePost;
  