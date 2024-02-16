//to run this file npx nodemon index.js
// const mongoose = require("mongoose"); //it is for store data in database
const express = require("express"); //is for http methods get, post, put, delete

const { connectMongoDb } = require("./connection");
const productRoutes = require("./routes/productRoutes");

const DBurl =
  "mongodb+srv://yanamadalaharitha:Rkj7SqWUHsviTSAl@cluster0.txw5f3o.mongodb.net/?retryWrites=true&w=majority";
connectMongoDb(DBurl);
const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);
//we have used /api/products remove in productRouter http methods

const PORT = 8082;

app.listen(PORT, () => {
  console.log("Server Started");
});
//need to check server started, connection successfull in terminal
//open http://localhost:8082/api/products
//open postman and click post http://localhost:8082/api/products -- send --
//click body and raw --- send data in object form
//open http://localhost:8082/api/products it will show product created
//mongodb also check is product add or not
