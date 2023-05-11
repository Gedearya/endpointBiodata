# endpointExpressBiodata
Tugas NodeJS - Express PESILAT Alkademi 2023
<br>

# Running Port:3000
![hasil](https://github.com/Gedearya/endpointBiodata/assets/75374189/ba40ebd7-3737-4cbd-95bb-20511ac59bde) <br> <br>

# URL Parameter and test endpoint Postman
## GET Request: <br>
URL: http://localhost:3000/biodata?name=arya&tempat-lahir=tangerang&tanggal-lahir=30031996&alamat=Jl.%20Rajungan,%20Rawamangun <br>
Metode: GET <br> <br>
![endpoint](https://github.com/Gedearya/endpointBiodata/assets/75374189/87c8aecc-bf8f-4b21-991e-dc935bf88a3a) <br> <br>

## POST Request: <br>
URL: http://localhost:3000/biodata <br>
Metode: POST <br>
Body (dalam format JSON): <br>
{
  "nama": "arya",
  "tempat-lahir": "tangerang",
  "tanggal-lahir": "30031996",
  "alamat": "Jl. Rajungan, Rawamangun"
} <br> <br>
![post](https://github.com/Gedearya/endpointExpressBiodata/assets/75374189/24508114-6edf-47de-98b9-ab05aaf3266a)

