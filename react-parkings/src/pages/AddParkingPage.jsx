import React, { useState } from "react";

const AddParkingPage = () => {
  const [fName, setFName] = useState("David");

  const handleSubmit = (event) => {
    // Dit mag als laatste staan in uw listener
    event.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <input
          className="px-4 py-2 border rounded-lg"
          name="fName"
          type="text"
          value={fName}
          onChange={(event) => setFName(event.target.value)}
        />
        <button type="submit">Verstuur</button>
      </form>
    </div>
  );
};

export default AddParkingPage;
