import './reset.css';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
          <div className="container">
            <div className="page_layout">
              <Navbar />
              <main className = 'main'>
                <Route exact path = '/' component = {Profile}/>
                <Route path = '/profile' component = {Profile}/>
                <Route exact path = '/dialogs' component = {Dialogs}/>
                <Route path = '/dialogs/:currentUserId' component = {Dialogs}/>
              </main>
            </div> 
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
