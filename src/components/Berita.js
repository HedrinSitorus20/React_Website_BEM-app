import { CardGroup, Button, Card } from "react-bootstrap";
import del from "./../Asset/belajar.jpg";
const Berita = () => {
  return (
    <div>
      <div className=" text-center  text-dark my-5">
        <h1>Berita</h1>
      </div>
      <div className="">
        <CardGroup className="my-5">
          <Card
            data-aos="flip-left"
            data-aos-duration="1500"
            style={{ width: "18rem" }}
            className="rounded-3 kartu mx-2"
          >
            <div className="overflow-hidden">
              <Card.Img
                variant="top"
                src={del}
                className="card-img rounded-3"
              />
            </div>
            <Card.Body>
              <Card.Title>
                Program Pembinaan Mahasiswa Wirausaha (P2MW)
              </Card.Title>
              <Card.Text>
                Program Pembinaan Mahasiswa Wirausaga (P2MW) merupakan program
                pengembangan usaha mahasiswa yang telah memiliki ...
              </Card.Text>
              <Button variant="primary">Selengkapnya</Button>
            </Card.Body>
          </Card>
          ;
          <Card
            data-aos="flip-left"
            data-aos-duration="1500"
            style={{ width: "18rem" }}
            className="rounded-3 kartu mx-2"
          >
            <div className="overflow-hidden">
              <Card.Img
                variant="top"
                src={del}
                className="card-img rounded-3"
              />
            </div>
            <Card.Body>
              <Card.Title>
                Program Pembinaan Mahasiswa Wirausaha (P2MW)
              </Card.Title>
              <Card.Text>
                Program Pembinaan Mahasiswa Wirausaga (P2MW) merupakan program
                pengembangan usaha mahasiswa yang telah memiliki ...
              </Card.Text>
              <Button variant="primary">Selengkapnya</Button>
            </Card.Body>
          </Card>
          <Card
            data-aos="flip-left"
            data-aos-duration="1500"
            style={{ width: "18rem" }}
            className="rounded-3 kartu mx-2"
          >
            <div className="overflow-hidden">
              <Card.Img
                variant="dark"
                src={del}
                className="card-img rounded-3"
              />
            </div>
            <Card.Body>
              <Card.Title>
                Program Pembinaan Mahasiswa Wirausaha (P2MW)
              </Card.Title>
              <Card.Text>
                Program Pembinaan Mahasiswa Wirausaga (P2MW) merupakan program
                pengembangan usaha mahasiswa yang telah memiliki ...
              </Card.Text>
              <Button variant="primary">Selengkapnya</Button>
            </Card.Body>
          </Card>
          <Card
            data-aos="flip-left"
            data-aos-duration="1500"
            style={{ width: "18rem" }}
            className="rounded-3 kartu mx-2"
          >
            <div className="overflow-hidden">
              <Card.Img
                variant="top"
                src={del}
                className="card-img rounded-3"
              />
            </div>
            <Card.Body>
              <Card.Title>
                Program Pembinaan Mahasiswa Wirausaha (P2MW)
              </Card.Title>
              <Card.Text>
                Program Pembinaan Mahasiswa Wirausaga (P2MW) merupakan program
                pengembangan usaha mahasiswa yang telah memiliki ...
              </Card.Text>
              <Button variant="primary">Selengkapnya</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};
export default Berita;
