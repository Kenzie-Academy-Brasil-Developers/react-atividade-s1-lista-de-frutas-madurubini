import "./App.css";
import { useState } from "react";
import FruitList from "./components/FruitList/fruitList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const fruitNames = fruits.map((fruit, index) => {
    return <li key={index}>{fruit.name}</li>;
  });

  const redFruits = fruits
    .filter((fruit) => fruit.color === "red")
    .map((fruit, index) => <li key={index}>{fruit.name}</li>);

  function filterRedFruit() {
    return setFruits(redFruits);
  }

  const totalPrice = fruits.reduce((acc, value) => {
    return value.price + acc;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>O preço total é de {totalPrice}</p>
          {/* <FruitList fruit={fruits}></FruitList> */}
          <p>{fruitNames}</p>
          <button>Clique aqui para filtrar</button>
          {/* <p>{redFruits}</p> */}
        </div>
      </header>
    </div>
  );
}

export default App;
