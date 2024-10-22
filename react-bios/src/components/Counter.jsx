import React, { useEffect, useRef, useState } from "react";
import MyButton from "./MyButton";
import CounterButtons from "./CounterButtons";

const Counter = () => {
  // Opgelet destructuren uit een array - useState geeft een array terug

  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  // Ref hook -> Referentie aanmaken meestal met uw DOM tree element
  // STAP 1: Nieuwe referentie aanmaken
  const inputRef = useRef();
  // { current: undefined } -> Krijg je terug van de useRef hook

  //   Dit maakt een loop
  // useEffect type 1

  useEffect(() => {
    console.log("TYPE 1");
    // setCounter(counter + 1);
  });

  // useEffect type 2
  // Lege array als tweede argument
  // Om code uit te voeren bij het mounten van uw component - dus 1 malig
  useEffect(() => {
    console.log("TYPE 2");
  }, []);

  useEffect(() => {
    console.log("TYPE 2a");
  }, [history]);

  // useEffect Type 3
  useEffect(() => {
    const timerId = setInterval(() => {
      setCounter(counter + 1);
      console.log(counter);
    }, 1000);

    // Cleanup functie returnen -> Connecties afsluiten,
    // event listeners te stoppen, timers stoppen, ...
    // Als de component geunmounted wordt -> Wordt deze functie opgeroepen
    return () => {
      clearInterval(timerId);
    };
  }, [counter]);

  // TYPE 2
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="border-2 border-black m-4 p-4">
      <p className="text-center">Counter</p>
      <p>{counter}</p>

      <input
        className="border rounded-md px-4 py-2"
        type="text"
        placeholder="Vak"
        // STAP 2: Koppeling van uw referentie
        ref={inputRef}
      />

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
