const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Para servir archivos estáticos

// Endpoint para agregar un nuevo invitado
app.post('/guests', (req, res) => {
    const { name } = req.body;
    db.run(`INSERT INTO guests (name) VALUES (?)`, [name], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).json({ id: this.lastID });
    });
});

// Endpoint para obtener el conteo de invitados
app.get('/guests/count', (req, res) => {
    db.get(`SELECT COUNT(*) as count FROM guests`, (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json({ count: row.count });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
