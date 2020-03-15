const express = require("express")();
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('images'));

let cars = [
    Car1 = {id: 1, brand: "Ferrari", Engine: "V8", Price: "RIP money..."},
    Car2 = {id: 2, brand: "Porsche", Engine: "V8", Price: "Also rip money..."}
];

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index/index.html");
});

app.get("/commandline", (req, res) => {
    return res.sendFile(__dirname + "/public/commandline/commandline.html");
});

app.get("/json", (req, res) => {
    return res.sendFile(__dirname + "/public/json/json.html");
});

app.get("/javascript", (req, res) => {
    return res.sendFile(__dirname + "/public/javascript/javascript.html");
});

app.get("/restapi", (req, res) => {
    return res.sendFile(__dirname + "/public/restapi/restapi.html");
});

app.get("/restapi/cars", (req, res) => {
    return res.send({cars: cars});
});

app.get("/restapi/cars/:id", (req, res) => {
    console.log(req.params.id);
    const car = cars.find(car => car.id === req.params.id);
    return res.send({car: car});
});

app.post("/restapi/cars", (req, res) => {
    console.log(req.params.id);
    const car = cars.push(car => car.id === req.params.id);
    return res.send({car: car});
});

app.put("/restapi/cars/:id", (req, res) => {
    console.log(req.params.id);
    const newCar = cars.findIndex(car => car.id === req.params.id);
    return res.send({car: car});
});

app.delete("/restapi/cars/:id", (req, res) => {
    console.log(req.params.id);
    const car = cars.filter(car => car.id === req.params.id);
    return res.send({car: car});
});

/*
app.get("/", (req, res) => {
    return res.send({about: "Car API version 0.0.1"});
});
*/

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", server.address().port);
});