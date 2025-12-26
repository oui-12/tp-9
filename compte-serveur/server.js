const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let comptes = []; // Stockage temporaire en mémoire

// Récupérer tous les comptes
app.get('/api/comptes', (req, res) => {
  res.json(comptes);
});

// Ajouter un compte
app.post('/api/comptes', (req, res) => {
  const nouveauCompte = { id: Date.now(), ...req.body };
  comptes.push(nouveauCompte);
  res.status(201).json(nouveauCompte);
});

const PORT = 8082;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
