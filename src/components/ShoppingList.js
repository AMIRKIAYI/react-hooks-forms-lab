import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemes, setItemes] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setsearchText] = useState("")

  
  // const [itemes, setItemes] = useState(items);

  
  function onItemFormSubmit(newItem){
    setItemes([...itemes, newItem])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e){
    setsearchText(e.target.value)
    
  }

  const itemsToDisplay = itemes.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.name.toLowerCase().includes(searchText.toLowerCase()) && (item.category === selectedCategory);
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} searchText={searchText} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
