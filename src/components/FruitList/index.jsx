function FruitList({ fruits }) {
  return (
    <div>
      <h3>{fruits.name}</h3>
      <h3>{fruits.color}</h3>
      <h3>{fruits.price}</h3>
    </div>
  );
}

export default FruitList;
