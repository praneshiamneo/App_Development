# Softwater_Design_Pattern

Overview:

This project is a web-based application that consists of a frontend built with React and a backend built with Spring Boot. The application requires both the frontend and backend to be properly set up and connected for full functionality.

Prerequisites:

Frontend:

Node.js (version 14.x or higher)
npm (comes with Node.js)

Backend:

Java Development Kit (JDK) (version 17 or higher)
MySQL (version 8.x recommended)
MySQL Workbench
Visual Studio Code (VS Code)

Installation:

1. Download the Project:

Download the zip file of the project from the repository.
Extract the contents to your local machine.

2. Frontend Setup:

2.1 Create a New React Project:

Open a terminal in VS Code.
Run the following command to create a new React project:

npx create-react-app your-project-name

Navigate to the newly created React project directory:

cd your-project-name

2.2 Install Required Packages:

Before running the frontend, you need to install the required npm packages:

Install react-router-dom:

npm install react-router-dom

Install axios:

npm install axios

2.3 Replace the src Folder:

Delete the src folder in your newly created React project.
Replace it with the src folder downloaded from the GitHub repository.

3. Backend Setup:

3.1 MySQL Database Setup:

Open MySQL Workbench and create a new schema (database).
Note down the database name, as well as your MySQL username and password.

3.2 Configure the Backend

Open the application.properties file located in src/main/resources/ using VS Code.

Modify the following properties to match your MySQL configuration:

spring.datasource.url=jdbc:mysql://localhost:3306/your-database-name
spring.datasource.username=your-username
spring.datasource.password=your-password

3.3 Run the Backend:

Open the backend project in VS Code.
Use the Spring Boot Dashboard extension to run the backend.

4. Running the Project:

4.1 Running the Frontend:

Open a new terminal window in VS Code and navigate to the frontend directory:

cd your-project-name

Run the following command to start the React application:

npm start

4.2 Running the Backend:

Ensure the backend is running through the terminal in VS Code.

5. Access the Application:

Open your web browser and navigate to http://localhost:3000 to access the application.

The frontend will interact with the backend to provide full functionality.

Notes:

The frontend will not work unless the backend is up and running.

Ensure that both the frontend and backend are running in separate terminals or VS Code instances.

Troubleshooting:

If you encounter issues connecting to the database, verify your MySQL credentials and ensure that the database schema exists.

Make sure all required npm packages are installed and that the backend server is properly configured and running.
