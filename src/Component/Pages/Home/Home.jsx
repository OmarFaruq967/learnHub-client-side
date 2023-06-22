import React from "react";
import Slide from "./Slide";
import About from "./About";
import AboutCourses from "./AboutCourses";
import PopularCoureses from "./PopularCourses";
import InstructorCard from "./InasructorCard/InstructorCard";


const Home = () => {
  return (
    <div>
      <Slide />
      <About/>
      <AboutCourses/>
      <PopularCoureses/>
      <InstructorCard/>
    </div>
  );
};

export default Home;
