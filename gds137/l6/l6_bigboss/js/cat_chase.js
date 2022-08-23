var canvas;
var context;
var timer;
var interval;
var player;
var score = 0;
var scoreTimer = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
var img = document.getElementById("cloud");

function randomRange(high, low) {
	return Math.round(Math.random() * (high - low) + low);
}

player = new GameObject({ x: canvas.width / 3, y: canvas.height / 2 - 100 });
player.width = 50;
player.height = 50;

platform0 = new GameObject();
platform0.height = 50;
platform0.width = canvas.width;
platform0.x = platform0.width / 2;
platform0.y = canvas.height - platform0.height / 2;
platform0.color = "#66ff33";

obstacle = new GameObject();
obstacle.width = player.width / 2;
obstacle.height = player.height;
obstacle.color = "blue";
obstacle.x = canvas.width + 100;
obstacle.vx = -5;
obstacle.y = (platform0.y - platform0.height / 2 - obstacle.height / 2) - 1;

background = new GameObject();
background.width = canvas.width;
background.height = canvas.height;
background.vx = -1;

var fX = .85;
var fY = .97;

var gravity = 1;

interval = 1000 / 60;
timer = setInterval(animate, interval);

function animate() {

	context.clearRect(0, 0, canvas.width, canvas.height);

	obstacle.move();
	background.move();

	if (Space && player.canJump && player.vy == 0) {
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	player.vx *= fX;
	player.vy *= fY;

	player.vy += gravity;

	obstacle.x += Math.round(obstacle.vx);
	player.y += Math.round(player.vy);

	if (!player.hitTestObject(obstacle)) {
		scoreTimer++
		if (scoreTimer % 10 == 0) {
			score++
		}
	}

	while (platform0.hitTestPoint(player.bottom()) && player.vy >= 0) {
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}

	while (player.hitTestPoint(obstacle.left())) {
		obstacle.x++;
	}

	while (player.hitTestPoint(obstacle.top())) {
		player.y--;
	}

	if (obstacle.x < 0 - obstacle.width) {
		obstacle.x = randomRange(1011, 1001);
		obstacle.vx = -randomRange(10, 5)
	}

	if (background.x < 0 - background.width / 2) {
		background.x = canvas.width - 500;
	}

	context.drawImage(img, background.x - 500, background.y - 400);
	context.drawImage(img, background.x + 500, background.y - 400);

	context.save()
	context.font = "25px Arial, cursive"
	context.fillStyle = "black"
	context.fillText("Score: " + score.toString(), canvas.width - 150, 30)
	context.restore()

	platform0.drawRect();
	player.drawRect();
	obstacle.drawRect();
}

