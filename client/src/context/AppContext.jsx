import { createContext } from "react";
import React, { useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY
  const navigate = useNavigate()

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState([true]);

  

  // fetch all courses from the server

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses)
  }

  // function to calculate  average rating of  course

  const calculateRating = (course) => {
  if (!Array.isArray(course.courseRatings) || course.courseRatings.length === 0) {
    return 0;
  }

  const totalRating = course.courseRatings.reduce((sum, rating) => {
    return sum + rating.rating;
  }, 0);

  return totalRating / course.courseRatings.length;
};

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency, allCourses, navigate, calculateRating,isEducator,setIsEducator
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};