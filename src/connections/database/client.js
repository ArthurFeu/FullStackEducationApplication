import mysql from 'mysql2/promise';

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'ensinosuperiordb',
	waitForConnections: true,
});

export default pool;
