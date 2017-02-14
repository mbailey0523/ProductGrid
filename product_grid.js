// Find the 4 adjacent numbers that equal the highest product in a 20x20 grid.
var main = function () {
	"use strict";
	var grid = [];
	var highest = 0;
    
	function handleFileSelect(evt) {
    	var file = evt.target.files[0];
    	// Read in the CSV file and place the contents in an array.
    	Papa.parse(file, { 
    		dynamicTyping: true,
			complete: function(grid) {
				// Print the 20x20 grid to the page
				var output = '';
                for(var i=0; i < grid.data.length; i++) {
                    var k = grid.data[i]
                    console.log(k)
                    output = output + k + '\n'
                }
                $('#grid1').html(output);
         
                for(var i=0; i < grid.data.length; i++) {
                	var box = grid.data[i];
                	for(var j=0; j < box.length - 4; j++) {
                		var product = 1;
                		for(var x=0+j; x < j+4; x++) {
                			product = product * box[x];
                			//console.log(product);
                		}
                		if(product > highest) {
                			highest = product;
                			console.log(highest);
                		
                			var x4 = box[x - 1];
                			console.log(x4);
                			$('#box4').html(x4);
                		
                			var x3 = box[x - 2];
                			console.log(x3);
                			$('#box3').html(x3);
                		
                			var x2 = box[x - 3];
                			console.log(x2);
                			$('#box2').html(x2);
                		
                			var x1 = box[x - 4];
                			console.log(x1);
                			$('#box1').html(x1);

                			$('#product').html(highest);
                		}
                		j = j + 1;
                	}
                }
			}
		});
	}
  	
  	$(document).ready(function(){
    	$("#fileInput").change(handleFileSelect);
  	});
};
$(document).ready(main);

