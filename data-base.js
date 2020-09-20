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

function create(arr, fn) {
	each(arr, function (elem, i) {
		var frame = $('#frame');
		var elem1 = $('<div class="imgs"></div>');
		if (i > 7) {
			i -= 8;
		}
		var img = $('<img class="img1">');
		img.attr("src", images[i]);
		img.css({ "object-fit": "cover", "width": "100%", "height": "100%" })
		elem1.append(img);
		frame.append(elem1);
	});
}
$(document).ready(function () {
	$(".imgs").click(show);
});

function show(event){
	var x = event.currentTarget.firstElementChild;
	console.log(x.src)
	$(x).show();
}

function Game(){
	var x = {};
	x.count = 2;
	



	return x;

}






// create the game interface
var images = ["https://www.flaticon.com/svg/static/icons/svg/3456/3456656.svg", "https://www.flaticon.com/svg/static/icons/svg/3456/3456709.svg","https://www.flaticon.com/svg/static/icons/svg/3456/3456669.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456847.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456890.svg","https://www.flaticon.com/premium-icon/icons/svg/3456/3456805.svg","https://www.flaticon.com/premium-icon/icons/svg/3457/3457010.svg", "https://www.flaticon.com/premium-icon/icons/svg/3456/3456953.svg" ]







