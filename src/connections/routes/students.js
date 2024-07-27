import express from 'express';
import pool from '../database/client.js';

const router = express.Router();

// CREATE - Cadastrar novo aluno
router.post('/', async (req, res) => {
	const { name, email, ra, cpf } = req.body;
	try {
		const [result] = await pool.query(
			'INSERT INTO `ensinosuperiordb`.`students` (`name`, `email`, `ra`, `cpf`) VALUES (?, ?, ?, ?)',
			[name, email, ra, cpf]
		);
		res.status(201).json({ id: result.insertId, name, email, ra, cpf });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// READ - Listar todos os alunos
router.get('/', async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM `ensinosuperiordb`.`students`');
		res.json(rows);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

export default router;
