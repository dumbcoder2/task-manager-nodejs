const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'taskroot123',
    database: process.env.DB_NAME || 'task_manager',
    port: process.env.DB_PORT || 3306
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }

    console.log('MySQL database connected successfully!');
});

module.exports = db;