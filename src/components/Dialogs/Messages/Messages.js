import Message from './Message/Message';
import CreateMessage from '../../../containers/CreateMessage/CreateMessage';
import s from './Messages.module.css';


const Messages = (props) => {
    let userMessages = props.userMessages;

    return (
            <div className = {s.messagesWrapper}>
                {userMessages
                ?  <>
                        <div className={s.messages}>
                            { userMessages.map((item, index) =>
                                <Message currentMessage = {item} key  = {index} />
                            )}
                        </div>         
                        <CreateMessage />
                </>
                : <div className={s.notificationContainer}>
                    <p className = {s.notificationText}>Выберите диалог для отображения</p>
                </div>
                }     
            </div>  
    );
}
  
export default Messages;
  