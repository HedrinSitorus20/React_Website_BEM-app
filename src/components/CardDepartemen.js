import { Card, Button } from "react-bootstrap";

const CardDepartemen = (props) => {
  return (
    <div className="card1 ">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.departemen}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Selengkapnya...</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDepartemen;
