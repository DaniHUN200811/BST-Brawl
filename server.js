const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// MySQL kapcsolat beállítása
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // Állítsd be a megfelelő felhasználónevet
    password: '',         // Állítsd be a megfelelő jelszót
    database: 'contact_form'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Middleware beállítás
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Statikus fájlok kiszolgálása
app.use(express.static('public'));

// Kapcsolat űrlap adatainak kezelése
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';

    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            res.status(500).send('Hiba történt az adatok mentése közben.');
            throw err;
        }
        res.send('Üzenet elküldve!');
    });
});

// Szerver indítása
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
