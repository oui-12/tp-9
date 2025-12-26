import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteForm() {
  // Initialisation de l'état pour stocker les données du formulaire
  const [compte, setCompte] = useState({ 
    nom: '',
    prenom: '',
    solde: ''
  });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompte(prevState => ({
      ...prevState,
      [name]: name === 'solde' ? parseFloat(value) : value
    }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    try {
      const response = await axios.post(`${API_BASE_URL}/comptes`, compte);
      alert('Compte ajouté avec succès!');
      // Reset form after successful submission
      setCompte({ 
        nom: '',
        prenom: '',
        solde: ''
      });
      // Refresh the page to show the new account
      window.location.reload();
    } catch (error) {
      console.error('Erreur lors de l\'ajout du compte:', error);
      alert('Erreur lors de l\'ajout du compte. Veuillez réessayer.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input 
            type="text" 
            name="nom" 
            className="form-control" 
            value={compte.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Prénom</label>
          <input 
            type="text" 
            name="prenom" 
            className="form-control" 
            value={compte.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Solde</label>
          <input 
            type="number" 
            name="solde" 
            className="form-control" 
            value={compte.solde || ''}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date de Création</label>
          <input 
            type="date" 
            name="dateCreation" 
            className="form-control" 
            value={compte.dateCreation}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select 
            name="type" 
            className="form-select" 
            value={compte.type}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez un type</option>
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default CompteForm;
