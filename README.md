# SecureTest - Serverless Online Test Platform 

Overview 
SecureTest is an Online Test System that allows candidates to log in, take a test, and receive 
their results. It uses AWS Lambda functions for authentication and evaluation, stores results 
in an Amazon RDS database, and features a web-based frontend for user interaction. 

Features  
  Login Page: Candidates enter their email and password to access the test. 
  AWS Lambda Authentication: Verifies user credentials. 
  Test Page: Candidates answer multiple-choice questions. 
  AWS Lambda Evaluation: Evaluates answers, calculates scores, and determines pass/fail status. 
  Amazon RDS Storage: Stores candidate test results. 

Technologies Used 
  Frontend: HTML, CSS, JavaScript 
  Backend: AWS Lambda (Python) 
  Database: Amazon RDS (MySQL) 
  Authentication & Evaluation: Python scripts with SQL queries 
  Hosting: AWS S3 

File Structure 
  home.html: Main landing page. 
  studenttest.html: Test page where candidates take the exam. 
  testlogin.html: Login page. 
  textloginjs.js: JavaScript for login functionality. 
  testlogincss.css: Styles for login page. 
  styles.css: General styling. 
  javascript.js: JavaScript for frontend interactions. 
  lambda_function.py: AWS Lambda function for authentication and evaluation. 
  pythoncodeofevaluation.py: Evaluation logic for scoring the test. 

Usage 
1. Navigate to the login page and enter credentials. 
2. Upon successful authentication, proceed to the test. 
3. Complete the test and submit responses. 
4. The backend evaluates the answers and stores results in RDS. 
5. The user receives their score and pass/fail status.
   
Setup Instructions 
1. Deploy AWS Lambda Functions: 
  Upload lambda_function.py to AWS Lambda. 
  Set up IAM permissions for database access. 
2. Configure Amazon RDS: 
  Create a MySQL database. 
  Update connection details in lambda_function.py. 
3. Run the Web Application: 
  Host the HTML, CSS, and JavaScript files on a web server. 
  Ensure the backend API endpoint is correctly configured. 

Future Enhancements 
  Implement coding test support for technical interviews. 

Author - Ramateja Pendikatla
