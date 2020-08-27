//from data.js
var tableData = data;

// YOUR CODE HERE!


var tbody = d3.select("tbody");


//////// arrow function notation///////

var tbody = d3.select('tbody');
// Using forEach loop to add new data to the table
tableData.forEach((data) => {
    var row = tbody.append('tr');
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});



/// naming function manually ////

// console.log(tableData);

// data.forEach(function(ufo){
//     console.log(ufo);

//     var row = tbody.append("tr");
//     Object.entries(ufo).forEach(function([key,value]){
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

////// date-form listener //////

// renaming variables and selecting handlers//

//var sightings = data;
//var form = d3.select("#form");
var button = d3.select("#filter-btn");

button.on("click", function(){
    ///prevent refresh///
    
    d3.event.preventDefault();
    
    //add filtered list///
    
    d3.select(".filtered_list").html("");
    
    ///variables///
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");

    ///filter////

    var filteredData = tableData.filter(tableData=> tableData.datetime === inputValue);

    //loop and append

    filteredData.forEach((dateInput)=>{
        var row = tbody.append("tr");
        Object.entries(dateInput).forEach(([key,value])=>{
            var cell = tbody.append("td");
            cell.text(value);
        });
            
    });


});

// ////make runEnter function////

// function runEnter(){
//     //prevent refresh//
    
//     //get datetime//
//     var inputdate = d3.select("#datetime");
//     //get value of datetime//
//     var inputValue = d3.select("value");

//     console.log(inputValue);
//     console.log(tableData);

//     var filteredDate = tableData.filter(tableData=>tableData.datetime === inputValue);
//     console.log(filteredDate);

// };


