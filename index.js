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
 var data_2016_avg
 var data_2017_avg
 var data_2018_avg
 var data_2019_avg
 
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
    let anzahl_null = 0
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
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2016_avg = total_avg
    console.log("total avg für jahr 2016: " + data_2016_avg)
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
    let anzahl_null = 0
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
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2017_avg = total_avg
    console.log("total avg für jahr 2017: " + data_2017_avg)
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
    let anzahl_null = 0
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
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2018_avg = total_avg
    console.log("total avg für jahr 2018: " + data_2018_avg)
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
    let anzahl_null = 0
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
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2019_avg = total_avg
    console.log("total avg für jahr 2019: " + data_2019_avg)
}

function averages(){
  console.log(data_2016_avg)
  console.log(data_2017_avg)
  console.log(data_2018_avg)
  console.log(data_2019_avg)
  document.getElementById("avg_2016").innerHTML = data_2016_avg
  document.getElementById("avg_2017").innerHTML = data_2017_avg
  document.getElementById("avg_2018").innerHTML = data_2018_avg
  document.getElementById("avg_2019").innerHTML = data_2019_avg
  document.getElementById("table").hidden = false
}
