// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ selectedSet }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${selectedSet}`);
        const json = await response.json();
        setItems(json.data || []); // Usar los datos de la respuesta
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    // Solo hacer la búsqueda si hay un set seleccionado
    if (selectedSet) {
      fetchItems();
    } else {
      setLoading(false);
    }
  }, [selectedSet]);

  if (loading) return <p>Cargando productos...</p>;

  return <ItemList items={items} />;
};

export default ItemListContainer;



