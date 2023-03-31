import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TodoItem = () => {
  const { id } = useParams();

  let navigate = useNavigate();
  const [todo, setTodo] = useState([]);
  useEffect(() => getTodoList(), []);

  const getTodoList = () => {
    fetch(`/api/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodo(data[0]));
  };
  const deleteTodo = (id) => {
    fetch(`/api/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };
  return (
    <div>
      <h1>{todo.content}</h1>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
