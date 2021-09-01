function FruitList({ fruit }) {
  return (
    <div>
      <h3>{fruit.name}</h3>
      <h3>{fruit.color}</h3>
      <h3>{fruit.price}</h3>
    </div>
  );
}

export default FruitList;
