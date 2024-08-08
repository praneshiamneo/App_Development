import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../../Assets/CSS/userstyling.css";
import axios from "axios";
function Courses() {
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

  //   const defaultCourses = [
  //     {
  //       id: 1,
  //       title: "Python Programming",
  //       image: "https://assets.rbl.ms/33364099/origin.jpg",
  //       description: "Fundementals of programming using Python",
  //     },
  //     {
  //       id: 2,
  //       title: "Server computing - PHP",
  //       image: "https://kanhasoft.com/blog/wp-content/uploads/2018/09/PHP.jpg",
  //       description: "Server computing with MySQL DB managemnet using PHP",
  //     },
  //     {
  //       id: 3,
  //       title: "React JS",
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiTMn_5CUs3WlVSWPnIR0gJuRMTLoOBC2wT3X0yFQIsN9aPKKtceQXUVGxrKX9JBe86c&usqp=CAU",
  //       description: "Front end development using React JS frameworks",
  //     },
  //   ];
  return (
    <div>
      <Header />
      <h1>Courses page</h1>
      <div className="course-grid">
        {defaultCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiTMn_5CUs3WlVSWPnIR0gJuRMTLoOBC2wT3X0yFQIsN9aPKKtceQXUVGxrKX9JBe86c&usqp=CAU"
              }
              alt={course.title}
            />
            <h2>{course.name}</h2>
            <p>{"Quantity = " + course.qty + "\nPrice = " + course.price}</p>
            <Link to={`/user/course-description/${course.productId}`}>
              Enroll
            </Link>
          </div>
        ))}
        <div className="course-card">
          <img src="https://marketingai.mediacdn.vn/zoom/600_315/wp-content/uploads/2020/07/Google-sheet-thumb-1.jpg" />
          <h2>Google Sheets</h2>
          <p>Learn how to use Google Sheets</p>
          <Link to="/user/course-description/4">Enroll</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
