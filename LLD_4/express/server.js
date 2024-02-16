const express = require("express");
//this returns a function
const morgan = require("morgan");

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

app.use(express.json()); // built-in middleware

//custom middleware
function middleWare1(req, res, next) {
  console.log("This is Middleware 1");
  next();
  //without next it won't allow to go the other middlewares
}

function middleWare2(req, res, next) {
  console.log("This is Middleware 2");
  next();
}

// function logger(req, res, next) {
//   console.log(req.method, req.ip, req.hostname, new Date());
//   next();
// }

app.use(middleWare1);
app.use(middleWare2);
// app.use(logger);
app.use(morgan());

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

  if (!course) {
    res.status(404).send("The course does not exist");
  }
  res.send(course);
}); //create new entry

// app.get("/courses/:id/:name", (req, res) => {
//   console.log(req.params);
// });
//post method

// app.post("/create", (req, res) => {
//   res.send("Post Method");
// }); it is for checking post method in postman

app.post("/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
}); //used to create a new entry

//put method - to update the data

app.put("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));

  if (!course) {
    res.status(404).send("The course does not exist");
  }

  course.name = req.body.name;
  res.send(courses);
});

app.delete("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));

  if (!course) {
    res.status(404).send("The course does not exist");
  }

  const index = courses.indexOf(course);

  courses.splice(index, 1);

  res.send(courses);
});
app.listen(8082, () => {
  console.log("server started");
});

//for every small change we need to restart the server
// for we need to install nodemon
//nodemon is a tool that helps develop nodejs based applications by automatically
//restarting the node application when the file changes in the directory are detected
