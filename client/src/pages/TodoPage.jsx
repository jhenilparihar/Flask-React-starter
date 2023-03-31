import React from "react";
import { useState, useEffect } from "react";

import { Card } from "../components/card";
import { Form } from "../components/form";

const TodoPage = () => {
  const [todo, setTodo] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  useEffect(() => getTodoList(), []);

  const getTodoList = () => {
    fetch("/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodo(data));
  };

  const handleFormSubmit = () => {
    fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        content: addTodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        console.log(message);
        setAddTodo("");
        getTodoList();
      });
  };
  return (
    <div>
      <Form
        userInput={addTodo}
        handleChange={setAddTodo}
        handleFormSubmit={handleFormSubmit}
      />
      <Card TodoList={todo} />
    </div>
  );
};

export default TodoPage;
