const mysql = require('mysql2')

const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "curd_app",
    connectionLimit: 10
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Connected to MySQL DB successfully!');
    connection.release();
});

module.exports = pool;
