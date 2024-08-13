import { useState } from "react";
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const absoluteValue = Math.abs(count);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function reset() {
    setStep(0);
    setCount(1);
  }

  return (
    <div className="count">
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>{step}</span>
      {/* <button onClick={() => setStep((step) => step - 1)}>-</button>
      <span>Step: {step}</span>
      <button onClick={() => setStep((step) => step + 1)}>+</button> */}
      <br />
      <div>
        <button
          className="btn"
          onClick={() => setCount((count) => count - step)}
        >
          -
        </button>

        <input
          className="btn"
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />

        <button
          className="btn"
          onClick={() => setCount((count) => count + step)}
        >
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? `today is ${date.toDateString()}`
            : count > 0
            ? `${count} days from today is ${date.toDateString()}`
            : `${absoluteValue} days ago was ${date.toDateString()}`}
        </span>
      </p>

      {(count > 0 || step > 1) && (
        <button className="btn" onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
