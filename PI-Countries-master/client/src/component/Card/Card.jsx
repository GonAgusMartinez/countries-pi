import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ country }) => {
  const { flag, name, continent } = country;

  return (
    <Link to={`/countries/${name}`} className="card-link">
      <div className="card">
        <img src={flag} alt={`${name} flag`} className="card-img" />
        <div className="card-info">
          <h2 className="card-title">{name}</h2>
          <p className="card-continent">{continent}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;