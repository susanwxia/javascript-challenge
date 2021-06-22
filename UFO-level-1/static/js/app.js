var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// Console.log the data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each UFO Sighting object
data.forEach(function(UFOSighting) {
  console.log(UFOSighting);
});

// Step 2:  Use d3 to append one table row `tr` for each UFO Sighting object
data.forEach(function(UFOSighting) {
  console.log(UFOSighting);
  var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each UFO Sighting value
data.forEach(function(UFOSighting) {
  console.log(UFOSighting);
  var row = tbody.append("tr");

  Object.entries(UFOSighting).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Step 5: Use d3 to update each cell's text with
// UFO Sighting values (`date/time`, `city`, `state`, `country`, `shape`, and `comment`)
data.forEach(function(UFOSighting) {
  console.log(UFOSighting);
  var row = tbody.append("tr");
  Object.entries(UFOSighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO Sighting object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Creating filter:
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufodate => ufodate.datetime === inputValue);

  console.log(filteredData);


  // Create an array with date values
  var dates = filteredData.map(ufodate => ufodate.datetime);
  var cityname = filteredData.map(ufodate => ufodate.city);
  var statename = filteredData.map(ufodate => ufodate.state);
  var countryname = filteredData.map(ufodate => ufodate.countryname);
  var shape = filteredData.map(ufodate => ufodate.shape);
  var durationMinutes = filteredData.map(ufodate => ufodate.durationMinutes);
  var comments = filteredData.map(ufodate => ufodate.comments);
  var list = d3.select(".summary");
  list.html("");
  
  // append stats to the list
  for (var j = 0; j < dates.length; j++) {
    console.log(dates[j]);
    console.log(cityname[j]);
    console.log(statename[j]);
    console.log(countryname[j]);
    list.append("li").text(`Date: ${dates[j]}; City: ${cityname[j]}; State: ${statename[j]}; 
    Country: ${countryname[j]}, Shape: ${shape[j]}; Duration: ${durationMinutes[j]}`);
    list.append("li").text(`Comments: ${comments[j]}`);
  }
  
};
