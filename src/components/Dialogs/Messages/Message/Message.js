import s from './Message.module.css';


const Message = (props) => {
    let userName = props.currentMessage.userName;
    let message = props.currentMessage.message;
    let userPhoto = props.currentMessage.userPhoto;

    return (
      <>
        <div className={s.message}>
            <div className={s.message__authorPhotoWrapper}>
                <img src={userPhoto} alt="" className={s.message__authorPhoto}/>
            </div>
            <div className={s.message__wrapper}>
                <p className={s.message__authorName}>{userName}</p>
                <p className={s.message__text}>{message}</p>
            </div>
        </div>            
      </>
    );
}
  
export default Message;
  