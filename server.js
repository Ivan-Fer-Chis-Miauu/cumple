import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { db } from './firebase'; // Asegúrate de importar tu configuración de Firebase
import { collection, addDoc, getDocs } from "firebase/firestore";

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
app.get('/guests/count', async (req, res) => {
    try {
        const snapshot = await getDocs(collection(db, "guests"));
        const count = snapshot.size; // Obtiene el número de documentos en la colección
        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
