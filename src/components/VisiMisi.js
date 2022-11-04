import { Card } from "react-bootstrap";

const VisiMisi = () => {
  return (
    <div className=" text-center kartuku ">
      <Card className="justify-content-center bembeng" style={{ width: "60%" }}>
        <Card.Body>
          <Card.Title className="fero">VISI</Card.Title>
          <br></br>
          <Card.Text className="my-1">
            <q>
              Mewujudkan pemerintahan BEM IT Del yang
              <b> Berintegritas, Kreatif, Inovatif</b> dan <b>Luwes</b>.
            </q>
          </Card.Text>
          <br></br>
          <br></br>
          <Card.Title className="fero">MISI</Card.Title>
          <br></br>
          <Card.Text className="vision my-2">
            <ol>
              <q className="my-3">
                Menjadikan BEM IT Del sebagai <b>wadah Penampung</b> dan
                <b>Penyalur Inspirasi </b>dan <b>Aspirasi </b>mahasiswa IT Del
              </q>
              <br></br>
              <br></br>
              <q>
                Mengoptimalkan pembangunan internal BEM IT Del berdasarkan
                <b>TRI DHARMA</b> perguruan tinggi
              </q>
              <br></br>
              <br></br>
              <q>
                {" "}
                Menjadikan BEM IT Del sebagai <b>
                  Fasilitas Kreativitas
                </b> dan <b>Inovasi</b>
                mahasiswa
              </q>
              <br></br>
              <br></br>
              <q>
                {" "}
                Mewujudkan BEM IT Del sebagai lembaga yang mengedepankan
                konstribusi secara <b>Aktif, Solutif, Inovatif </b>dan
                <b> Kolaboratif </b> sesuai dengan <b>3M </b>
              </q>
            </ol>
          </Card.Text>
        </Card.Body>
        <br></br>
      </Card>
      <br></br>
    </div>
  );
};

export default VisiMisi;
