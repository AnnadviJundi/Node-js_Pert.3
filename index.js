//import Express
const express = require('express');
// Buat Object Express
const app = express();

//definisikan router
const router = require("./routes/api");

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

//Mmebuat routing (router)
app.use(router);

// Mendefinisikan Port
app.listen(3000,() => {
    console.log("Server Running on port 3000");
});