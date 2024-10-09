// src/components/Catalogo.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

const Catalogo = () => {
  const { name } = useParams(); // Obtener el término de búsqueda de los parámetros de la URL

  return (
    <div>
      <h1>Catálogo</h1>
      <h2>Bienvenidos a la tienda!</h2>
      <ItemListContainer selectedSet={name} />
    </div>
  );
};

export default Catalogo;





