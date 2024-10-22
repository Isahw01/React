import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponents from './components/MyComponent.jsx';

import donuts from './assets/donuts.jpg';
import OutroComponent from './components/OutroComponent.jsx';
import ComponentORemake from './components/ComponentORemake.jsx';

function App() {
  const n = 15
  const classDiferente = true

  return (
    <div className="App">
      {/*
      <FirstComponent />
      <TemplateExpressions />
      <MyComponents />*/}

      <ComponentORemake />
     
      <h1>Olha só o Texto</h1>

      {/*csss no proprio modulo*/}
      <OutroComponent />
      {/* css inline*/}
      <p style={{color:"white", padding: "25px", backgroundColor: "rgb(199, 131, 255)", fontSize:"40px"}}>Este paragrafo é do App.jsx</p>

      <h3 style={n > 10 ? ({color:"rgb(169, 255, 255)", backgroundColor:"rgb(155, 20, 245)"}) : ({color:"white", backgroundColor:"rgb(255, 0, 149)"})}>AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO</h3>

      <h3 style={n < 10 ? ({color:"rgb(169, 255, 255)", backgroundColor:"rgb(155, 20, 245)"}) : ({color:"white", backgroundColor:"rgb(255, 0, 149)"})}>AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO</h3>


     {/* class diferente de acordo com a verificação */}
      <h2 className={classDiferente ? "pink-title" : "normal-title"}>TEXTO COM CLASSE DIFERENTE</h2>


      {/*IMportação pela pasta publica*/}
      <img src= './copinho de limao.jpg' width={400} height={400}></img>
      <br />
      <br />

      <img src={donuts} alt='Imagem de donuts' width={400} height={400}/>
    </div>
  );
}

export default App;
