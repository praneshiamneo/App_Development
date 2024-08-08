import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../Assets/CSS/auth.css";
import tourism from "../../Assets/Images/tourism-bg.jpeg";
import axios from "axios";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleFormSubmit = async () => {
    console.log("Hello");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const roles = document.getElementById("role").value;

    try {
      const response = await axios.post("http://localhost:8080/products/new", {
        name: name,
        email: email,
        password: password,
        roles: roles,
      });
      console.log("API response:", response.data);
      // Handle successful response
    } catch (error) {
      if (error.response.status === 403) {
        console.log("Error: Forbidden (403)");
        // Handle 403 error
      } else {
        console.error("Error:", error);
        // Handle other errors
      }
    }
  };
  return (
    <div
      style={{
        height: "100lvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${tourism})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="form">
          <h1 className="title">Sign Up</h1>
          <div className="group">
            <input
              type="text"
              required
              className="group_input"
              name="name"
              id="name"
              placeholder="Name"
              ref={nameRef}
            />
          </div>
          <div className="group">
            <input
              type="email"
              required
              className="group_input"
              name="email"
              id="email"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div className="group">
            <input
              type="password"
              required
              className="group_input"
              name="password"
              id="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <input type="hidden" value={"ROLE_USER"} name="role" id="role" />
          <button className="sign_up" onClick={handleFormSubmit}>
            Sign Up
          </button>
          <div className="form_text">
            <p>
              Existing Rovertours User?{" "}
              <Link to="/login" className="next_auth">
                Sign in here
              </Link>
              .
            </p>
          </div>
          <div className="form_text_secondary">
            <p>
              <br />
              This page is protected by Google reCAPTCHA to
              <br />
              ensure you&apos;re not a bot.{" "}
              <Link to="/learn_more" className="learn_more">
                Learn more
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
