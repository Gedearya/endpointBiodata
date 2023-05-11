const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// GET method
app.get("/biodata", (req, res) => {
  const nama = req.query.name;
  const tempat_lahir = req.query["tempat-lahir"];
  const tanggal_lahir = req.query["tanggal-lahir"];
  const alamat = req.query.alamat;

  const biodata = {
    nama: nama,
    "tempat-lahir": tempat_lahir,
    "tanggal-lahir": tanggal_lahir,
    alamat: alamat,
  };

  res.json(biodata);
});

// POST method
app.post("/biodata", (req, res) => {
  const nama = req.body.nama;
  const tempat_lahir = req.body["tempat-lahir"];
  const tanggal_lahir = req.body["tanggal-lahir"];
  const alamat = req.body.alamat;

  const biodata = {
    nama: nama,
    "tempat-lahir": tempat_lahir,
    "tanggal-lahir": tanggal_lahir,
    alamat: alamat,
  };

  res.json(biodata);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
