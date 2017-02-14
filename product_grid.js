// Find the 4 adjacent numbers that equal the highest product in a 20x20 grid.
var main = function () {
	"use strict";

	// Read in the CSV file and place the contents in an array.
	var grid = [];

	function handleFileSelect(evt) {
    	var file = evt.target.files[0];
    	Papa.parse(file, { 
    		dynamicTyping: true,
			complete: function(grid) {
				var output = '';
                for(var i=0; i < grid.data.length; i++){
                    var k = grid.data[i]
                    console.log(k)
                    output = output + k + '\n'
                }
                $('#grid1').html(output);
			}
		});
	}
 
  	$(document).ready(function(){
    	$("#fileInput").change(handleFileSelect);
  	});


	// Start at the first number and check horizontally and vertically. Save the highest product and its factors. Repeat for each number in the array.


	// Tell the HTML document which 4 numbers to highlight.

};

$(document).ready(main);