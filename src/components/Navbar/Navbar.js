import s from './Navbar.module.css';

import profileIcon from '../../images/Sidebar/icons/profile.png';
import musicIcon from '../../images/Sidebar/icons/music.png';
import newsIcon from '../../images/Sidebar/icons/news.png';
import messagesIcon from '../../images/Sidebar/icons/messages.png';
import settingsIcon from '../../images/Sidebar/icons/settings.png';

const Navbar = () => {
    return (
      <>
        <aside className = {s.navbar}>
            <nav className= {s.nav}>
                <ul className= {s.list}>
                    <li className={s.item}>
                        <a href="/" className={s.item_link}>
                            <img src={profileIcon} alt="" className={s.item_icon}/>
                            <span className={s.item_title}>Профиль</span>
                        </a>
                    </li>     
                    <li className={s.item}>
                        <a href="/" className={s.item_link}>
                            <img src={messagesIcon} alt="" className={s.item_icon}/>
                            <span className={s.item_title}>Сообщения</span>
                        </a>
                    </li> 
                    <li className={s.item}>
                        <a href="/" className={s.item_link}>
                            <img src={newsIcon} alt="" className={s.item_icon}/>
                            <span className={s.item_title}>Новости</span>
                        </a>
                    </li> 
                    <li className={s.item}>
                        <a href="/" className={s.item_link}>
                            <img src={musicIcon} alt="" className={s.item_icon}/>
                            <span className={s.item_title}>Музыка</span>
                        </a>
                    </li> 
                    <li className={s.item}>
                        <a href="/" className={s.item_link}>
                            <img src={settingsIcon} alt="" className={s.item_icon}/>
                            <span className={s.item_title}>Настройки</span>
                        </a>
                    </li>  
                </ul>
            </nav>
        </aside>
      </>
    );
}
  
export default Navbar;
  