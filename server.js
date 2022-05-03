
const fs = require("fs")


const port = 6789

const express = require("express")
const app = express()
app.use(express.static("public"))
const server = app.listen(port)
console.log("Webserver is running on port ${port}.")


const socket = require("socket.io")
const io = socket(server)

io.sockets.on("connection", (socket) => {
console.log("Client ${socket.id} connected.")

let disconnect = () => {
console.log("Client ${socket.id} disconnected.")
}

let get_station_data = (parameters) => {
    console.log("Received station data request.")
    fs.readFile("../data_01/Stationen.json", "utf8", (err, data) => {
    if (err) {
    console.error(err)
    return
    }
    //socket.emit("example_data", data)
    let json_data = JSON.parse(data)
    socket.emit("station_data", json_data)
    })
}

let get_data_2016 = (parameters) => {
    console.log("Received data from 2016 request.")
    fs.readFile("../data_01/Feinstaub_2016.json", "utf8", (err, data) => {
    if (err) {
    console.error(err)
    return
    }
    //socket.emit("example_data", data)
    let json_data = JSON.parse(data)
    socket.emit("data_2016", json_data)
    })
}

let get_data_2017 = (parameters) => {
    console.log("Received data from 2017 request.")
    fs.readFile("../data_01/Feinstaub_2017.json", "utf8", (err, data) => {
    if (err) {
    console.error(err)
    return
    }
    //socket.emit("example_data", data)
    let json_data = JSON.parse(data)
    socket.emit("data_2017", json_data)
    })
}

let get_data_2018 = (parameters) => {
    console.log("Received data from 2018 request.")
    fs.readFile("../data_01/Feinstaub_2018.json", "utf8", (err, data) => {
    if (err) {
    console.error(err)
    return
    }
    //socket.emit("example_data", data)
    let json_data = JSON.parse(data)
    socket.emit("data_2018", json_data)
    })
}

let get_data_2019 = (parameters) => {
    console.log("Received data from 2019 request.")
    fs.readFile("../data_01/Feinstaub_2019.json", "utf8", (err, data) => {
    if (err) {
    console.error(err)
    return
    }
    //socket.emit("example_data", data)
    let json_data = JSON.parse(data)
    socket.emit("data_2019", json_data)
    })
}


    

socket.on("disconnect", disconnect)

socket.on("get_station_data", get_station_data)

socket.on("get_data_2016", get_data_2016)

socket.on("get_data_2017", get_data_2017)

socket.on("get_data_2018", get_data_2018)

socket.on("get_data_2019", get_data_2019)})





