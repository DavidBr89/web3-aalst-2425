import React from "react";
import CourseItem from "./CourseItem";

const Courses = ({ courses, secondProp }) => {
  return (
    <ul>
      <li>{secondProp}</li>
      {courses.map((c) => (
        <CourseItem key={c} course={c} />
      ))}
    </ul>
  );
};

export default Courses;
