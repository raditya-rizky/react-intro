import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <p
        style={{
          marginBottom: 8,
          fontWeight: "bold",
        }}
      >
        {count}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </>
  );
}

export default Count;
