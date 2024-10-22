import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import style from  "./MyCadastro.module.css"

const MyCadastro = () => {
  return (
    <div className={style.caixaLogin}>
        <Container>
         <Form>
         <span className={`material-symbols-outlined ${style.formIcon}`}>group_add</span>
      <Row className="mb-3">

      <Form.Group as={Col} controlId="formGridNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="Text" placeholder="Digitar nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digitar email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha
          ." />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Confirmar senha</Form.Label>
        <Form.Control placeholder="Confirme senha" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Endereço</Form.Label>
        <Form.Control placeholder="Rua..." />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>CPF</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Estado</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Bahia</option>
            <option>Espirito Santo</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Li e aceito termos" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
     </Container>
    </div>
  )
}

export default MyCadastro