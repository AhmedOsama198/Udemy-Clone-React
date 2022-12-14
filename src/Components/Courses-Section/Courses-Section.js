import React from "react";
import Courses_Groups from "./GroupedCourses";
import { useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import "./Courses-Section.css"


function Courses_Section(props) {
  const data = props.data;
  console.log(data);
  const courses_details = props.courses_details 
  const courses_reviews = props.courses_reviews
  return (
    <section className="courses-section">
      <div>
        <h2 className="career-title">
          Expand your career opportunities with Python
        </h2>
        <p className="courses-paragraph">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to both
          beginners and advanced developers alike.
        </p>
        <button className="my-btn explore">Explore Python</button>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="courses">
          <Courses_Groups courses={data} courses_details={courses_details} courses_reviews={courses_reviews}/>
          </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Courses_Section;
