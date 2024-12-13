pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Connected to MySQL DB successfully!');
    connection.release();