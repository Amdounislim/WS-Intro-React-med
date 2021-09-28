import './App.css';
import Main from './components/Main';
// import NavBar from "./components/NavBar"
// import Footer from "./components/Footer"
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
        {/* <NavBar /> */}
        <Main />
        {/* <Footer  /> */}
    </div>
  );
}

export default App;
