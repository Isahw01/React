import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx';
import Historia from './pages/Historia.jsx';
import Cadastro from './pages/Cadastro.jsx';
import NavBar from './components/NavBar.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/*<Forms name="Marcos" email="marcos@gmail.com"*/}
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/historia" element={ <Historia />}/>
      <Route path="/cadastro" element={ <Cadastro />}/>

      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
