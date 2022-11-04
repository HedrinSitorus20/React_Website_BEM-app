import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";
import DataTable from "./components/DataTable";
import { Routes, Route } from "react-router-dom";
import "../src/style/style.css";
import Datacarousel from "./components/Datacarousel";
import FormInput from "./components/FormInput";
import Developer from "./components/Developer";
import VisiMisi from "./components/VisiMisi";
import CardDepartemen from "./components/CardDepartemen";
import Berita from "./components/Berita";

function App() {
  return (
    <div>
      <NavigationBar />
      <Datacarousel />

      <Routes>
        <Route path="/struktur-organisasi" element={<DataTable />} />
        <Route path="/kontak" element={<FormInput />} />
        <Route path="/pengembang" element={<Developer />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/" element={<Maincontent />} />
        <Route path="/departemen" element={<Maincontent />} />
        {/* <Route path="/" element={<Maincontent />} /> */}
      </Routes>
      {/* <Maincontent /> */}
      <Footer />
    </div>
  );
}

export default App;
// app Js merupakan komponen Utama dalam dalam react untuk menjalankan
// website. app.js yang nanti digunakan untuk merender component yang disediakan
