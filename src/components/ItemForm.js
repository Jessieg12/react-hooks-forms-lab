import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setNewItem] = useState('')
  const [category, setCategory] = useState('Produce')

  function handleNewItem(event){
    setNewItem(event.target.value)
  }

  function handleChange(event){
    setCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input 
        type="text"
        name="name"
        value={name}
        onChange={handleNewItem} />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleChange}
        >
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
