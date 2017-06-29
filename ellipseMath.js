// .......math

// https://math.stackexchange.com/questions/76457/check-if-a-point-is-within-an-ellipse

/*
	(x - h)^2        (y - k)^2
	---------    +   ---------     <= 1
	   rx^2             ry^2
*/

function intersectsEllipse (x, y, rx, ry, h, k) {
	var xp = ( (x - h) * (x - h) ) / (rx * rx);
	var yp = ( (y - k) * (y - k) ) / (ry * ry);

	return xp + yp <= 1;
}

function getDimensions (ele) {
	var $ele  = $(ele);
	var width  = $ele.outerWidth ();
	var height = $ele.outerHeight ();
	var xPos   = $ele.offset ().left;
	var yPos   = $ele.offset ().top;
	return {
		xP: xPos,
		yP: yPos,
		width: width,
		height: height
	};
}

function getDimensionsRound (ele) {
	var dimensions = getDimensions (ele);
	return {
		xP: dimensions.xP + dimensions.width/2,
		yP: dimensions.yP + dimensions.height/2,
		rx: dimensions.width / 2,
		ry: dimensions.height / 2
	};
}

// Tested, should be working. Random points inside, outside all worked
function intersectsRound (x, y, ele) {
	var dimensions = getDimensionsRound (ele);
	return intersectsEllipse (x, y, dimensions.rx, dimensions.ry, dimensions.xP, dimensions.yP);
}
