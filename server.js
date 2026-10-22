import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Servidor rodando!")
})

const PORT = 3000;

app.get("/status", (req, res) => {
    res.json({ status: "online", sprint: 1})
})

app.get("/sobre", (req, res) => {
    res.json("Mensageiro Local - Criado no SENAI")
})

app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}`)
})