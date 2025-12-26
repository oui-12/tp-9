import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteList() {
  // Déclaration d'un état pour stocker les comptes
  const [comptes, setComptes] = useState([]);

  // Utilisation de useEffect pour effectuer un appel à l'API dès le chargement
  useEffect(() => {
    axios.get(`${API_BASE_URL}/comptes`)
      .then(response => setComptes(response.data)) // Mise à jour de l'état avec les données récupérées
      .catch(error => console.error('Erreur lors de la récupération des comptes:', error)); // Gestion des erreurs
  }, []); // Le tableau vide indique que l'effet s'exécute uniquement au montage du composant

  return (
    <div className="container mt-4">
      <h2>Liste des Comptes</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Solde</th>
          </tr>
        </thead>
        <tbody>
          {comptes.map(compte => (
            <tr key={compte.id}>
              <td>{compte.id}</td>
              <td>{compte.nom}</td>
              <td>{compte.prenom}</td>
              <td>{compte.solde}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompteList;
