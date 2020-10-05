// Image Carusel
setInterval(
		autoImageChange,
		5000
	);

function autoImageChange() {
	moveBitch('right');
}

var imgArray = [
	"https://sportsshow.net/media/2019/07/_3/760x450/Best-El-Clasico-Moments-1.jpg",
	"https://cdn.vox-cdn.com/thumbor/jrGj70QHpfx18vPMpOQ2tyyYgjw=/0x0:3000x1959/920x613/filters:focal(413x835:893x1315):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60269617/987939632.jpg.0.jpg",
	"https://cdn1.theweek.co.uk/sites/theweek/files/styles/16x9_710/public/2017/12/kevin_de_bruyne_manchester_city_premier_league_predictions_2018_gettyimages-679597300.jpg?itok=iU5NKXGd"
];

var index = 0;
getCaruselImage().src = imgArray[index];

function getCaruselImage() {
	var caruselImage = document.getElementById("carusel-image");
	return caruselImage;
}

function moveBitch(direction) {
	var limit = (direction === 'left' ? 0 : (imgArray.length - 1));
	var limitReverse = (imgArray.length - 1) - limit;
	if (index === limit) {
		index = limitReverse;
	} else {
		direction === 'left' ? index-- : index++;
	}
	getCaruselImage().src = imgArray[index];
}
