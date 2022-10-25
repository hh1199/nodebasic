import { createPool } from "mysql2/promise";

// // create the connection to database

console.log("Creating connection pool...");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "nodejsbasic",
//   password: "",
//   port: "3306",
// });

const pool = createPool({
  host: "127.0.0.1",
  user: "root",
  database: "nodejsbasic",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306,
  password: "123123a@",
});

export default pool;
