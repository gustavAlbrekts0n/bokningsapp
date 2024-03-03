const express = require("express");
const Datastore = require("nedb");

const app = express();
app.listen(8080, () => console.log("listening at 8080"));
app.use(express.static("../react-app/build"));
app.use(express.json());

const database = new Datastore("database.db");
database.loadDatabase();
database.insert({date: "Today", isBooked: true});
database.insert({date: "Tomorrow", isBooked: false});

app.post("/api", (request, response) => {
    const data = request.body;
    console.log(data);
    response.json({
        status: "success",
        index: data.index,
        year: data.date.year,
        month: data.date.month,
        number: data.date.number,
        isBooked: data.isBooked
    });
});