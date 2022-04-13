import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, onClickedPizza}) {

  const pizzasDisplayed = pizzas.map( pizObj => <Pizza key={pizObj.id} pizza={pizObj} onClickedPizza={onClickedPizza}/>)
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzasDisplayed
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
