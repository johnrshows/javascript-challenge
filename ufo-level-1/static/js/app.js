//from data.js
// var tableData = data;

// YOUR CODE HERE!


var tbody = d3.select("tbody");


//////// arrow function notation///////

// var tbody = d3.select('tbody');
// // Using forEach loop to add new data to the table
// tableData.forEach((data) => {
//     var row = tbody.append('tr');
//     Object.entries(data).forEach(([key, value]) => {
//         var cell = row.append('td');
//         cell.text(value);
//     });
// });



/// naming function manually ////

console.log(data);

data.forEach(function(tabledata){
    console.log(tabledata);

    var row = tbody.append("tr");
    Object.entries(tabledata).forEach(function([key,value]){
        var cell = row.append("td");
        cell.text(value);
    });
});


