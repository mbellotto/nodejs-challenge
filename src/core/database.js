const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.MYSQLDB_HOST,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASS,
    database: process.env.MYSQLDB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  
  export default db;
