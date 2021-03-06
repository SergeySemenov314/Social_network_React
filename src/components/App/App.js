import './reset.css';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import { Route } from 'react-router-dom';


const App = (props) => {
  return (
    <>
        <Header />
          <div className="container">
            <div className="page_layout">
              <Navbar />
              <main className = 'main'>
                <Route exact path = '/' render = { () => <Profile 
                profilePage = {props.state.profilePage} 
                addPost = {props.addPost} 
                updateNewPostText = {props.updateNewPostText} /> } />
                <Route path = '/profile' render = { () => <Profile profilePage = {props.state.profilePage} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText} /> } />
                <Route exact path = '/dialogs' render = { () => <Dialogs dialogsPage = {props.state.dialogsPage}/>} />
                <Route path = '/dialogs/:currentUserId' render = { () => <Dialogs dialogsPage = {props.state.dialogsPage}/>}  />
              </main>
            </div> 
          </div>
    </>
  );
}

export default App;
