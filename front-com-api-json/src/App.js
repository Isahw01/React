import './App.css';
import {useState, useEffect} from 'react'

const url= "http://localhost:5000/alunos"

function App() {

  const [alunos, setAlunos] = useState([])

  //variaveis para o novo aluno
  const [nome, setNome] = useState([])
  const [turma, setTurma] = useState([])
  const [ano_escolar, setAnoEscolar] = useState([])
  const [idAluno, setIdAluno] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  //Função remova um aluno
  const handleRemove = async (e) => {
    e.preventDefault()

    try{
      const id = idAluno
      const res = await fetch(`http://localhost:5000/alunos/${id}`,{method:"DELETE",
        headers: {"content-Type": "application/json"}
      } )
      const alunoRemovido = await res.json()
      console.log(alunoRemovido)
    }
    catch(error){
      setError("Houve um erro ao remover dados")
      console.log(error.message)
    }
  }

  //função que adiciona os alunos apos o clique
  const handleSubmit = async (e) => {
  e.preventDefault()

  setLoading(true)
  const aluno = {nome, turma, ano_escolar}

  //Envia a requisição com os dados do aluno
  const res = await fetch(url, {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(aluno)
  })

  //Atualiza a lista de alunos na tela do cliente com o ultimo aluno adicionado
  const alunoAdicionado = await res.json()
  setAlunos( (prevAlunos) => [...prevAlunos, alunoAdicionado])

  setNome("")
  setTurma("")
  setAnoEscolar("")

  setLoading(false)
  };

  //Resgatar dados API
  useEffect(() =>{
    async function fetchData(){
      setLoading(true)

      try{
      //busca de dados
      const res = await fetch(url)

      //converte as respostas para json
      const data = await res.json()
      setAlunos(data);
      }
      catch(error){
        setError("Houve um erro ao carregar os dados")
        console.log(error)
      }

      setLoading(false)
    }

    fetchData()

  },[])
  console.log(alunos)
  return (
    <div className="App">
            <div className='add-aluno'>
            <h1>Cadastrar Alunos</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Aluno:
                   <input type="text"
                  value={nome}
                  name="nome"
                  onChange={(e) => {
                    setNome(e.target.value);
                  }} />
                </label>
                <label>
                  Turma:
                   <input type="text"
                  value={turma}
                  name="turma"
                  onChange={(e) => {
                    setTurma(e.target.value);
                  }} />
                </label>
                <label>
                  Ano:
                   <input type="number"
                  value={ano_escolar}
                  name="ano"
                  onChange={(e) => {
                    setAnoEscolar(Number(e.target.value));
                  }} />
                </label>
                {loading && <input type="submit" value="Aguarde"  disable className="btn" ></input>}
                
                {!loading && <input type="submit" value="Adicionar" className="btn" ></input>}

              </form>

            <div className='remove-aluno'>
              <h1>Remova um aluno</h1>
              <form onSubmit={handleRemove}>
              <label>
                  Id aluno:
                   <input type="number"
                  value={idAluno}
                  name="id_aluno"
                  onChange={(e) => {
                    setIdAluno(Number(e.target.value));
                  }} />
                <input type="submit" value="Remover" className="btn" ></input>
                </label>
              </form>
           </div>
           </div>
      <div className='lista-alunos'>       
      <h1>Lista de Alunos</h1>
      {loading && <h3>Carregando lista...</h3>}
      {error && <h3>Houve um erro ao carregar os dados</h3>}
      {!error &&
      <ul>
        {alunos.map((alu) => (
          <li key={alu.id}>
            Aluno: {alu.nome} - Turma {alu.turma} - Ano: {alu.ano_escolar}
          </li>
        ))}
      </ul>
     }
     <div className='tabela-alunos'>
      <table style={{border:"2px solid black", backgroundColor:"lightblue", margin:"0px auto"}}>
        <thead>
          <th>Id</th>
          <th>Aluno</th>
          <th>Turma</th>
          <th>Ano Escolar</th>
        </thead>
        <tbody>
          {alunos.map( (aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.turma}</td>
              <td>{aluno.ano_escolar}</td>
            </tr>
          ))}
        </tbody>

      </table>
     </div>

     
    </div>
    </div>    
  );
}

export default App;

