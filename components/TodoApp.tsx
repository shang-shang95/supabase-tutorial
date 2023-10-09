import React from "react";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <section className="text-center mb-2 text-2xl font-medium">
      <h3 className="mb-4">Supabase Todo App</h3>
      <form>
        <input
          type="text"
          className="mr-2 shadow-lg p-1 outline-none border-radius border-2"
        />
        <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-400">
          Add
        </button>
      </form>
      <TodoList />
    </section>
  );
};

export default TodoApp;
