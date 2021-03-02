import { NavLink } from 'react-router-dom';
import logo from '../../images/Header/logo.png';
import s from './Header.module.css';

const Header = () => {
    return (
      <>
      <header className= {s.bg}>
          <div className="container">
              <div className= {s.contentBox}>
                    <div className= {s.logo__container}>
                        <NavLink to="/" className={s.logo__link}>
                            <img src={logo} alt="" className= {s.logo__img}/>
                        </NavLink>
                    </div>   
                    <p className={s.networkName}>Социальная сеть</p>
              </div>        
          </div>
      </header>
      </>
    );
}
  
export default Header;