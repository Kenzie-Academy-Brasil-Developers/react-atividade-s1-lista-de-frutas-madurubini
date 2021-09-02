import "./App.css";
import { useState } from "react";
import FruitList from "./components/FruitList/FruitList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const fruitNames = fruits.map((fruit, index) => {
    return <li key={index}>{fruit.name}</li>;
  });

  const filterRedFruits = () => {
    setFruits(fruits.filter((fruit) => fruit.color === "red"));
  };

  const totalPrice = fruits.reduce((acc, value) => {
    return value.price + acc;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>O preço é de : {totalPrice}</h3>

          <ul>{fruitNames}</ul>
          <button onClick={filterRedFruits}>Filter red fruits</button>
        </div>
      </header>
    </div>
  );
}

export default App;
