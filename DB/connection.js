import mysql from "mysql2";

const pool = mysql.createPool({
  host: "bs1xtjqlwenxhebtxbtx-mysql.services.clever-cloud.com",
  user: "urthuiwezbvrseob",
  database: "bs1xtjqlwenxhebtxbtx",
  password: "idqqcGwzVqLVxVlwpLSk",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306,
});
pool.getConnection((err, connection) => {
  if (err) console.log(err);
  console.log("connected successfully");
});

export default pool;
