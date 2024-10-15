import React from "react";
import CourseItem from "./CourseItem";
import MyButton from "./MyButton";

const Courses = ({ courses, secondProp }) => {
  const handleClick = () => {
    alert("Er is een alert");
  };

  return (
    <>
      {/* Component gebruiken met tag syntax */}
      <MyButton onClick={handleClick}>Courses BTN</MyButton>
      <ul>
        <li>{secondProp}</li>
        {courses.map((c) => (
          <CourseItem key={c} course={c} />
        ))}
      </ul>
    </>
  );
};

export default Courses;
