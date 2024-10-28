import mysql from "mysql2";
const connection = mysql.createConnection({
  host: "bs1xtjqlwenxhebtxbtx-mysql.services.clever-cloud.com",
  port: 3306,
  user: "urthuiwezbvrseob",
  password: "idqqcGwzVqLVxVlwpLSk",
  database: "bs1xtjqlwenxhebtxbtx",
  dialect: "mysql",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!...");
});

export default connection;
