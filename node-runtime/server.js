const express = require("express");
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
        isBooked: data.isBooked
    });
});