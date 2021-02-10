import './reset.css';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';


const App = () => {
  return (
    <>
      <Header />
        <div className="container">
          <div className="page_layout">
            <Navbar />
            <Main />
          </div> 
        </div>
    </>
  );
}

export default App;
