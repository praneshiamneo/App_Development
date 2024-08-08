import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../Assets/CSS/auth.css";
import tourism from "../../Assets/Images/tourism-bg.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = ({ setLoginStatus }) => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef(""); // Add this line if not already defined

  const handleFormSubmit = async () => {
    const username = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Make a POST request to the authentication endpoint
      const response = await axios.post(
        "http://localhost:8080/products/authenticate",
        {
          username: username,
          password: password,
        }
      );

      // Save the token in session storage
      sessionStorage.setItem("token", response.data);
      console.log(response.data);
      console.log(sessionStorage.getItem("token"));
      console.log(Date.now())
      //set token expiration for 1 day
      sessionStorage.setItem("tokenExpiration", Date.now() + 86400000);
      setLoginStatus(true);
      // Redirect to the home page or other route
      navigate("/home");
      // Replace '/home' with the desired route
      // For example: navigate('/home');
    } catch (error) {
      // Handle any errors from the API request
      console.error("Error:", error);
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
          <h1 className="title">Sign In</h1>
          <div className="group">
            <input
              type="text"
              required
              className="group_input"
              placeholder="Username"
              ref={emailRef}
            />
          </div>
          <div className="group">
            <input
              type="password"
              required
              className="group_input"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <button className="sign_in" onClick={handleFormSubmit}>
            Sign In
          </button>
          <div className="cta">
            <Link to="/remember_me" className="cta_text">
              Remember me
            </Link>
            <Link to="/help" className="cta_text cta_text_need_help">
              Need help?
            </Link>
          </div>
          <div className="form_text">
            <p>
              New to Rovertours?{" "}
              <Link to="/register" className="next_auth">
                Sign up now
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

export default Login;
