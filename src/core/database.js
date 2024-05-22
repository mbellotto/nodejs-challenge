const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'dbadmin',
    password: 'Alaisor10',
    database: 'workana',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  
  export default db;
