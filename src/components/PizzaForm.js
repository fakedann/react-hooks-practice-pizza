
import React, { useEffect, useState } from "react";

function PizzaForm({pizza, setSelected, onSubmittedForm}) {

  
  function handleChange(e){
    const name = e.target.name
    let value = e.target.value

    if (e.target.type === "radio") {
      value = e.target.checked;
    }
    setSelected({...pizza, [name]: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    onSubmittedForm(pizza)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizza.topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={pizza.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              checked={pizza.vegetarian}
              onChange={handleChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              checked={!pizza.vegetarian}
              onChange={handleChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
