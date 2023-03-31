import React from "react";

export const Card = ({ TodoList }) => {
  return (
    <div>
      <ul>
        {TodoList.map((todo) => {
          return <li key={todo.id}>{todo.content}</li>;
        })}
      </ul>
    </div>
  );
};
