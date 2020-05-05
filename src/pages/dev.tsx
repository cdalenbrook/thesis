import React from "react";

interface IState {
  count: number;
  loading: boolean;
}

function DevArea() {
  const [error, setError] = React.useState<string>("");
  const [state, setState] = React.useState<IState>({
    count: 0,
    loading: true,
  });

  React.useEffect(() => {
    console.log("hello charlie i love you");

    return () => {
      alert("hello");
    };
  }, []);

  return (
    <>
      {state.loading ? <h1>Loading</h1> : <h1>{state.count}</h1>}
      <button
        onClick={() =>
          setState({ loading: !state.loading, count: state.count + 1 })
        }
      >
        Click me!
      </button>
      {error && (
        <h1 style={{ color: "red" }} onClick={() => setError("")}>
          {error}
        </h1>
      )}
      <button onClick={() => setError("something crazy")}>error me bro</button>
    </>
  );
}

export default DevArea;
