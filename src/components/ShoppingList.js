import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("")
  // const [itemList, setItemList] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event){
    setSearchTerm(event.target.value)
  }

  const itemsToDisplay = items
    .filter((item) => selectedCategory === "All" || item.category === selectedCategory
    )

    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // function updateItemList(newInput) {
  //   setItemList([...itemList, newInput])
  // }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onSearchChange={handleSearch} onCategoryChange={handleCategoryChange} searchTerm={searchTerm} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
