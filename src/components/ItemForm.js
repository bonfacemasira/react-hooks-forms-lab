import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [input, setInput] = useState({id:null, name:"", category:"Produce"});

  function handleChange(event) {
    const {name, value} = event.target;
    setInput({...input, id:uuid(), [name]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(input);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
