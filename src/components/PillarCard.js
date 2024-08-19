import React from 'react';
import './PillarCard.css';

function PillarCard({ title, description, image }) {
  return (
    <div className="pillar-card">
      <div className="card-upper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-lower">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PillarCard;
