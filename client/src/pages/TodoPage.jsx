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
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <Card />
    </div>
  );
};

export default TodoPage;
