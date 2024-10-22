// Import vanuit een dependency
import React from "react";
import "./App.css";
import Courses from "./components/Courses";
import MyButton from "./components/MyButton";
import Counter from "./components/Counter";
import { useDarkMode } from "./contexts/DarkModeContext";

function App() {
  const darkModeObj = useDarkMode();

  const subTitle = "React & Node.js";
  const { fName, lName } = {
    fName: "David",
    lName: "Breckx",
  };

  const courses = ["Web1", "Web2", "Web3", "Mobile", "Programmeren Basis"];

  const handleClick = (event) => {
    console.log("Geklikt op de knop", event.target);
  };

  // JSX returnen
  return (
    <div className={darkModeObj.isDarkMode ? "bg-slate-600" : "bg-white"}>
      <h1 className="text-2xl text-center text-red-600">Web 3</h1>
      <h3>{subTitle}</h3>

      <p>{`${fName} ${lName}`}</p>

      <Counter />

      {/* Gebruiken van een andere component */}
      <Courses courses={courses} secondProp={2} />

      {/* Eigen props meegeven als attribuut aan element */}
      <MyButton onClick={handleClick}>
        <div>
          <p>BTN FROM DIV</p>
        </div>
      </MyButton>

      <p className="text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi fugiat
        sed vitae voluptatum facere aperiam excepturi reiciendis dignissimos
        qui. Quo natus nostrum non hic ea voluptatum perferendis commodi dolores
        nihil?
      </p>
      <p className="text">
        Quaerat, porro ducimus. Libero doloribus ipsam rem nobis distinctio quis
        vel impedit quos qui laborum ut autem aliquid, voluptatem sint aut
        deserunt veritatis voluptas inventore officia doloremque consectetur
        tempora eligendi.
      </p>
      <p className="text">
        Modi, accusantium eligendi dolor maxime molestiae voluptate magni
        mollitia expedita a fuga iusto nam eum nobis recusandae quasi hic quidem
        nihil unde quas id. Consequuntur sunt modi eligendi eaque natus.
      </p>
    </div>
  );
}

export default App;
