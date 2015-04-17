var point = view.center;

var colors = [];
var cycles = 4;

for (var i = 0, l = 20; i < l; i++) {
	var brightness = 1 - (i / l) * 1.5;
	var hue = i / l * cycles * 1;
	var color = {
	hue: hue,
	saturation: 0.5,
	brightness: brightness
};

colors.push(color);
}

var radius = Math.max(view.size.width, view.size.height) * 0.75;

var path = new Path.Rectangle({
	rectangle: view.bounds,
	fillColor: {
		origin: point,
		destination: point + [radius, 1],
		gradient: {
			stops: colors,
			radial: true
		}
	}
});

var color = path.fillColor;
var gradient = color.gradient;
var mouseDown = false;
var mousePoint = view.center;

function onMouseDown(event) {
	mouseDown = true;
	mousePoint = event.point;
}

function onMouseDrag(event) {
	mousePoint = event.point;
}

function onMouseUp(event) {
	vector.length = 10;
	mouseDown = false;
}

var grow = false;

var vector = new Point(150, 0);

function onFrame() {
for (var i = 0, l = gradient.stops.length; i < l; i++)
	gradient.stops[i].color.hue -= 0.5;
			if (grow && vector.length > 25) {
				grow = false;
			} else if (!grow && vector.length < 75) {
				grow = true;
			}
			if (mouseDown) {
				point = point + (mousePoint - point) / 15;
			} else {
				vector.length += (grow ? 2 : -2);
				vector.angle += 1;
			}
			color.highlight = mouseDown ? point : point + vector;
}

		function onResize(event) {
			point = view.center;
			path.bounds = view.bounds;

		var color = path.fillColor;
			color.origin = point;

		var radius = Math.max(view.size.width, view.size.height) * 0.75;
			color.destination = point + [radius, 0];
	}
}
