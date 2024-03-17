
import './App.scss';
import Main from './components/Main/main';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import NavBar from './components/NavBar/navbar';


function App() {
  return (
    <div className="app">
      <Header>
        <NavBar />
      </Header>

  <Main />

      <Footer />
    </div>
  );
}

export default App;
