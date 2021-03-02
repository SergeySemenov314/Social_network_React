import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/'+ props.userId;
    let userName =  props.userName;

    return (
      <>
            <li className={s.dialogItem}>
                  <NavLink to = {path} className = {s.dialogItemLink} activeClassName ={s.dialogItemLink__active}>{userName}</NavLink>
            </li>
      </>
    );
}
  
export default DialogItem;
  