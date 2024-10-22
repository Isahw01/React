import "./App.css";

//importa bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//importar gerenciador de rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importar paginas
import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Login from "./pages/Login.jsx";

import NavBarra from "./components/NavBarra.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarra />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
