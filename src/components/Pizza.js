import React from "react";

function Pizza({pizza, onClickedPizza}) {

  function handleClick(e){
    onClickedPizza(e.target.parentNode.parentNode.children[0].innerText)
  }
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'Yes': 'No'}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
