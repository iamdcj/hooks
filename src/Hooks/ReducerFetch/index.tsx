import React, { useReducer, useEffect } from "react";

export interface BasicToggleProps {}

const ReducerFetch: React.SFC<BasicToggleProps> = () => {
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    { loading: false, results: null, error: false }
  );

  const fetchItems = () => {
    setState({ loading: true });

    fetch(`http://5e3f3b0364c3f6001455102a.mockapi.io/v0/comments`)
      .then(response => response.json())
      .then(todos => {
        if (!Array.isArray(todos)) {
          setState({ loading: false, error: true });
        } else {
          setState({ loading: false, results: todos });
        }
      })
      .catch(() => {
        setState({ loading: false, error: true });
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <section>
      <h1>Fetch with useReducer</h1>
      <p>useReducer is good for handling complex state.</p>
      {state.loading && "loading"}
      {state.error && "error"}
      {!state.loading &&
        Array.isArray(state.results) &&
        state.results.length > 0 &&
        state.results.map((i: any) => <div key={i.name}>{i.name}</div>)}
    </section>
  );
};

export default ReducerFetch;
