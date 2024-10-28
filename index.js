import express from "express";
import pool from "./DB/connection.js";

const app = express();
const port = 3000;

pool;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
