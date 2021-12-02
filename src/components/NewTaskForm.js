import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleText(e) {
    setText(e.target.value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleSubmitChild(e) {
    e.preventDefault();

    const newItem = {
      text: text,
      category: category
    }

    onTaskFormSubmit(newItem);
  }

  const categoryList = categories.map((category) => {
    return <option key={category}>{category}</option>;
  });

  return (
    <form className="new-task-form" onSubmit={handleSubmitChild}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
