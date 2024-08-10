import React from "react";
import TodoItem from "./TodoItem";

const AddTodo = () => {
  return (
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center mb-4">
        <input
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Add a new task"
        />
        <input
          class="ml-2 py-2 border border-indigo-100 rounded-md"
          type="date"
        />
        <button class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add
        </button>
      </div>
      <TodoItem/>
      <TodoItem/>
    </div>
    
  );
  
};

export default AddTodo;
