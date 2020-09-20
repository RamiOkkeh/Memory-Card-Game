// helper functions 
// =======================
// writing each function
function each(coll, fn) {
	if (Array.isArray(coll) || typeof coll === 'string'){
		for (var i = 0; i < coll.length; i++) {
			fn(coll[i], i)
		}
	} else {
		for (var key in coll) {
			fn(coll[key], key)
		}
	}
}

function reduce(arr, fn, start) {
  var acc = start
  each(arr, function(elem, i) {
    acc = fn(acc, elem)
  })
  return acc
}

function range(min, max) {
	var arr = []
	if (max === undefined) {
		max = min
		min = 0
	}
	for (var e = min; e < max; e++) {
		arr.push(e)
	}
	return arr
}

function randomize(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function create(arr, fn) {
	var imagesCopy = images.slice(0);
	$('#frame').empty();
	each(arr, function (elem, i) {
		
		var frame = $('#frame');
		var elem1 = $('<div class="imgs back"></div>');
		if (i > 7) {
			i -= 8;
		}

		var img = $('<img class="img1" id="'+elem+'">');
		var rnd = randomize(0, imagesCopy.length - 1);
		img.attr("src", imagesCopy[rnd]);
		imagesCopy.splice(rnd, 1);
		if (imagesCopy.length === 0){
			imagesCopy = images.slice(0);
		}

		elem1.append(img);
		frame.append(elem1);
	});
	$(document).ready(function () {
	$(".imgs").click(newGame);
});
	$('.img1').hide();
	$("#hide").hide();
}

var newGame = Game()



function Game() {

var c = 2
var click1;
var arr = []
var best;
var attempt = 1
var end = 0
 return function show(event){
	var x = event.currentTarget.firstElementChild;
	arr.push(x)
	var arr0 = arr[0]
	var arr1 = arr[1]
	if (arr1 && arr0.id === arr1.id) {
		c++;
		arr.pop();
	} else $(x).show(); $(x).parent().removeClass("back");
	c -= 1
	if (c === 0) {
		if (arr[0].src !== arr[1].src) {
			$("#hide").show();
			setTimeout(function () { $(arr0).hide(); $(arr1).hide(); $("#hide").hide(); $(arr0).parent().addClass("back"); $(arr1).parent().addClass("back") }, 600);
		} else {$(arr0).parent().attr("onclick", null).off("click"); $(arr0).parent().css("background-color", "green"); $(arr1).parent().attr("onclick", null).off("click"); $(arr1).parent().addClass("correct"); end++}
		arr = []
		c = 2
		$("h2").html("Score: "+attempt++)
		if (end === 0) {
			end = 0
			var restart = $("<input id='restart' type='button' value='Start again'>")
			$('#frame').append(restart)
			$('#restart').on('click',function() { console.log("hello"); create(range(1, 17)) } )
		}
	}	
}
}
// create the game interface
var images = ["https://www.flaticon.com/svg/static/icons/svg/3456/3456656.svg", "https://www.flaticon.com/svg/static/icons/svg/3456/3456709.svg","https://www.flaticon.com/svg/static/icons/svg/3456/3456669.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456847.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456890.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456805.svg","https://www.flaticon.com/premium-icon/icons/svg/3457/3457010.svg", "https://www.flaticon.com/premium-icon/icons/svg/3456/3456953.svg" ]






 