import s from './Main.module.css';
import Profile from '../Profile/Profile';

const Main = () => {
    return (
      <>
        <main className = {s.main}>
          <Profile />
         
        </main>
      </>
    );
}
  
export default Main;