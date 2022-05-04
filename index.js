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
 
 function request_data() {
 socket.emit("get_station_data", { example_parameter: "hi" })
 socket.emit("get_data_2016", { example_parameter: "hi" })
 socket.emit("get_data_2017", { example_parameter: "hi" })
 socket.emit("get_data_2018", { example_parameter: "hi" })
 socket.emit("get_data_2019", { example_parameter: "hi" })
 }
 
 function access_data() {
  access_data_2016()
  access_data_2017()
  access_data_2018()
  access_data_2019()
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

let svg = d3.select("#svgRoot")

let g_bars = svg.append("g").attr("class", "g_bar")
let g_xAxis = svg.append("g").attr("class", "g_xAxis")
let g_yAxis = svg.append("g").attr("class", "g_yAxis")
let g_axisTitle = svg.append("g").attr("class", "g_labels")

function drawVis(){
    const margin = {
      top: 50,
      left: 75,
      bottom: 50,
      right: 50,
    }
    let data = [
    {
      year: "2016",
      avg_value: data_2016_avg
    },
    {
      year: "2017",
      avg_value: data_2017_avg
    },
    {
      year: "2018",
      avg_value: data_2018_avg
     },
     {
      year: "2019",
      avg_value: data_2019_avg
    },
    ]
    let width = parseInt(svg.style("width")) / 4
    let height = parseInt(svg.style("height"))

    let scale_x = d3
     .scaleBand()
     .domain(data.map((d) => d.year))
     .range([margin.left, width - margin.right])
     .padding(0.1)

    let scale_y = d3
     .scaleLinear()
     .domain([0, 20])
     .range([height - margin.top, margin.bottom])

     let bars = g_bars.selectAll(".bar").data(data)

     bars
     .enter()
     .append("rect")
     .attr("class", "bar")
     .attr("x", (d) => scale_x(d.year))
     //.attr("y", (d) => height - margin.bottom - (scale_y(0) - scale_y(d.avg_value)))
     .attr("width", scale_x.bandwidth())
     //.attr("height", (d) => scale_y(0) - scale_y(d.avg_value))
     .attr("height", (d) => height - margin.bottom - scale_y(0))
     .attr("y", (d) => scale_y(0))
     .attr("fill", "darkslategrey")

     g_xAxis
     .attr("transform", "translate(0, " + (height - margin.bottom) + ")")
     .call(d3.axisBottom(scale_x))

     g_yAxis
     .attr("transform", "translate(" + margin.left + ", 0)")
     .call(d3.axisLeft(scale_y))

     addAxisTitle(["Average Feinstaub Value", "Year"], width, height)

     svg.selectAll("rect")
    .transition()
    .duration(800)
    .attr("y", (d) => height - margin.bottom - (scale_y(0) - scale_y(d.avg_value)))
    .attr("height", function(d) { return height - margin.bottom - scale_y(d.avg_value); })
    .delay(500)

}

function addAxisTitle(axisTitles, width, height) {
  let axisTitle = g_axisTitle.selectAll(".axisTitle").data(axisTitles)

  axisTitle
    .enter()
    .append("text")
    .attr("class", "axisTitle")
    .merge(axisTitle)
    .text((d) => d)
    .attr("transform", (d, i) => {
      if (i > 0) {
        return `translate(${width / 2}, ${height -15})`
      } else {
        return `translate(25, ${height / 2 + 75}) rotate(-90)`
      }
    })
    .attr("font-family" , "sans-serif")
    .attr("font-size" , "14px")

  axisTitle.exit().remove()
}
