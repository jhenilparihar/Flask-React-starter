import React from "react";

export const Form = ({ userInput, handleChange, handleFormSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => handleChange(e.target.value)}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};
