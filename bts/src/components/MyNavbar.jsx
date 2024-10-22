import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  return (
    <nav>
         <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
         <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn.iconscout.com/icon/free/png-256/free-instagram-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-721958.png?f=webp&w=256"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Instagram
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='active'>Inicio</Nav.Link>
            <Nav.Link href="#action2">Stories</Nav.Link>
            <NavDropdown title="Mensagens" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Directs</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Melhores amigos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Bloqueados
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Fotos
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Procure um pefil..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </nav>
  )
}

export default MyNavbar