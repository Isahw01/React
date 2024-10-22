import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';


const MyCarousel = () => {
  return (
    <div>
          <Carousel fade>
      <Carousel.Item>
        <img src='https://www.viajaquepassa.com.br/wp-content/uploads/2021/02/torre-eiffel-paris.png' text="Lugares" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://revistavertical.com.br/wp-content/uploads/2018/10/torta-limao-1-1.jpg' text="Sobremesas" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://i.ytimg.com/vi/T3pEsKzUS64/maxresdefault.jpg' text="Penteados" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MyCarousel