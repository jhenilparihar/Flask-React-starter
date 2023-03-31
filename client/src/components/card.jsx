import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ TodoList }) => {
  return (
    <div>
      <ul>
        {TodoList.map((todo) => {
          return (
            <Link to={`todo/${todo.id}`}>
              <li key={todo.id}>
                <h3>{todo.content}</h3>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
