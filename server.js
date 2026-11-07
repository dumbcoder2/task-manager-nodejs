const express = require('express');
const path = require('path');
const db = require('./config/db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/tasks', require('./routes/tasks'));

app.get('/api/health', (req, res) => {
    res.json({ message: 'Task Manager API is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
