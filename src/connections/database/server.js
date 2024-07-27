import express from 'express';
import studentsRouter from '../routes/students.js';
import coursesRouter from '../routes/courses.js';
import enrollmentsRouter from '../routes/enrollments.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);
app.use('/enrollments', enrollmentsRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
