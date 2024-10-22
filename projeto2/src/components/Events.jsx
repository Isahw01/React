
function Events() {

    const teste = (e) => {
        //console.log(e)
        console.log("Funcionou de novo")
    }
  return (
    <div>
        <button onClick={() => console.log("funcionou")}>Clica aqui</button>
        <br />
        <button onClick={teste}>Clica aqui de novo</button>
    </div>
  )
}

export default Events