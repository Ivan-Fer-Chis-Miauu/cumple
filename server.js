import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { db } from './firebase'; // Asegúrate de importar tu configuración de Firebase
import { collection, addDoc } from "firebase/firestore";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Para servir archivos estáticos

// Endpoint para agregar un nuevo invitado
app.post('/guests', async (req, res) => {
    const { name } = req.body;
    try {
        const docRef = await addDoc(collection(db, "guests"), { name });
        res.status(201).json({ id: docRef.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
