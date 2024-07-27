import express from 'express';
import pool from '../database/client.js';

const router = express.Router();

// CREATE - Cadastrar novo curso
router.post('/', async (req, res) => {
	const { name, description, code, school } = req.body;
	try {
		const [result] = await pool.query(
			'INSERT INTO `ensinosuperiordb`.`courses` (`name`, `description`, `code`, `school`) VALUES (?, ?, ?, ?)',
			[name, description, code, school]
		);
		res.status(201).json({ id: result.insertId, name, description, code, school });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// READ - Listar todos os cursos
router.get('/', async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM `ensinosuperiordb`.`courses`');
		res.json(rows);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// READ - Listar um curso específico
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const [rows] = await pool.query('SELECT * FROM `ensinosuperiordb`.`courses` WHERE `id` = ?', [id]);
		if (rows.length) {
			res.json(rows[0]);
		} else {
			res.status(404).json({ error: 'Curso não encontrado' });
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// UPDATE - Atualizar um curso
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const { name, description, code, school } = req.body;
	try {
		const [result] = await pool.query(
			'UPDATE `ensinosuperiordb`.`courses` SET `name` = ?, `description` = ?, `code` = ?, `school` = ? WHERE `id` = ?',
			[name, description, code, school, id]
		);
		if (result.affectedRows) {
			res.json({ id, name, description, code, school });
		} else {
			res.status(404).json({ error: 'Curso não encontrado' });
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// DELETE - Remover um curso
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const [result] = await pool.query('DELETE FROM `ensinosuperiordb`.`courses` WHERE `id` = ?', [id]);
		if (result.affectedRows) {
			res.json({ message: 'Curso removido com sucesso' });
		} else {
			res.status(404).json({ error: 'Curso não encontrado' });
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

export default router;
