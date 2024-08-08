import React from "react";
import { useParams } from "react-router-dom";
import "../../Assets/CSS/userstyling.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from "react";

function CourseDescription() {
  //create an use state under the name of defaultCourses
  const [defaultCourses, setDefaultCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const tokenExpiration = sessionStorage.getItem("tokenExpiration");
        if (!token || Date.now() > tokenExpiration) {
          window.location.href = "/login";
        }

        const response = await axios.get("http://localhost:8080/products/all", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log(response.data);
        //set the defaultCoruses to response.data
        setDefaultCourses(response.data);
        console.log(sessionStorage.getItem("token"));
      } catch (error) {
        const token = sessionStorage.getItem("token");
        console.error("Error:", error);
        console.log("Bearer token" + token);
      }
    };

    fetchData();
  }, []);
  const { id } = useParams();
  const course = defaultCourses[id];
  console.log(id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <div>
        <h1>{course.name}</h1>
        <p>{"Quantity = " + course.qty + "\nPrice = " + course.price}</p>
      </div>
    </>
  );
}

export default CourseDescription;
