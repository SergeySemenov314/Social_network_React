import s from './Dialogs.module.css';
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = () => {
  let dialogsList = data.dialogsList;
  let {currentUserId} = useParams();
  let messages = data.messages.users[currentUserId];

    return (
      <>
      <div className={s.dialogs}>  
          <div className={s.dialogsContainer}>
            <h3 className ={s.dialogsHeading}>Диалоги</h3>       
            <ul className={s.dialogsList}>
              {dialogsList.map((item) =>
                <DialogItem userId = {item.userId} userName ={item.userName} key = {item.userId} />
              )}
            </ul>      
          </div>
          {/* <div className={s.messages__inner}></div> */}
          
           
            <div className={s.messages + ' pageBlock'}>
              {messages
              ?   messages.map((item, index) =>
                    <Message currentMessage = {item} key  = {index} />
                  )
              : <div className={s.notificationContainer}>
                  <p className = {s.notificationText}>Выберите диалог для отображения</p>
                </div>
            }       
       
            </div>

      </div>
       
       
      </>
    );
}
  
export default Dialogs;
  