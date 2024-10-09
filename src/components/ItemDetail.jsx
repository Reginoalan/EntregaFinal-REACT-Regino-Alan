
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const price = item.cardmarket?.prices?.lowPrice || 'N/A'; // Accediendo al precio

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.images?.large} alt={item.name} />
      <p>Precio: ${price}</p>
      <p>Tipo: {item.types?.join(', ') || 'N/A'}</p>
      <p>Descripción: {item.flavorText || 'Sin descripción'}</p>
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddItemButton onClick={() => addItem({ ...item, quantity })} />
    </div>
  );
};

export default ItemDetail;


