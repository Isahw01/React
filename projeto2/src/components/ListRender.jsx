import {useState} from "react";

const ListRender = () => {
    const [list] = useState (["Mateus", "Marcos", "Lucas", "Joao", "Paulo"]);
    const [players] = useState([
        {id: 1, name: "Cristiano", number: 7},
        {id: 2, name: "Neymar", number: 10},
        {id: 3, name: "Calleri", number: 9},
    ])


  return (
    <div>
        <ul>
        {list.map( (item, index) => (<li key={index}> {item} </li>) )}
        </ul>

        <ol>
            {players.map( (jogador) =>(
                <li key={jogador.id}> {jogador.name} -Camisa {jogador.number}</li>
            ))}
        </ol>
    </div>
  );
};

export default ListRender