import React from "react";
import styles from "./CourseItem.module.css";

const CourseItem = (props) => {
  const { course } = props;

  return <li className={styles.text}>{course}</li>;
};

export default CourseItem;
