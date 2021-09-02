function FruitList({ fruits: { name, color, price } }) {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{color}</h3>
      <h3>{price}</h3>
    </div>
  );
}

export default FruitList;
