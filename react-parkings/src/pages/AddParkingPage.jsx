import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string().required("Voornaam is verplicht!"),
  lastName: Yup.string().min(3, "Minstens 3 karakters!").required(),
  age: Yup.number("Dit is geen geldig getal!")
    .integer("Dit is geen geldig getal!")
    .positive("Moet een positief getal zijn!")
    .required(),
  email: Yup.string().email().required(),
});

const AddParkingPage = () => {
  // const [fName, setFName] = useState("David");

  // const handleSubmit = (event) => {
  //   // Dit mag als laatste staan in uw listener
  //   event.preventDefault();
  // };

  // Formik gebruiken a.h.v. de hook
  const { values, handleChange, handleSubmit, errors, dirty } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: schema,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <form
        className="border rounded-lg w-3/4 mx-auto my-auto p-6"
        // onSubmit={(event) => {
        //   event.preventDefault();
        // }}
        onSubmit={handleSubmit}>
        <label className="text-xs font-thin uppercase" htmlFor="firstName">
          Voornaam:
        </label>
        <input
          className="px-4 py-2 border rounded-lg block w-full"
          name="firstName"
          id="firstName"
          type="text"
          // value={fName}
          value={values.firstName}
          // required
          // onChange={(event) => {
          //   setFName(event.target.value);
          // }}
          onChange={handleChange}
        />
        <p>{errors.firstName}</p>

        <label className="text-xs font-thin uppercase" htmlFor="lastName">
          Achternaam:
        </label>
        <input
          className="px-4 py-2 border rounded-lg block w-full"
          name="lastName"
          id="lastName"
          type="text"
          // value={fName}
          value={values.lastName}
          // onChange={(event) => {
          //   setFName(event.target.value);
          // }}
          onChange={handleChange}
        />
        <p>{errors.lastName}</p>

        <label className="text-xs font-thin uppercase" htmlFor="email">
          Email:
        </label>
        <input
          className="px-4 py-2 border rounded-lg block w-full"
          name="email"
          id="email"
          type="text"
          // value={fName}
          value={values.email}
          // onChange={(event) => {
          //   setFName(event.target.value);
          // }}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <label className="text-xs font-thin uppercase" htmlFor="age">
          Leeftijd:
        </label>
        <input
          className="px-4 py-2 border rounded-lg block w-full"
          name="age"
          id="age"
          type="number"
          // value={fName}
          value={values.age}
          // onChange={(event) => {
          //   setFName(event.target.value);
          // }}
          onChange={handleChange}
        />
        <p>{errors.age}</p>

        {dirty && (
          <button
            className="px-4 py-2 bg-teal-600 text-white hover:bg-teal-500 rounded-lg my-4 w-full"
            type="submit">
            Verstuur
          </button>
        )}
      </form>
    </div>
  );
};

export default AddParkingPage;
