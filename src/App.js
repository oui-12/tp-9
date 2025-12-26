import React from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1 className="my-4">Gestion des Comptes Bancaires</h1>
      <div className="row">
        <div className="col-md-6">
          <CompteForm />
        </div>
        <div className="col-md-6">
          <CompteList />
        </div>
      </div>
    </div>
  );
}

export default App;