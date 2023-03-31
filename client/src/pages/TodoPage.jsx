import React from "react";
import { useState, useEffect } from "react";

import { Card } from "../components/card";

const TodoPage = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodo(data));
  }, []);
  return (
    <div>
      <Card TodoList={todo} />
    </div>
  );
};

export default TodoPage;
