const express = require("express");
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
