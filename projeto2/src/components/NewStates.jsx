import {useState} from 'react'

function NewStates() {
    let valor = 10
    console.log(valor)

    const [number, setNumber] = useState(0)
    console.log(number)

  return (
    <div>
        {/*/Variaveis padrao */}
        <p>valor: {valor}</p>
        <button onClick={() => (valor = 20)} >
        Mudar Valor</button>

        {/*/Variavis com useState */}
        <p>valor com useState:{Number}</p>
        <button onClick={() => (setNumber(number + 15))} >
        Aumentar Valor</button>

    </div>
  )
}

export default NewStates