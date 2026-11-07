const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all tasks
router.get('/', (req, res) => {
    db.query('SELECT * FROM tasks ORDER BY id DESC', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Add a task
router.post('/', (req, res) => {
    const { title } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({ error: 'Task title is required' });
    }

    db.query(
        'INSERT INTO tasks (title) VALUES (?)',
        [title.trim()],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            res.status(201).json({
                message: 'Task added successfully!',
                id: result.insertId,
                title: title.trim()
            });
        }
    );
});

// Complete or uncomplete a task
router.patch('/:id/complete', (req, res) => {
    db.query(
        'UPDATE tasks SET completed = NOT completed WHERE id = ?',
        [req.params.id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Task not found' });
            }
            res.json({ message: 'Task status updated!' });
        }
    );
});

// Delete a task
router.delete('/:id', (req, res) => {
    db.query(
        'DELETE FROM tasks WHERE id = ?',
        [req.params.id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Task not found' });
            }
            res.json({ message: 'Task deleted successfully!' });
        }
    );
});

module.exports = router;