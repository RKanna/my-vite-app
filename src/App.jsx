import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="mainDiv flex justify-center items-center h-screen">
      <div className="flex flex-col gap-11 justify-center items-center">
        <h1>Hi</h1>
        <p className="text-4xl">Count: {count}</p>
        <div className="button-div flex gap-5 justify-center items-center">
          <button
            onClick={increase}
            className="py-4 px-8 border bg-black text-white hover:bg-yellow-400 transition duration-500 ease-in-out rounded"
          >
            Increase
          </button>
          <button
            onClick={reset}
            className="py-4 px-8 border bg-black text-white hover:bg-yellow-400 transition duration-500 ease-in-out rounded"
          >
            Reset
          </button>
          <button
            onClick={decrease}
            className="py-4 px-8 border bg-black text-white hover:bg-yellow-400 transition duration-500 ease-in-out rounded"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );

  function decrease() {
    if (count === 0) {
      return 0;
    } else {
      setCount(count - 1);
    }
  }
  function increase() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }
}

export default App;
