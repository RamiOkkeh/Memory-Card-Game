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

function randomize(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function create(arr, fn) {
	var imagesCopy = images.slice(0);
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

		img.css({ "object-fit": "cover", "width": "100%", "height": "100%" })
		elem1.append(img);
		frame.append(elem1);
	});
}


$(document).ready(function () {
	$(".imgs").click(show);
});


var c = 2
var click1;
var arr = []
function show(event){
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
		console.log(arr)
		if (arr[0].src !== arr[1].src) {
			$("#hide").show();
			setTimeout(function () { $(arr0).hide(); $(arr1).hide(); $("#hide").hide(); $(arr0).parent().addClass("back"); $(arr1).parent().addClass("back") }, 1000);
		}
		arr = []
		c = 2
	}	
}




// create the game interface
var images = ["https://www.flaticon.com/svg/static/icons/svg/3456/3456656.svg", "https://www.flaticon.com/svg/static/icons/svg/3456/3456709.svg","https://www.flaticon.com/svg/static/icons/svg/3456/3456669.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456847.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456890.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456805.svg","https://www.flaticon.com/premium-icon/icons/svg/3457/3457010.svg", "https://www.flaticon.com/premium-icon/icons/svg/3456/3456953.svg" ]







