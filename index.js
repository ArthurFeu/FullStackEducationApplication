import mysql from 'mysql2';
import express from 'express';

const connection = mysql.createConnection({
	host: 'localhost',
	database: "ensinosuperiordb",
	user: 'root',
	password: 'root'
})

const app = express();

const port = 5000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
	connection.connect((err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Connected to database');
		}
	});
});

app.use("/all", (req, res) => {
	connection.query("SELECT * FROM ensinosuperiordb.students", (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});