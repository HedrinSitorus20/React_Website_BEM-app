import { Card } from "react-bootstrap";

const CardEvents = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>{props.deskripsi}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardEvents;
