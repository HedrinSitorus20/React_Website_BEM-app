// import Datacarousel from "./Datacarousel";
// import DataTable from "./DataTable";
// import tentang2 from "./../Asset/YT-Play-Button.png";
// import VisiMisi from "./VisiMisi";
// import Developer from "./Developer";
import { Container } from "react-bootstrap";
import Berita from "./Berita";
import CardDepartemen from "./CardDepartemen";
import CardEvents from "./CardEvents";
import FormInput from "./FormInput";
import { Button, Card } from "react-bootstrap";
import departemen1 from "./../Asset/kegiatan_dep/Depagsos.JPG";
import departemen2 from "./../Asset/kegiatan_dep/Depkominfo.JPG";
import departemen3 from "./../Asset/kegiatan_dep/Depsenbud.JPG";
import departemen4 from "./../Asset/kegiatan_dep/Depkebdis.JPG";
import departemen5 from "./../Asset/kegiatan_dep/Depol.JPG";
import departemen6 from "./../Asset/kegiatan_dep/Dpdh.JPG";
import departemen7 from "./../Asset/kegiatan_dep/Dpdk.JPG";
import departemen8 from "./../Asset/kegiatan_dep/DepPengetahuan .JPG";
import departemen9 from "./../Asset/kegiatan_dep/Sarpras.JPG";
import event1 from "./../Asset/KegiatanBEM.JPG";
import event2 from "./../Asset/RapatKoordinasi.JPG";
import event3 from "./../Asset/wisuda.jpeg";
import event4 from "./../Asset/Wisuda_S1_infomatika.jpeg";
import tentang1 from "./../Asset/pancuran.jpg";

const Maincontent = () => {
  return (
    <div>
      {/* <Datacarousel /> */}
      {/* Tentang */}
      <div className=" row justify-content-center my-5">
        <div className=" text-center my-5">
          <h1>Tentang</h1>
        </div>
        <div className=" col-lg-6 col-12 tentang-bag1">
          {["Light"].map((variant) => (
            <div
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "auto" }}
              className=" col-lg-6 col-12 mb-0"
            >
              <h3 className="jago my-3">
                Badan Eksekutif Mahasiswa Institut Teknologi Del
              </h3>
              <p className="tekstentang my-3">
                Badan eksekutif mahasiswa adalah organisasi mahasiswa intra
                kampus yang merupakan lembaga eksekutif di tingkat pendidikan
                tinggi yang dipimpin oleh seorang Presiden Mahasiswa atau Ketua
                BEM. Dalam melaksanakan program-programnya, umumnya BEM memiliki
                beberapa kementerian dan departemen atau bidang.
              </p>
              <p className="tekstentang my-3">
                Badan Eksekutif Mahasiswa (BEM) IT Del merupakan lembaga
                eksekutif tertinggi di Keluarga Mahasiswa (KM) IT Del. Dalam
                menjalankan tugas dan fungsinya, BEM IT Del bertanggung jawab
                kepada Badan Legislatif Mahasiswa (BLM) IT Del yang bersifat
                representatif terhadap mahasiswa IT Del.
              </p>
              <p className="tekstentang my-3">
                Adapun BEM IT Del bertugas untuk mengoordinasikan seluruh
                kegiatan organisasi kemahasiswaan di lingkup KM IT Del dan juga
                kegiatan kemahasiswaan di bidang sosial politik. Selain itu, BEM
                IT Del berwenang dalam melakukan koordinasi dan instruksi
                terhadap HMD dan BEM Fakultas serta mewakili KM IT Del keluar
                atas persetujuan BLM IT Del dalam bidang sosial politik.
              </p>
            </div>
          ))}
        </div>
        <div className="col-lg-5 col-12  ">
          <Card className=" bg-light text-white tentangkita">
            <Card.Img src={tentang1} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Welcome to IT Del</Card.Title>
              <Button className="tombolyt text-light " variant="outline-light">
                <a
                  href="https://www.youtube.com/channel/UCPdG-I35XH_kPOVFF9zLlkg"
                  target="blank"
                >
                  Lihat
                </a>
              </Button>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>

      {/* Departemen dalam BEM */}
      <div>
        {/* <div className=" text-center  text-dark my-5">
          <h1>Berita</h1>
        </div> */}
        <div>
          <Berita />
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 text-center my-5">
            <h1>Departemen</h1>
          </div>

          <div className="col-lg-4 col-12">
            <CardDepartemen
              image={departemen1}
              departemen="Departemen Agama dan Sosial"
              description="Departemen Agama dan Sosial merupakan salah satu departemen yang ada di BEM dengan tugas yang sangat beragam seperti..."
            />
          </div>
          <div className="col-lg-4 col-12">
            <CardDepartemen
              className=" card-img rounded-3"
              variant="top"
              image={departemen2}
              departemen="Departemen Komunikasi dan Informasi"
              description="Departemen Komunikasi dan Informasi merupakan salah satu departemen yang sangat krusial dengan fungsi... "
            />
          </div>
          <div className="col-lg-4 col-12">
            <CardDepartemen
              image={departemen3}
              departemen="Departemen Seni dan Budaya "
              description="Departemen Seni dan Budaya(Depsenbud) merupakan salah satu departemen yang berperan penting dalam kampus..."
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-4 col-12">
            <CardDepartemen
              image={departemen4}
              departemen="Departemen Ketertiban dan Kedisiplinan"
              description="Departemen Ketertiban dan Kedisiplinan merupakan.."
            />
          </div>
          <div className="col-lg-4 col-12">
            <CardDepartemen
              image={departemen5}
              departemen="Departemen Olahraga"
              description="Departemen Olahraga merupakan.."
            />
          </div>
          <div className="col-lg-4 col-12 ">
            <CardDepartemen
              image={departemen6}
              departemen="Departemen Hubungan dan Pengabdian Masyarakat"
              description="Departemen Hubungan dan Pengabdian Masyarakat merupakan..."
            />
          </div>
        </div>
        <div className="row my-5 ">
          <div className="col-lg-4 col-12">
            <CardDepartemen
              image={departemen7}
              departemen="Departemen Dalam Kampus"
              description="Departemen Dalam Kampus merupakan..."
            />
          </div>
          <div className="col-lg-4 col-12">
            <CardDepartemen
              image={departemen8}
              departemen="Departemen Ilmu Pengetahuan dan Teknologi"
              description="Departemen Ilmu Pengetahuan dan Teknologi..."
            />
          </div>
          <div className="col-lg-4 col-12">
            <CardDepartemen
              image={departemen9}
              departemen="Departemen Sarana dan Prasarana"
              description="Departemen Sarana dan Prasarana merupakan..."
            />
          </div>
        </div>
      </div>
      {/* Kegiatan BEM IT DEL */}
      <div className="    row border my-5 bg-primary info">
        <div className="col-12 text-end my-5 text-light ">
          <h2>Events BEM IT DEL</h2>
        </div>
        <div className="col-lg-3 col-12 ">
          <CardEvents
            image={event1}
            deskripsi="Rapat Koordinasi BEM dengan MPM, Himapro, UKM dengan Kemahasiswaan..."
          />
        </div>
        <div className="col-lg-3 col-12">
          <CardEvents
            image={event2}
            deskripsi="Rapat Pemberhentian dan Pengangkatan Ketua Badan Eksekutif Mahasiswa..."
          />
        </div>
        <div className="col-lg-3 col-12">
          <CardEvents
            image={event3}
            deskripsi="Ramah tamah dengan wisudawan lulusan 2022..."
          />
        </div>
        <div className="col-lg-3 col-12">
          <CardEvents
            image={event4}
            deskripsi="Ramah-tamah dengan angkatan 2022..."
          />
        </div>

        <div className=" text-center mb-2 my-5 ">
          <Button variant="outline-light" size="lg">
            Selengkapnya...
          </Button>
        </div>
      </div>
      {/* Hubungi Kami */}
      <div>
        <div>
          <FormInput />
        </div>
      </div>
      {/* Main content berita */}
      {/* <div className="text-start text-light">
        <Sasa />
      </div> */}
      {/* Table */}
      {/* <div>
        <div className=" col-lg-0 col-12 my-5 text-center">
          <h1>Struktur Organisasi</h1>
        </div>
        <div className="justify-content-center">
          <DataTable />
        </div>
      </div> */}
    </div>
  );
};

export default Maincontent;
