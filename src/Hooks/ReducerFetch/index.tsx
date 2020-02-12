import React, { useReducer, useEffect } from "react";

export interface BasicToggleProps {}

const ReducerFetch: React.SFC<BasicToggleProps> = () => {
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    { loading: false, results: null }
  );

  const fetchItems = () => {
    setState({ loading: true });

    fetch(`http://5e3f3b0364c3f6001455102a.mockapi.io/v0/comments1`)
      .then(response => response.json())
      .then(todos => {
        setState({ loading: false, results: todos });
      })
      .catch(() => {
        setState({ loading: false });
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Fetcher with useReducer</h1>
      {state.loading && "loading"}
      {state.results &&
        state.results.length > 0 &&
        state.results.map((i: any) => <div key={i.name}>{i.name}</div>)}
    </div>
  );
};

export default ReducerFetch;
