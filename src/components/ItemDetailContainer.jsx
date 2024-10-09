
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`);
        const json = await response.json();
        setItem(json.data);
      } catch (error) {
        console.error('Error al cargar el detalle del producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Cargando detalles...</p>;

  return item ? <ItemDetail item={item} /> : <p>Producto no encontrado</p>;
};

export default ItemDetailContainer;

