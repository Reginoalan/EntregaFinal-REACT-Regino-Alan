const ItemQuantitySelector = ({ quantity, setQuantity }) => (
    <div>
      <button type="button" class="btn btn-danger" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
      <span>{quantity}</span>
      <button type="button" class="btn btn-success" onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
  
  export default ItemQuantitySelector;
  