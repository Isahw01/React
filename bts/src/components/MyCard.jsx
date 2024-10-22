import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = () => {
  return (
    <div style={{display: 'flex'
    }} >
        <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_80RqNY2DnAo1sXA-cDf5rwMISSm4dwse4DyHZM94FD2VPQsYxni5yVWXufI_HSncf4&usqp=CAU/100px180" />
      <Card.Body>
        <Card.Title>Donuts</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Visualizar</Button>
      </Card.Body>
    </Card>
     <br />
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHaD9y2BOmVd2XVhup9yZFFZunE9_72iEqTqs6W2wJotOttrNrIBsKc9C6kzrA8guBxK8&usqp=CAU/100px180" />
      <Card.Body>
        <Card.Title>Donuts</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Visualizar</Button>
      </Card.Body>
    </Card>




    </div>
  )
}

export default MyCard