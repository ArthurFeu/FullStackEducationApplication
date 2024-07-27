import express from 'express';
import studentsRouter from '../routes/students.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/students', studentsRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
