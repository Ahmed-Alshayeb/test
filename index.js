import express from "express";
import connection from "./DB/connection.js";

const app = express();
const port = 3000;

connection
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
