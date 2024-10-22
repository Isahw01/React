import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

import style from  "./MyLogin.module.css"

const MyLogin = () => {
  return (
    <div className={style.caixaLogin}>
        <Container>
        <Form>
        <span className={`material-symbols-outlined ${style.formIcon}`}>login</span>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control size="lg" type="email" placeholder="Digite seu email" />
        <Form.Text className="text-muted">
        Nunca compartilharemos seu e-mail com mais ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control size="lg" type="password" placeholder="Digite sua senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Confira-me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default MyLogin