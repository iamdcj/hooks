import React, { useState, useEffect } from "react";

export interface FetchProps {}

const Fetch: React.SFC<FetchProps> = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchItems = (p: number) => {
    fetch(`http://5e3f3b0364c3f6001455102a.mockapi.io/v0/comments${p}`)
      .then(response => response.json())
      .then(todos => {
        setItems(todos);
      });
  };

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  return (
    <div>
      {items.map((i: any) => (
        <div>{i.name}</div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(1)}>
        1
      </button>
      <button disabled={page === 2} onClick={() => setPage(2)}>
        2
      </button>
    </div>
  );
};

export default Fetch;
