var main = function () {
	"use strict";
// Find the 4 adjacent numbers that equal the highest product in a 20x20 grid.

// Read in the CSV file and place the contents in an array.
var grid = [];

// function makeTableHTML(grid) {
//     var result;
//     for(var i=0; i<grid.length; i++) {
//         result = grid[i];
//         console.log(result)
//         for(var j=0; j<grid[i].length; j++){
//             result = grid[i][j];
//             console.log(result)
//         }
//     }
//     return result;
// }

function handleFileSelect(evt) {
    var file = evt.target.files[0];
    Papa.parse(file, { 
    	dynamicTyping: true,
		complete: function(grid) {
			//console.log(grid.data[0]);
			//document.getElementById("grid").innerHTML = grid.data[0];
    		 for(var i=0; i<grid.data.length; i++) {
        		console.log(grid.data[i]);
        		//document.writeln("grid") = grid.data[i];
        		document.getElementById("grid").innerHTML = grid.data[i];
        		// for(var j=0; j<grid[i].length; j++){
          //   		console.log(grid[i][j]);
        		// }
    		}
			// function printData(grid) {
			// 	var build = '<table border="1" cellpadding="2" cellspacing="0" style="border-collapse: collapse" width="100%">\n';
			// 	var rows = grid.split("\n");
			// 	rows.forEach( function getvalues(thisRow) {
			// 		build += "<tr>\n";
			// 		var columns = thisRow.split(",");
			// 		for(var i=0;i<columns.length;i++){ 
			// 			build += "<td>" + columns[i] + "</td>\n"; 
			// 		}   			
			// 		build += "</tr>\n";
			// 	})
			// 	build += "</table>";
			// 	$('#grid').append(build);	
 		// 	}
		}
	});
}
 
  $(document).ready(function(){
    $("#fileInput").change(handleFileSelect);
  });

// grid.forEach(function(){

// });



// Start at the first number and check horizontally and vertically. Save the highest product and its factors. Repeat for each number in the array.


// Tell the HTML document which 4 numbers to highlight.

};

$(document).ready(main);