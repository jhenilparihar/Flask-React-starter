import { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import TodoPage from "./pages/TodoPage";
import TodoItem from "./pages/TodoItem";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoPage />,
    },
    {
      path: "/todo/:id",
      element: <TodoItem />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
