import React, { useEffect } from "react";
import MyButton from "./MyButton";

import { Button, Checkbox, Slider, TextField } from "@mui/material";

const CounterButtons = (props) => {
  const { counter, setCounter } = props;

  useEffect(() => {
    console.log("CounterButtons component gerenderd");
  });

  const increment = () => {
    // Updater functie -> zorgt ervoor dat React gaat rerenderen
    const newCounter = counter + 1;
    // Dit is eigenlijk asynchrone uitvoering
    setCounter(newCounter);
    // counter += 1;
    console.log(newCounter);
  };

  const decrement = () => {
    setCounter(counter - 1);
    // counter -= 1;
    console.log(counter);
  };
  return (
    <div>
      {/* <MyButton onClick={decrement}>-</MyButton> */}

      <Button
        variant="contained"
        onClick={decrement}
        color="error"
        sx={{ margin: 2 }}>
        -
      </Button>

      <Button variant="contained" onClick={increment} color="success">
        +
      </Button>
    </div>
  );
};

export default CounterButtons;
