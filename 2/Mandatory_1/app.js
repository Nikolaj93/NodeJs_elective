const path = require('path');
const express = require('express')
const app = express();
//const port = 3000;

app.use('/public/', express.static('./public/'));
app.use('/css/', express.static('./css/'));
app.use('/images/', express.static('./images/'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = process.env.PORT ? process.env.PORT : 3000;

console.log("env port: ", process.env.PORT)

let cars = [
    Car1 = {id: 1, brand: "Ferrari", Engine: "V8", Price: "RIP money..."},
    Car2 = {id: 2, brand: "Porsche", Engine: "V8", Price: "Also rip money..."}
];

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname + "/public/index/index.html"));
});

app.get("/commandline", (req, res) => {
    return res.sendFile(path.join(__dirname + "/public/commandline/commandline.html"));
});

app.get("/tools", (req, res) => {
    return res.sendFile(__dirname + "/public/tools/tools.html");
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