import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    fetchItems();
    return () => {
      fetchItems();
    };
  }, []);

  return (
    <div>
      {items.map((i: any) => (
        <div>{i.title}</div>
      ))}
    </div>
  );
};

export default Fetch;
