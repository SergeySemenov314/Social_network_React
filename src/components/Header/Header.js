import logo from '../../images/Header/logo.png';
import s from './Header.module.css';

const Header = () => {
    return (
      <>
      <header className= {s.bg}>
          <div className="container">
              <div className= {s.contentBox}>
                    <div className= {s.logo__container}>
                        <a href="/" className={s.logo__link}>
                            <img src={logo} alt="" className= {s.logo__img}/>
                        </a>
                    </div>   
              </div>        
          </div>
      </header>
      </>
    );
}
  
export default Header;