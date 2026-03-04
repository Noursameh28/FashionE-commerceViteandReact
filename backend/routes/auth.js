const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const DB_PATH = path.join(__dirname, '../db.json');

// Helper to read DB
const readDB = () => {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify({ users: [] }));
    }
    const data = fs.readFileSync(DB_PATH);
    return JSON.parse(data);
};

// Helper to write DB
const writeDB = (data) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

// Register
router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    const db = readDB();

    if (db.users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: Date.now(), email, password: hashedPassword, name, role: 'user' };

    db.users.push(newUser);
    writeDB(db);

    res.status(211).json({ message: 'User registered successfully' });
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const db = readDB();
    const user = db.users.find(u => u.email === email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

module.exports = router;
