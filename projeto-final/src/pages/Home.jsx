import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useState, useEffect} from "react";
import ModalCadastrar from '../components/ModalCadastrar';

const url = "http://localhost:5000/usuarios"

const Home = () => {

  const [usuarios, setUsuarios] = useState ([]) 

  const [modalCadastrar, setModalCadastrar] = useState (false)

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch(url)
        const users = await res.json()
        setUsuarios(users)
      }
      catch(error){
        console.log(error.message)
      }
    }
    fetchData()
  }, []);

  return (
    <div>
      <Container>
      <div className='d-grid col-4 gap-2'>
        <h1>Lista de algo</h1>
        <Button variant="primary" size='lg' className='mb-3 d-inline-flex justify-content-center' onClick={() => {
          setModalCadastrar(true)
        }}><span className='material-symbols-outlined flex' style={{fontSize:"30px"}}>add_circle</span>cadastrar</Button>{' '}       
         </div>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((user)=>(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.nome}</td>
          <td>{user.email}</td>
          <td>{user.tipo}</td>
          <td><ButtonGroup size='sm'>
      <Button variant="info">Editar</Button>
      <Button variant="danger" onClick={async () => {
        const res = await fetch(`http://localhost:5000/usuarios/${user.id}`,
        {
          method:"DELETE",
          headers: {"content-type" : "application/json"},
        });
        const funcionarioRemovido = await res.json()
        alert(`funcionario ${funcionarioRemovido.nome} foi excluido`)

      }}
      >
        Excluir</Button>
    </ButtonGroup></td>
        </tr>
        ))}
      </tbody>
    </Table>
    <ModalCadastrar show={modalCadastrar}
    onHide={() => {
      setModalCadastrar(false)
    }}/>

      </Container>
    </div>
  )
}

export default Home