import Table from "react-bootstrap/Table";
// import DataCarousel  from "react-bootstrap";

function DataTable() {
  return (
    <div className="justify-content-center tabelku ">
      <div className=" my-5 text-center ">
        <h1 className="garis">
          Struktur Organisasi Kepengurusan BEM 2022/2023
        </h1>
      </div>
      <div className="justify-content-center my-5">
        <Table
          className="naga"
          striped
          bordered
          hover
          size="sm"
          variant="ligth"
        >
          <thead>
            <tr className="bg-secondary bg-opacity-50">
              <th className="pl-5">No.</th>
              <th>NIM</th>
              <th>Nama Lengkap</th>
              <th>Prodi</th>
              <th>Angkatan</th>
              <th>Jabatan</th>
              <th colSpan={5}>Jumlah Anggota (Orang)</th>
            </tr>
          </thead>
          <tbody>
            {/* pengurus Inti BEM */}
            <tr>
              <td>1</td>
              <td>12S20034</td>
              <td>Daniel Limbong</td>
              <td>S1 SI</td>
              <td>2020</td>
              <td>Ketua Badan Eksekutif Mahasiswa</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>2</td>
              <td>14S20021</td>
              <td>Christopher</td>
              <td>S1 TE</td>
              <td>2020</td>
              <td>Wakil Ketua Badan Eksekutif Mahasiswa</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>3</td>
              <td>31S21016</td>
              <td>Mida Sinaga</td>
              <td>S1 TB</td>
              <td>2020</td>
              <td>Sekretaris I</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>4</td>
              <td>21S20015</td>
              <td>Noramti Manurung</td>
              <td>S1 MR</td>
              <td>2020</td>
              <td>Sekretaris II</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>5</td>
              <td>11420031</td>
              <td>Eladita Nadeak</td>
              <td>D4 TRPL</td>
              <td>2020</td>
              <td>Bendahara I</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>6</td>
              <td>1320056</td>
              <td>Anggun Napitupulu</td>
              <td>D3 TI</td>
              <td>2020</td>
              <td>Bendahara II</td>
              <td colSpan={5}></td>
            </tr>
            {/* 1. Departemen Agama dan Sosial */}
            <tr>
              <td>7</td>
              <td>11S20017</td>
              <td>Satria Pakpahan</td>
              <td>S1 Informatika</td>
              <td>2020</td>
              <td>Kepala Departemen Agama dan Sosial</td>
              <td colSpan={5}>43</td>
            </tr>
            <tr>
              <td>8</td>
              <td>14S21037</td>
              <td>Dion Berkah </td>
              <td>S1 TE</td>
              <td>2021</td>
              <td>Wakil Kepala Departemen</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>9</td>
              <td>14S21058</td>
              <td>Ester Berutu</td>
              <td>D4 TRPL</td>
              <td>2020</td>
              <td>Sekretaris I</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>10</td>
              <td>13320018</td>
              <td>Putri Sitinjak</td>
              <td>D3 TK</td>
              <td>2020</td>
              <td>Sekretaris II</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>11</td>
              <td>21S20036</td>
              <td>Veby Siahaan</td>
              <td>S1 MR</td>
              <td>2020</td>
              <td>Bendahara I</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>12</td>
              <td>12S20036</td>
              <td>Winda ButarButar</td>
              <td>S1 SI</td>
              <td>2020</td>
              <td>Bendahara II</td>
              <td colSpan={5}></td>
            </tr>
            {/* 2. Departemen Komunikasi dan Informasi */}
            <tr>
              <td>13</td>
              <td>11S20022</td>
              <td>Zan Peter Silaen</td>
              <td>S1 Informatika</td>
              <td>2020</td>
              <td>Kepala Departemen Departemen Komunikasi dan Informasi</td>
              <td colSpan={5}>39</td>
            </tr>
            <tr>
              <td>14</td>
              <td>11420039</td>
              <td>Marcellino LumbanGaol</td>
              <td>D4 TRPL </td>
              <td>2020</td>
              <td>Wakil Kepala Departemen</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>15</td>
              <td>11420083</td>
              <td>Ziva Tampubolon</td>
              <td>D4 TRPL</td>
              <td>2020</td>
              <td>Sekretaris I</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>16</td>
              <td>12S21033</td>
              <td>Sry Tambunan </td>
              <td>S1 SI</td>
              <td>2021</td>
              <td>Sekretaris II</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>17</td>
              <td>21S20042</td>
              <td>Ria Sihotang</td>
              <td>S1 MR</td>
              <td>2020</td>
              <td>Bendahara I</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>18</td>
              <td>11321019</td>
              <td>Elsaday Sianturi</td>
              <td>D3 TK</td>
              <td>021</td>
              <td>Bendahara II</td>
              <td colSpan={5}></td>
            </tr>
            {/* 3. Departemen Seni dan Budaya  */}
            <tr>
              <td>19</td>
              <td>11S20046</td>
              <td>Rachel Damanik</td>
              <td>S1 Informatika</td>
              <td>2020</td>
              <td>Kepala Departemen Seni dan Budaya</td>
              <td colSpan={5}>27</td>
            </tr>
            <tr>
              <td>20</td>
              <td>21S21008</td>
              <td>Theo Manullang</td>
              <td>S1 MR</td>
              <td>2021</td>
              <td>Wakil Kepala Departemen</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>21</td>
              <td>12S20055</td>
              <td>Aygrace Hutagaol</td>
              <td>S1 SI</td>
              <td>2020</td>
              <td>Sekretaris I</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>22</td>
              <td>31S21020</td>
              <td>Irene Manalu</td>
              <td>S1 TB</td>
              <td>2021</td>
              <td>Sekretaris II</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>23</td>
              <td>11S20013</td>
              <td>Chantika Nadya Pardosi</td>
              <td>S1 Informatika</td>
              <td>2020</td>
              <td>Bendahara I</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>24</td>
              <td>21S21016</td>
              <td>Gracia Sianipar</td>
              <td>S1 MR</td>
              <td>2021</td>
              <td>Bendahara II</td>
              <td colSpan={5}></td>
            </tr>
            {/* 4. Departemen Ketertiban dan Kedisiplinan  */}
            <tr>
              <td>25</td>
              <td>12S20024</td>
              <td>Sandro Sinaga</td>
              <td>S1 Sistem Informasi</td>
              <td>2020</td>
              <td>Kepala Departemen Ketertiban dan Kedisiplinan</td>
              <td colSpan={5}>22</td>
            </tr>
            <tr>
              <td>26</td>
              <td>11S21042</td>
              <td>Pany Irene Matondang</td>
              <td>S1 Informatika</td>
              <td>2021</td>
              <td>Wakil Kepala Departemen</td>
              <td colSpan={5}></td>
            </tr>

            {/* 4. Departemen Ketertiban dan Kedisiplinan  */}
            <tr>
              <td>27</td>
              <td>12S20049</td>
              <td>Meida Enggelica Butarbutar</td>
              <td>S1 Sistem Informasi</td>
              <td>2020</td>
              <td>Sekretaris Departemen Ketertiban dan Kedisiplinan</td>
              <td colSpan={5}></td>
            </tr>

            {/* 4. Departemen Ketertiban dan Kedisiplinan  */}
            <tr>
              <td>28</td>
              <td>11420025</td>
              <td>Natalia Merlin Ganongga</td>
              <td>D4 TRPL</td>
              <td>2020</td>
              <td>Bendahara Departemen Ketertiban dan Kedisiplinan</td>
              <td colSpan={5}></td>
            </tr>

            {/* 5. Departemen Olahraga  */}
            <tr>
              <td>29</td>
              <td>11420003</td>
              <td>Christiano Doni Simatupang</td>
              <td>S1 Teknik Elektro</td>
              <td>2020</td>
              <td>Kepala Departemen Olahraga</td>
              <td colSpan={5}>--</td>
            </tr>

            {/* 5. Departemen Olahraga  */}
            <tr>
              <td>30</td>
              <td>11S20029</td>
              <td>Rizal Sahala Bakti</td>
              <td>S1 Informatika</td>
              <td>2020</td>
              <td>Wakil Kepala Departemen Olahraga</td>
              <td colSpan={5}></td>
            </tr>

            {/* 5. Departemen Olahraga  */}
            <tr>
              <td>31</td>
              <td>41S20062</td>
              <td>Angela One Erika</td>
              <td>D4 Teknologi Rekayasa Perangkat Lunak</td>
              <td>2020</td>
              <td>Sekretaris Departemen Olahraga</td>
              <td colSpan={5}></td>
            </tr>

            {/* 5. Departemen Olahraga  */}
            <tr>
              <td>32</td>
              <td>21S20014</td>
              <td>Yuni Magdalena Sinaga</td>
              <td>S1 Manajemen Rekayasa</td>
              <td>2020</td>
              <td>Bendahara Kepala Departemen Olahraga</td>
              <td colSpan={5}></td>
            </tr>

            {/* 6. Departemen Hubungan dan Pengabdian Masyarakat  */}
            <tr>
              <td>21</td>
              <td>12S20001</td>
              <td>Marcelino Manalu</td>
              <td>S1 Sistem Informasi</td>
              <td>2020</td>
              <td>Kepala Departemen Hubungan dan Pengabdian Masyarakat</td>
              <td colSpan={5}></td>
            </tr>

            {/* 6. Departemen Hubungan dan Pengabdian Masyarakat  */}
            <tr>
              <td>22</td>
              <td>12S21015</td>
              <td>Sitogab Antonio Octavianus Girsang</td>
              <td>S1 Sistem Informasi</td>
              <td>2021</td>
              <td>
                Wakil Kepala Departemen Hubungan dan Pengabdian Masyarakat
              </td>
              <td colSpan={5}></td>
            </tr>

            {/* 6. Departemen Hubungan dan Pengabdian Masyarakat  */}
            <tr>
              <td>23</td>
              <td>11S20038</td>
              <td>Arni Febryarti Sitorus</td>
              <td>S1 Sistem Informasi</td>
              <td>2020</td>
              <td>Sekretaris Departemen Hubungan dan Pengabdian Masyarakat</td>
              <td colSpan={5}></td>
            </tr>

            {/* 6. Departemen Hubungan dan Pengabdian Masyarakat  */}
            <tr>
              <td>24</td>
              <td>11S21039</td>
              <td>Hanny Yosephine Br. Kaban</td>
              <td>S1 Informatika</td>
              <td>2021</td>
              <td>Bendahara Departemen Hubungan dan Pengabdian Masyarakat</td>
              <td colSpan={5}></td>
            </tr>

            {/* 7. Departemen Dalam Kampus  */}
            <tr>
              <td>25</td>
              <td>21S20009</td>
              <td>Ricton Samuel Sitorus</td>
              <td>S1 Manajemen Rekayasa</td>
              <td>2020</td>
              <td>Kepala Departemen Dalam Kampus</td>
              <td colSpan={5}>19</td>
            </tr>

            {/* 7. Departemen Dalam Kampus  */}
            <tr>
              <td>26</td>
              <td>41S20080</td>
              <td>Indah Chris Sarah Sinurat</td>
              <td>D4 Teknologi Rekayasa Perangkat Lunak</td>
              <td>2020</td>
              <td>Wakil Kepala Departemen Dalam Kampus</td>
              <td colSpan={5}></td>
            </tr>

            {/* 7. Departemen Dalam Kampus  */}
            <tr>
              <td>27</td>
              <td>41S20068</td>
              <td>Putri Kesuma Indah Jawak</td>
              <td>D4 Teknologi Rekayasa Perangkat Lunak</td>
              <td>2020</td>
              <td>Sekretaris Departemen Dalam Kampus</td>
              <td colSpan={5}></td>
            </tr>

            {/* 7. Departemen Dalam Kampus  */}
            <tr>
              <td>28</td>
              <td>31S20013</td>
              <td>Xena Fujianta Simatupang</td>
              <td>S1 Teknik Bioproses</td>
              <td>2020</td>
              <td>Bendahara Departemen Dalam Kampus</td>
              <td colSpan={5}></td>
            </tr>

            {/* 8. Departemen Ilmu Pengetahuan dan Teknologi  */}
            <tr>
              <td>29</td>
              <td>21S20023</td>
              <td>Hansel Septiyan Pasaribu</td>
              <td>S1 Manajemen Rekayasa</td>
              <td>2020</td>
              <td>Kepala Departemen Ilmu Pengetahuan dan Teknologi</td>
              <td colSpan={5}></td>
            </tr>

            {/* 8. Departemen Ilmu Pengetahuan dan Teknologi  */}
            <tr>
              <td>30</td>
              <td>41S20042</td>
              <td>Abram Wirayuda Pane</td>
              <td>D4 Teknologi Rekayasa Perangkat Lunak</td>
              <td>2020</td>
              <td>Wakil Kepala Departemen Ilmu Pengetahuan dan Teknologi</td>
              <td colSpan={5}></td>
            </tr>

            {/* 8. Departemen Ilmu Pengetahuan dan Teknologi  */}
            <tr>
              <td>31</td>
              <td>21S20039</td>
              <td>Mergie Miranda Sihotang</td>
              <td>S1 Manajemen Rekayasa</td>
              <td>2020</td>
              <td>Sekretaris Departemen Ilmu Pengetahuan dan Teknologi</td>
              <td colSpan={5}></td>
            </tr>

            {/* 8. Departemen Ilmu Pengetahuan dan Teknologi  */}
            <tr>
              <td>32</td>
              <td>31S20004</td>
              <td>Rizka Arta Rossa Tambun</td>
              <td>S1 Teknik Bioproses</td>
              <td>2020</td>
              <td>Bendahara Departemen Ilmu Pengetahuan dan Teknologi</td>
              <td colSpan={5}></td>
            </tr>

            {/* 9. Departemen Sarana dan Prasarana  */}
            <tr>
              <td>33</td>
              <td>14S20001</td>
              <td>Sebastian Jeremia Napitupulu</td>
              <td>S1 Teknik Elektro</td>
              <td>2020</td>
              <td>Kepala Departemen Sarana dan Prasarana</td>
              <td colSpan={5}></td>
            </tr>

            {/* 9. Departemen Sarana dan Prasarana  */}
            <tr>
              <td>34</td>
              <td>31S20025</td>
              <td>Oliver Nathan Sianipar</td>
              <td>D3 Teknologi Informasi</td>
              <td>2020</td>
              <td>Wakil Kepala Departemen Sarana dan Prasarana</td>
              <td colSpan={5}></td>
            </tr>

            {/* 9. Departemen Sarana dan Prasarana  */}
            <tr>
              <td>35</td>
              <td>12S20020</td>
              <td>Wahyu Krisdangolyanti Simamora</td>
              <td>S1 Sistem Informasi</td>
              <td>2020</td>
              <td>Sekretaris Departemen Sarana dan Prasarana</td>
              <td colSpan={5}></td>
            </tr>

            {/* 9. Departemen Sarana dan Prasarana  */}
            <tr>
              <td>36</td>
              <td>21S20010</td>
              <td>Ambar Natio Simanungkalit</td>
              <td>S1 Manajemen Rekayasa</td>
              <td>2020</td>
              <td>Bendahara Departemen Sarana dan Prasarana</td>
              <td colSpan={5}></td>
            </tr>

            <tr>
              <td colSpan={1}>Total Anggota</td>
              <td colSpan={5}></td>
              <td>280</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DataTable;
