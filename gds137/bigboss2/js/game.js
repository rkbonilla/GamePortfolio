
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000 / 60;
var timer = setInterval(animate, interval);

var fX = .9;

var score = 0;

var player = new GameObject({ width: 50, height: 50, x: canvas.width / 2, y: canvas.height - 50, color: "#ffff00" });
var hazard = new Array;
var item = new Array;

for (var i = 0; i < 5; i++) {
	hazard[i] = new GameObject({ height: 25, width: 25, x: random(25, 775), y: -25, angle: 0, vy: random(5, 10), color: "red" });
}

for (var i = 0; i < 5; i++) {
	item[i] = new GameObject({ height: 25, width: 25, x: random(25, 775), y: -25, vy: random(5, 10), color: "green" });
}

function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	player.move();
	for (var i = 0; i < 5; i++) {
		hazard[i].move();
	}
	for (var i = 0; i < 5; i++) {
		item[i].move();
	}

	if (a) {
		player.vx += -player.ax * player.force;
	}
	if (d) {
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;

	if (player.x < 0 + player.width / 2) {
		player.x = 25;
		player.vx = 0;
	}
	if (player.x > canvas.height - player.width / 2) {
		player.x = 775;
		player.vx = 0;
	}

	for (var i = 0; i < 5; i++) {
		if (hazard[i].y > canvas.height + hazard[i].height / 2) {
			hazard[i].y = 0 - hazard[i].height / 2;
			hazard[i].x = random(25, 775);
			hazard[i].vy = random(5, 10);
		}
	}

	for (var i = 0; i < 5; i++) {
		if (hazard[i].hitTestObject(player)) {
			player.color = "red";
			setTimeout(playerYellow, 500);
			for (var i = 0; i < 5; i++) {
				hazard[i].y = 0 - hazard[i].height / 2;
				hazard[i].x = random(25, 775);
				hazard[i].vy = random(5, 10);
				item[i].y = 0 - item[i].height / 2;
				item[i].x = random(25, 775);
				item[i].vy = random(5, 10);
				score = 0
			}
		}
	}

	for (var i = 0; i < 5; i++) {
		if (item[i].y > canvas.height + item[i].height / 2) {
			item[i].y = 0 - item[i].height / 2;
			item[i].x = random(25, 775);
			item[i].vy = random(5, 10);
		}
	}

	for (var i = 0; i < 5; i++) {
		if (item[i].hitTestObject(player)) {
			player.color = "green";
			setTimeout(playerYellow, 500);
			item[i].y = 0 - item[i].height / 2;
			item[i].x = random(25, 775);
			item[i].vy = random(5, 10);
			score++
		}
	}

	player.drawRect();
	for (var i = 0; i < 5; i++) {
		hazard[i].drawCircle();
	}
	for (var i = 0; i < 5; i++) {
		item[i].drawRect();
	}

	context.save();
	context.font = " bold 30px Arial";
	context.fillStyle = "black";
	context.fillText("Score: " + score.toString(), 50, 50);
	context.restore();
}

playerYellow = function () {
	player.color = "#ffff00"
}
