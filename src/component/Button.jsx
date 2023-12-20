import { useState } from "react";
import "./App.css";

function Button() {
  // create a counter that increaments
  // useState
  // const [counter1, setCounter1] = useState(0);
  const [counter, setCounter] = useState({ a: 0, b: 0 });

  function handleButtonA() {
    setCounter({ a: counter.a + 1, b: counter.b });
  }
  function handleButtonB() {
    setCounter({ a: counter.a, b: counter.b + 1 });
  }

  return (
    <>
      <button onClick={handleButtonA}>counter1: {counter.a}</button>
      <button onClick={handleButtonB}>counter2: {counter.b}</button>

      <button
        onClick={() => {
          const diffObj = { ...counter };
          // const diffObj = {a:0, b:0};
          diffObj.a += 1;
          setCounter(diffObj);
        }}
      >
        counter with diffObj: {counter.a}
      </button>
    </>
  );
}

export default Button;
