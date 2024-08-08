import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../Assets/CSS/userstyling.css";
import profileImage from "../../Assets/Images/profile-default.jpg";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Pranesh");
  const [email, setEmail] = useState("pranesh@example.com");
  const [contactNumber, setContactNumber] = useState("123-456-7890");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Add logic to save the updated profile details
    setIsEditing(false);
  };
  const handleLogout = () => {
    //clear session storage
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <div className="profile-content">
        <div id="left_container">
          <div id="contact_header">
            <img src={profileImage} alt="Profile" className="profile-img" />
            <div id="name_role">
              <h4 id="name">{name}</h4>
              <p id="role">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                </svg>{" "}
                Student
              </p>
              <p id="contactno">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>{" "}
                +91 9876543210
              </p>
              <p id="email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>{" "}
                {email}
              </p>
            </div>
          </div>
        </div>
        <div id="right_container">
          <span className="widget">
            <h4>1345</h4>
            <p>Total courses enrolled</p>
          </span>
          <span className="widget">
            <h4>9856</h4>
            <p>Total courses completed</p>
          </span>
        </div>
        <div>
          <button id="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
