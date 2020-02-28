const app = require("express")();
const PORT = 3000;

let cars = [
    Car1 = {id: 1, brand: "Ferrari", Engine: "V8", Price: "RIP money..."},
    Car2 = {id: 2, brand: "Porsche", Engine: "V8", Price: "Also rip money..."}
];

app.get("/", (req, res) => {
    return res.send({about: "Car API version 0.0.1"});
});

app.get("/cars", (req, res) => {
    return res.send({cars: cars});
});

app.get("/cars/:id", (req, res) => {
    console.log(req.params.id);
    const car = cars.find(car => car.id === req.params.id);
    return res.send({car: car});
});

const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", server.address().port);
});