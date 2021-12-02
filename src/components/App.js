import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDeleteItem(text) {
    const deleteItem = tasks.filter((task) => task.text !== text);
    setTasks(deleteItem);
  }

  function handleSubmit(newItem) {
    setTasks([...tasks, newItem])
  }


  const filteredTask = tasks.filter((task) =>
    category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        onSelectFilter={setCategory}
        selectedCategory={category}
        categories={CATEGORIES}
      />
      <NewTaskForm onTaskFormSubmit={handleSubmit} categories={CATEGORIES.filter(cat => cat !== "All")} />
      <TaskList onClickDelete={handleDeleteItem} tasks={filteredTask} />
    </div>
  );
}

export default App;
