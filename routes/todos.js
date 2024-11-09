const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
    const todos = await pool.query('SELECT * FROM todos');
    res.json(todos);
});

router.post('/', async (req, res) => {
    const { title } = req.body;
    await pool.query('INSERT INTO todos (title, completed) VALUES (?, ?)', [title, false]);
    res.json({ message: 'Todo added' });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    await pool.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, id]);
    res.json({ message: 'Todo updated' });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM todos WHERE id = ?', [id]);
    res.json({ message: 'Todo deleted' });
});

module.exports = router;
