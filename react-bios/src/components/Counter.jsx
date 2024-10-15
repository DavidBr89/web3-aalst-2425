import React, { useEffect, useState } from "react";
import MyButton from "./MyButton";
import CounterButtons from "./CounterButtons";

const Counter = () => {
  // Opgelet destructuren uit een array - useState geeft een array terug

  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  //   Dit maakt een loop
  //   useEffect(() => {
  //     console.log("Counter component gerenderd");
  //     setCounter(counter + 1);
  //   });

  return (
    <div className="border-2 border-black m-4 p-4">
      <p className="text-center">Counter</p>
      <p>{counter}</p>

      <CounterButtons counter={counter} setCounter={setCounter} />

      <p>Geschiedenis:</p>

      <MyButton
        onClick={() => {
          // Immutable manier
          setHistory([...history, counter]);
        }}>
        Voeg toe
      </MyButton>

      {/* Conditioneel renderen */}
      {history.length ? (
        <ul>
          {history.map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>
      ) : (
        <p>Geen geschiedenis</p>
      )}
    </div>
  );
};

export default Counter;
