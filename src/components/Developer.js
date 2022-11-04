import { Col, Container, Image, Row } from "react-bootstrap";
import Sri from "./../Asset/contact/contact_Sri.jpg";
import Bryand from "./../Asset/contact/contact_Bryandjpg.jpg";
import Chantika from "./../Asset/contact/contact_Chantika.jpg";
import Hedrin from "./../Asset/contact/contact_Hedrin.jpg";

const Developer = () => {
  return (
    <div className="justify-content-center" style={{ marginTop: "75px" }}>
      {/* <div className="border " style={{ height: "500px" }}>
        <h1>Kominfo</h1>
      </div> */}
      <div className="mb-5 text-center foto-kontak">
        <h1>Developer</h1>
        <Container>
          <Row className="mt-5">
            <Col>
              <div>
                <Image
                  src={Chantika}
                  roundedCircle
                  style={{ width: "100px" }}
                />
                <h5>Chantika Nadya Pardosi</h5>
                <p>11S20013</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Hedrin} roundedCircle style={{ width: "100px" }} />
                <h5>Hedrin S. Sitorus</h5>
                <p>11S20019</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Bryand} roundedCircle style={{ width: "100px" }} />
                <h5>Bryand C. Sinaga</h5>
                <p>11S20027</p>
              </div>
            </Col>
            <Col>
              <div>
                <Image src={Sri} roundedCircle style={{ width: "100px" }} />
                <h5>Sri Rahayu Saragih</h5>
                <p>11S20040</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Developer;
