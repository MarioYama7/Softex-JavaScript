const express = require('express');
const app = express();

const db = require('./models/db');

app.get("/", async (req, res) => {
    res.send("Página incial-teste02"); /*msg para verificar no navegador se está certo*/
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})