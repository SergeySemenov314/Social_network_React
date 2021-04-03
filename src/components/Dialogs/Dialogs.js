import s from './Dialogs.module.css';
import { useParams } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';


const Dialogs = (props) => {
  let dialogsList = props.dialogsPage.dialogsList;
  let {currentUserId} = useParams();
  let userMessages = props.dialogsPage.users[currentUserId];

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
          <Messages userMessages = {userMessages} />
      </div>
       
       
      </>
    );
}
  
export default Dialogs;
  