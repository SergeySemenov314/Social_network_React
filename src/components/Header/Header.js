import logo from '../../images/Header/logo.png';
import s from './Header.module.css';

const Header = () => {
    return (
      <>
      <header className= {s.bg}>
          <div className="container">
              <div className= {s.conten_box}>
                    <div className= {s.logo_container}>
                        <a href="/" className={s.logo_link}>
                            <img src={logo} alt="" className= {s.logo_img}/>
                        </a>
                    </div>   
              </div>        
          </div>
      </header>
      </>
    );
}
  
export default Header;