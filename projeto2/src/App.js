import Singers from './components/Singers';
import './App.css';
import { useState } from 'react';

function App() {
const nome = "Geovane"

const [cantores] = useState([
  {id: 1, name:"Michael Jackson", gender:"Pop", winner:true, position:2},
  {id: 2, name:"Taylor Swift", gender:"Country", winner:true, position:2},
  {id: 3, name:"Alceu Valença", gender:"Forró", winner:false, position:1000}
])

  return (
    <div className="App">
      {
        cantores.map(
          (cantor) =>(
            <Singers
            name={cantor.name} gender={cantor.gender} winner={cantor.winner} position={cantor.position} />
          )
        )
      }
    </div>
  );
}

export default App;