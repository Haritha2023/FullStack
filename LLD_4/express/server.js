const express = require("express");
//this returns a function

let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "javascript" },
  { id: 3, name: "Python" },
];

const app = express();
//that function is allocated to variable

//THEASE TWO LINES TO CREATE A SERVER

//get, post, put, delete, patch

//get method

app.get("/", (req, res) => {
  res.send("Hello from scaler");
});

app.get("/about", (req, res) => {
  res.send("Hello, I am from about page");
});

app.get("/contact", (req, res) => {
  res.send("Contact me at abcd@gmail.com");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

//route parameters

app.get("/courses/:id", (req, res) => {
  console.log(req.params);
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  res.send(course);
});

// app.get("/courses/:id/:name", (req, res) => {
//   console.log(req.params);
// });
//post method

app.listen(8082, () => {
  console.log("server started");
});

//for every small change we need to restart the server
// for we need to install nodemon
//nodemon is a tool that helps develop nodejs based applications by automatically
//restarting the node application when the file changes in the directory are detected
