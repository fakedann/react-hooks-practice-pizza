import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelected] = useState({topping: '', size: '', vegetarian: ''})
  useEffect( () => {
    fetch(`http://localhost:3001/pizzas`)
    .then(data => data.json())
    .then( data => setPizzas(data))
  }, [])

  function sendPizza(top){
    setSelected(pizzas.find( pizObj => pizObj.topping === top))
  }

  function editPizza(pizza){
    fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(pizza)
    })
    .then( () => {
      const newArr = pizzas.map( pizObj => {
        if (pizObj.id === pizza.id){
          return pizza
        }
        return pizObj
      })
      setPizzas(newArr)
    })
    
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={selectedPizza} setSelected={setSelected} onSubmittedForm={editPizza}/>
      <PizzaList pizzas={pizzas} onClickedPizza={sendPizza}/>
    </>
  );
}

export default App;
