# Face Recognition

A react app that allows you to upload images and automatically highlight faces using Clarifai API. The app also includes a Sign In page with login and registration, a profile page to view profile details and face detections, and a rankings page to see users with the most face detections in descending order. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- Node.js 
- npm 

### Installing

1. Clone the repository to your local machine

```bash
git clone https://github.com/alex-dunarentu/face-recognition.git
```

2. Change into the project directory

```bash
cd face-recognition
```

3. Install the dependencies

```bash
npm install
```

4. Create a .env file at the root level

```bash
REACT_APP_API_ENDPOINT = http://localhost:3000
```

5. Start the app

```bash
npm start
```

The backend repo (`face-detection-api`) is private due to security reasons, you can only preview the website on [heroku](https://alex-duna-face-recognition.herokuapp.com/).


## Built With

- [React](https://reactjs.org/) - The frontend framework used
- [Node.js](https://nodejs.org/) - The backend framework used
- [Express.js](https://expressjs.com/) - Node.js web application framework
- [Postgres](https://www.postgresql.org/) - The database used
- [Clarifai API](https://www.clarifai.com/) - Used for face recognition

## Frontend Dependencies

- react: ^18.0.0
- react-dom: ^18.0.0
- react-router-dom: ^6.3.0
- react-scripts: ^5.0.0
- sass: ^1.49.11

## Backend Dependencies

- bcrypt: ^5.0.1
- body-parser: ^1.20.0
- clarifai: ^2.9.1
- cors: ^2.8.5
- dotenv: ^16.0.1
- express: ^4.18.1
- knex: ^2.1.0
- pg: ^8.7.3
- nodemon: ^2.0.16

## Author

[Dunărențu Alexandru Nicolae](https://www.linkedin.com/in/alexandru-nicolae-dunarentu/)


