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

  return (
    <div className="count">
      <button onClick={() => setStep((step) => step - 1)}>-</button>
      <span>Step: {step}</span>
      <button onClick={() => setStep((step) => step + 1)}>+</button>
      <br />
      <button onClick={() => setCount((count) => count - step)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount((count) => count + step)}>+</button>
      <p>
        <span>
          {count === 0
            ? `today is ${date.toDateString()}`
            : count > 0
            ? `${count} days from today is ${date.toDateString()}`
            : `${absoluteValue} days ago was ${date.toDateString()}`}
        </span>
      </p>
    </div>
  );
}

export default App;
