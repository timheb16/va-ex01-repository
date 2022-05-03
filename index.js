function print_hello_world() {
  console.log("Hello world!")
}

 // this is working because of the import in the html file
 // https://socket.io/docs/v4/client -installation/#standalone -build
 const socket = io()
 var stations
 var data_2016
 var data_2017
 var data_2018
 var data_2019
 
 socket.on("connect", () => {
 console.log("Connected to the webserver.")
 })
 socket.on("disconnect", () => {
 console.log("Disconnected from the webserver.")
 })
 
 socket.on("station_data", (obj) => {
 console.log(obj)
 stations = obj 
})

socket.on("data_2016", (obj) => {
  console.log(obj)
  data_2016 = obj 
 })

socket.on("data_2017", (obj) => {
  console.log(obj)
  data_2017 = obj 
})

socket.on("data_2018", (obj) => {
  console.log(obj)
  data_2018 = obj 
})

socket.on("data_2019", (obj) => {
  console.log(obj)
  data_2019 = obj 
})
 
 function request_station_data() {
 socket.emit("get_station_data", { example_parameter: "hi" })
 }
 
 function access_station_data() {
  console.log(stations.data)
}

function request_data_2016() {
  socket.emit("get_data_2016", { example_parameter: "hi" })
}

function access_data_2016() {
    let data = data_2016.data
    //console.log(data)
    let keys = Object.keys(data)
    //console.log(keys)
    //console.log(keys.length)
    let total_sum = 0
    let total_avg = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      //console.log(avg_of_entry)
      total_sum = total_sum + avg_of_entry
    }
    total_avg = total_sum / keys.length
    console.log("total avg für jahr 2016: " + total_avg)
  }

function request_data_2017() {
  socket.emit("get_data_2017", { example_parameter: "hi" })
}

function access_data_2017() {
  let data = data_2017.data
    //console.log(data)
    let keys = Object.keys(data)
    //console.log(keys)
    //console.log(keys.length)
    let total_sum = 0
    let total_avg = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      //console.log(avg_of_entry)
      total_sum = total_sum + avg_of_entry
    }
    total_avg = total_sum / keys.length
    console.log("total avg für jahr 2017: " + total_avg)
}

function request_data_2018() {
  socket.emit("get_data_2018", { example_parameter: "hi" })
}

function access_data_2018() {
  let data = data_2018.data
    //console.log(data)
    let keys = Object.keys(data)
    //console.log(keys)
    //console.log(keys.length)
    let total_sum = 0
    let total_avg = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      //console.log(avg_of_entry)
      total_sum = total_sum + avg_of_entry
    }
    total_avg = total_sum / keys.length
    console.log("total avg für jahr 2018: " + total_avg)
}

function request_data_2019() {
  socket.emit("get_data_2019", { example_parameter: "hi" })
}

function access_data_2019() {
  let data = data_2019.data
    //console.log(data)
    let keys = Object.keys(data)
    //console.log(keys)
    //console.log(keys.length)
    let total_sum = 0
    let total_avg = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      //console.log(avg_of_entry)
      total_sum = total_sum + avg_of_entry
    }
    total_avg = total_sum / keys.length
    console.log("total avg für jahr 2019: " + total_avg)
}
