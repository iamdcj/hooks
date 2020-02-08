import React, { useState } from "react";

export interface FetchProps {}

const Fetch: React.SFC<FetchProps> = () => {
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(todos => {
        setItems(todos);
      });
  };

  return (
    <div>
      {items.map((i: any) => (
        <div>{i.title}</div>
      ))}
      <button onClick={fetchItems}>Fetch Items</button>
    </div>
  );
};

export default Fetch;
