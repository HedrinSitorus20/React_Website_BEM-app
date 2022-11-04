import { Form, Button } from "react-bootstrap";

const FormInput = () => {
  return (
    <div className=" justify-content-center col-5  my-5 border bg-warning rounded-5 form">
      <div className="text-center text-light">
        <h1>Hubungi Kami</h1>
      </div>

      <div className=" text-start text-light form">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="example@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Message" />
          </Form.Group>
          <Button variant="primary">SUBMIT</Button>{" "}
        </Form>
      </div>
    </div>
  );
};

export default FormInput;
