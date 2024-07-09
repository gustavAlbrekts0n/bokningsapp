const express = require("express");
const serverless = require("serverless-http");
const Datastore = require("nedb");

const app = express();
app.listen(8080, () => console.log("listening at 8080"));
app.use(express.static("../react-app/build"));
app.use(express.json());

const database = new Datastore("database.db");
database.loadDatabase();

app.get("/api", (request, response) => {
  database.find({}, (error, data) => {
    if (error) {
      response.end();
      return;
    }
    console.log(data);
    response.json(data);
  });
});

app.post("/api", (request, response) => {
  const data = request.body;
  database.insert(data);
  console.log("Inserting data into db: ", data);
  response.json({
    status: "success",
    isBooked: data.isBooked,
  });
});

app.post("/api/login", (request, response) => {
  const data = request.body;
  const password = data.password;
  const masterPassword = "pass"; // TODO: Duh...
  if (password === masterPassword) {
    response.json({
      status: 200,
      message: "OK",
    });
  } else {
    response.json({
      status: 401,
      message: "Unauthorized",
    }); // TODO: Catch error
  }
  return response;
});
