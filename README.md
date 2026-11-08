# Task Manager – End-to-End CI/CD Pipeline

## 📌 Project Overview

This project demonstrates an end-to-end CI/CD pipeline for a Node.js Task Manager web application using Jenkins, Docker, Docker Compose, and AWS EC2.

The project automates application deployment through Jenkins and performs post-deployment smoke testing to verify that the application is running successfully.

## 🛠️ Technologies Used

- **Node.js** – Backend application
- **MySQL** – Database
- **Docker** – Application containerization
- **Docker Compose** – Multi-container management
- **Jenkins** – CI/CD automation
- **AWS EC2** – Cloud deployment
- **Git & GitHub** – Version control

## ⚙️ CI/CD Pipeline Workflow

1. Developer pushes code to GitHub.
2. Jenkins fetches the latest source code.
3. Jenkins executes the pipeline.
4. Docker builds the application image.
5. Docker Compose deploys the application and MySQL database.
6. Jenkins performs a post-deployment smoke test.
7. Application becomes accessible through the EC2 public IP.

## 📸 Project Screenshots

### 1. Website Output

The Task Manager application running in the browser.

![Website Output](images/website-output.png)

### 2. Application Working

Demonstration of the working Task Manager application.

## 📸 Project Screenshots

### 1. Website Output
![Website Output](./c:\Users\Nikhil\OneDrive\Pictures\Screenshots 1\Screenshot 2026-11-06 124544.png/website-output.png)

### 2. Application Working
![Application Working](./c:\Users\Nikhil\OneDrive\Pictures\Screenshots 1\Screenshot 2026-11-06 124604.png/application-working.png)

### 3. Database
![Database](./c:\Users\Nikhil\OneDrive\Pictures\Screenshots 1\Screenshot 2026-11-06 125917.png/database.png)

### 4. Jenkins Deployment
![Jenkins Deployment](./c:\Users\Nikhil\OneDrive\Pictures\Screenshots 1\Screenshot 2026-11-07 213100.png/jenkins-deployment.png)

### 5. Jenkins Smoke Test
![Jenkins Smoke Test](./c:\Users\Nikhil\OneDrive\Pictures\Screenshots 1\Screenshot 2026-11-07 211841.png/jenkins-smoke-test.png)
## ✨ Key Features

- Automated CI/CD pipeline using Jenkins.
- Dockerized Node.js application.
- MySQL database integration.
- Multi-container deployment using Docker Compose.
- Application deployment on AWS EC2.
- Automated post-deployment smoke testing.

## 📚 Learning Outcomes

- Understanding CI/CD pipeline implementation.
- Working with Jenkins declarative pipelines.
- Building and managing Docker images and containers.
- Deploying multi-container applications.
- Managing cloud-based application deployment using AWS EC2.
- Implementing automated smoke testing.

## 👨‍💻 Author

**Nikhil**

Cloud & DevOps Enthusiast
