import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import del from "./../Asset/Logo_BEM/Logo-BEM-IT-Del.png";

const NavigationBar = () => {
  return (
    <div className="bg-light sticky-top bg-opacity-75">
      <Navbar className=" jaguar" variant="" expand="lg" text="dark">
        <Nav.Link href="http://www.del.ac.id" target="_blank">
          <Image src={del} className="gbr w-5 logo" />
        </Nav.Link>
        <Container>
          <div className="buah">
            <Navbar.Brand href="#" className="fs-3">
              BEM IT DEL
            </Navbar.Brand>
            <Navbar.Brand>wiryananta</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 ms-auto navigasi"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/tentang">Tentang</Nav.Link>
              <Nav.Link href="/berita">Berita</Nav.Link>
              <Nav.Link href="/kontak">Kontak</Nav.Link>
              <NavDropdown title="Profil" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/visi-misi">Visi Misi</NavDropdown.Item>
                <NavDropdown.Item href="/departemen">
                  Departemen
                </NavDropdown.Item>
                <NavDropdown.Item href="/struktur-organisasi">
                  Struktur Organisasi
                </NavDropdown.Item>
                <NavDropdown.Item href="/pengembang">
                  Developer
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
