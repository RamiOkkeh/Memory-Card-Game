// executing function:
// ==========================
// starting the game the first time
create(range(16), 8);

//placing and styling the grid
//randomizing images and their places
//add start again option
//hanlde user errors and prevent them from breaking the game (ex: prevent three clicks on a row)

//keep track of the user score and personal
//add a multiple difficulties
 


// creating and recreating the game interface
// ======================================================
function create(arr, imgNum) {
	// creating game loop
	var newGame = Game(imgNum);
	// setting the style of the grid according to the game level
	if (imgNum === 8) {
		$("#frame").css({ gridTemplateColumns: "auto auto auto auto" })
	} else {
		$("#frame").css({ gridTemplateColumns: "auto auto auto auto auto auto" })
	}
	// making copy of img sources
	var imagesCopy = randomImages(imgNum);
	// removing all elements from frame
	$('#frame').empty();
	$('#restart').remove()
	$("#score").html("Score: 0")
	// itirating over id arr
	each(arr, function (elem, i) {
		
		var frame = $('#frame');
		// creating img containers
		var elem1 = $('<div class="imgs back"></div>');

		// creating imgs
		var img = $('<img class="img1" id="'+elem+'">');
		// random index for selecting an elem from the arr
		var rnd = randomize(0, imagesCopy.length - 1);
		img.attr("src", imagesCopy[rnd]);
		// removing the selected element from the copy
		imagesCopy.splice(rnd, 1);

		// appending the imgs into frame
		elem1.append(img);
		frame.append(elem1);
	});
	// asigning img containers onclick to the new game loop
	$(document).ready(function () {
		$(".imgs").click(newGame);
		// hiding imgs on game start
		$('.img1').hide();
		$("#hide").hide();
	});	
}

// defining game loop
function Game(imgNum) {
	//click counter
	var counter = 2; 
	var arr = [];
	var attempt = 0;
	var end = 0;
	var best =  999999;
	var fin = imgNum;
	return function(event){
		//console.log($("#best").text()[$("#best").text().length - 1])
		// current img tag variable
		var x = event.currentTarget.firstElementChild;
		arr.push(x)
		var arr0 = arr[0]
		var arr1 = arr[1]
		// case for clicking same img twice
		if (arr1 && arr0.id === arr1.id) {
			counter++;
			arr.pop();
		} 
		/*display clicked img*/ 
		else {
			$(x).show();
		 	$(x).parent().removeClass("back");
		}
		counter -= 1;
		
		// when trying to match 2 imgs
		if (counter === 0) {
			// chack if the 2 imgs are the same
			if (arr[0].src !== arr[1].src) {  
				// if they are not, give the player a some time to view them then hide them again
				$("#hide").show();
				setTimeout(function () { 
					$(arr0).hide();
					$(arr1).hide(); 
					$("#hide").hide(); 
					$(arr0).parent().addClass("back"); 
					$(arr1).parent().addClass("back") }, 500);

			} /*if they are the same do all this-->*/ 
			else {
				$(arr0).parent().attr("onclick", null).off("click"); 
				$(arr0).parent().css("background-color", "green"); 
				$(arr1).parent().attr("onclick", null).off("click"); 
				$(arr1).parent().addClass("correct"); 
				end++;
			}
			// after game loop ends, reset these vaslues
			arr = []
			counter = 2
			$("#score").html("Score: "+(++attempt))

			// check if the player found all imgs
			if (end === fin) {
				best = ($("#best").text().split(" ")[1] || 999999)
				// if so, create a restart button
				var restart = $("<input id='restart' type='button' value='Start again'>")
				$('#frame').after(restart)
				$('#restart').on('click',function() { create(range(imgNum * 2), imgNum) })
				// and check personal score
				if (attempt < best) {
					best = attempt

					// DOM method:
					document.getElementById("best").innerHTML = 'Personal Best: ' + attempt;
				}
				// at the end of the game reset these values
				attempt = 0;
				end = 0;
				arr = [];
				counter = 2;
			}
		}
	}
}

//function for button normal 
function normal(){
	create(range(16), 8);
	$("#best").html("");
}

//function for button hard 
function hard(){
	create(range(24), 12);
	$("#best").html("");
}


