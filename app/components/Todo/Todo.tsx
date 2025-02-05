"use client";

import { useState } from "react";

const Todo = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<
    { text: string; completed: boolean }[]
  >([]);

  const addTodo = () => {
    // ===
    // !==
    // >
    // <
    // >=
    // <=
    // todoText.length

    if (todoText.length <= 3) {
      alert("Todo text length should greater than or equal to 3");
      return;
    }
    const newObj = { text: todoText, completed: false };
    const newTodoList = [...todoList, newObj];
    setTodoList(newTodoList);
    setTodoText("");
  };

  const deleteTodo = (itemName: string, idx: number) => {
    const obj = todoList.find((itm, index) => index === idx)
    if(!obj?.completed) {
      alert('uncompleted todo unable to delete')
      return
    }

    const newTodoList = todoList.filter((todo) => todo.text != itemName);
    setTodoList(newTodoList);
  };

  const toggleState = (index: number) => {
    const newTodoList = todoList.map((todo, idx) => {
      if (index === idx) {
        todo.completed = true;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen gap-5">
      <ul>
        {todoList.map((todo, index) => (
          <li key={index} className="flex gap-5 p-2">
            {todo.text}
            <span
              className={
                todo.completed
                  ? "bg-blue-600 cursor-pointer rounded-sm p-2"
                  : " bg-green-800 cursor-pointer rounded-sm p-2"
              }
              onClick={() => toggleState(index)}
            >
              {todo.completed ? "Completed" : "Todo"}
            </span>
            <span
              className="cursor-pointer"
              onClick={() => deleteTodo(todo.text, index)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
      <input
        value={todoText}
        type="text"
        className="px-4 py-2 border"
        onChange={(event) => setTodoText(event.target.value)}
      />
      <button
        onClick={addTodo}
        className="bg-blue-800 text-white p-5 rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default Todo;
