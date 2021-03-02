import s from './Navbar.module.css';

import profileIcon from '../../images/Sidebar/icons/profile.png';
import musicIcon from '../../images/Sidebar/icons/music.png';
import newsIcon from '../../images/Sidebar/icons/news.png';
import messagesIcon from '../../images/Sidebar/icons/messages.png';
import settingsIcon from '../../images/Sidebar/icons/settings.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
        <aside className = {s.navbar}>
            <nav className= {s.nav}>
                <ul className= {s.list}>
                    <li className={s.item}>
                        <NavLink to="/profile" className={s.item__link}>
                            <img src={profileIcon} alt="" className={s.item__icon}/>
                            <span className={s.item__title}>Профиль</span>
                        </NavLink>
                    </li>     
                    <li className={s.item}>
                        <NavLink to="/dialogs" className={s.item__link}>
                            <img src={messagesIcon} alt="" className={s.item__icon}/>
                            <span className={s.item__title}>Сообщения</span>
                        </NavLink>
                    </li> 
                    <li className={s.item}>
                        <a href="/" className={s.item__link}>
                            <img src={newsIcon} alt="" className={s.item__icon}/>
                            <span className={s.item__title}>Новости</span>
                        </a>
                    </li> 
                    <li className={s.item}>
                        <NavLink to="/" className={s.item__link}>
                            <img src={musicIcon} alt="" className={s.item__icon}/>
                            <span className={s.item__title}>Музыка</span>
                        </NavLink>
                    </li> 
                    <li className={s.item}>
                        <NavLink to="/" className={s.item__link}>
                            <img src={settingsIcon} alt="" className={s.item__icon}/>
                            <span className={s.item__title}>Настройки</span>
                        </NavLink>
                    </li>  
                </ul>
            </nav>
        </aside>
      </>
    );
}
  
export default Navbar;
  