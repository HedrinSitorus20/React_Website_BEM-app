import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div class=" text-light py-5 d-flex justify-content-center bg-primary ">
        <div class="footer-story col-md-4 mb-3 mx-5">
          <h5>Tentang BEM IT</h5>
          <p class="mt-4">
            Badan Eksekutif Mahasiswa (BEM) merupakan sebuah organisasi yang
            dikenal sebagai lembaga eksekutif intra kampus
          </p>
        </div>
        <div class="footer-hubungi-kami col-md-3 mb-3 mx-5 ">
          <h5 href="/hubungi-kami">Hubungi Kami</h5>
          <div class="d-flex justify-content-start mt-4">
            <span class="material-icons me-3"> Lokasi </span>
            <p>
              Jl. P.I. Del, Sitoluama, Lagu Boti, Kabupaten Toba Samosir,
              Sumatera Utara
            </p>
          </div>
          <div class="d-flex justify-content-start">
            <span class="material-icons me-3"> Email</span>
            <p>bemitdel@del.ac.id</p>
          </div>
          <div class="d-flex justify-content-start">
            <span class="material-icons me-3"> Call</span>
            <p>+6281263515500</p>
          </div>
        </div>
        <div class="footer-sosmed col-md-3 mb-3 ">
          <h5>Sosial Media</h5>
          <div class="icon-sosial-media d-flex mt-4">
            <a
              class="text-white"
              href="https://www.facebook.com/Institut.Teknologi.Del/"
              target="_blank"
            >
              Facebook
              <i class="bx bxl-facebook-square me-3"></i>
            </a>
            <a
              class="text-white"
              href="https://www.youtube.com/channel/UCi_VutHsvtyaJQ84s9xdSDg"
              target="_blank"
            >
              Youtube <i class="bx bxl-youtube me-3"></i>{" "}
            </a>
            <a
              class="text-white"
              href="https://www.instagram.com/it.del/?hl=id"
              target="_blank"
            >
              Instagram
              <i class="bx bxl-instagram"></i>{" "}
            </a>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <Navbar>
          <Container className="justify-content-center my-1">
            <Navbar.Brand href="#home" className="weare">
              ©2022-From 11S20013_11S20019_11S20027_11S20040 for KM IT Del
            </Navbar.Brand>

            {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse> */}
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Footer;
