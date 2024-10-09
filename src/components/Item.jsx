
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  const price = item.cardmarket?.prices?.lowPrice || 'N/A'; // Accediendo al precio

  return (
    <div className="col-md-3 mb-4"> 
      <div className="card text-center">
        <img src={item.images?.small} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Precio: ${price}</p>
          <Link className="btn btn-primary" to={`/detalle/${item.id}`}>Ver Detalles</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;

