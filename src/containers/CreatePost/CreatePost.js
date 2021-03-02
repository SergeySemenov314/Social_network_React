import s from './CreatePost.module.css';


const CreatePost = () => {
    return (
      <>
        <div className='pageBlock'>
          <form action="" className = {s.form}>
            <textarea name="" id="" cols="30" rows="10" placeholder = 'Что нового?' className = {s.textarea}></textarea>
            <div className={s.btnWrapper}>
              <button className = {s.btn}>Отправить</button>
            </div>           
          </form>       
        </div> 
      </>
    );
}
  
export default CreatePost;
  