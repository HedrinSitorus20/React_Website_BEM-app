import { Carousel } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
import carousel1 from "./../Asset/carousol/ITdel.jpg";
import carousel2 from "./../Asset/carousol/del_ (8).jpg";
import carousel3 from "./../Asset/carousol/del_ (3).jpg";
import carousel4 from "./../Asset/carousol/del_ (4).jpg";
import carousel5 from "./../Asset/carousol/del_ (5).jpg";
import carousel6 from "./../Asset/carousol/del_ (6).jpg";

const Datacarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="First slide" />
        <Carousel.Caption>
          <h3>Selamat Datang di Official Website</h3>
          <h3>BEM IT Del 2022</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Selamat Datang di Official Website</h3>
          <h3>BEM IT Del 2022</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Selamat Datang di Official Website</h3>
          <h3>BEM IT Del 2022</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel4} alt="Four slide" />

        <Carousel.Caption>
          <h3>Selamat Datang di Official Website</h3>
          <h3>BEM IT Del 2022</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel5} alt="FIve slide" />

        <Carousel.Caption>
          <h3>Selamat Datang di Official Website</h3>
          <h3>BEM IT Del 2022</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel6} alt="Six slide" />

        <Carousel.Caption>
          <h3>Selamat Datang di Official Website</h3>
          <h3>BEM IT Del 2022</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Datacarousel;
