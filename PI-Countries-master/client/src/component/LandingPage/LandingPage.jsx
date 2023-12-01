import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="background-image">
        <div className="content">
          <h1>Bienvenido a la Aplicación</h1>
          <p>Explora países y actividades turísticas</p>
          <Link to="/home">
            <button>Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;