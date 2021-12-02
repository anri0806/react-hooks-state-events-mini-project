import React from "react";

function CategoryFilter({ categories, onSelectFilter, selectedCategory }) {


  const categoryButton = categories.map(category => {
    const className = category === selectedCategory ? "selected" : null

    return (
      <button onClick={() => onSelectFilter(category)} className={className} key={category}>{category}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
