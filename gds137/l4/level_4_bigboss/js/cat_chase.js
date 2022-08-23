var canvas;
var context;
var timer;
var interval;
var player;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

function randomRange(high, low) {
	return Math.round(Math.random() * (high - low) + low);
}

player = new GameObject({ x: canvas.width / 3, y: canvas.height / 2 - 100 });

platform0 = new GameObject();
platform0.width = canvas.width;
platform0.x = platform0.width / 2;
platform0.y = canvas.height - platform0.height / 2;
platform0.color = "#66ff33";

obstacle = new GameObject();
obstacle.width = player.width / 2;
obstacle.color = "blue";
obstacle.x = canvas.width + 100;
obstacle.vx = -10;
obstacle.y = (platform0.y - platform0.height / 2 - obstacle.height / 2) - 1;

var fX = .85;
var fY = .97;

var gravity = 1;

interval = 1000 / 60;
timer = setInterval(animate, interval);

function animate() {

	context.clearRect(0, 0, canvas.width, canvas.height);

	obstacle.move();


	if (Space && player.canJump && player.vy == 0) {
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	/*if (a) {
		player.vx += -player.ax * player.force;
	}
	if (d) {
		player.vx += player.ax * player.force;
	}*/

	player.vx *= fX;
	player.vy *= fY;

	player.vy += gravity;

	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);


	while (platform0.hitTestPoint(player.bottom()) && player.vy >= 0) {
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while (platform0.hitTestPoint(player.left()) && player.vx <= 0) {
		player.x++;
		player.vx = 0;
	}
	while (platform0.hitTestPoint(player.right()) && player.vx >= 0) {
		player.x--;
		player.vx = 0;
	}
	while (platform0.hitTestPoint(player.top()) && player.vy <= 0) {
		player.y++;
		player.vy = 0;
	}

	while (player.hitTestPoint(obstacle.left())) {
		obstacle.x++;
		player.vx = 0;
	}

	while (player.hitTestPoint(obstacle.top())) {
		player.y--;
		player.vy = 0;
	}

	if (obstacle.x < 0 - obstacle.width) {
		obstacle.x = randomRange(1011, 1001);
		obstacle.vx = -randomRange(20, 10)
	}

	platform0.drawRect();
	player.drawRect();
	obstacle.drawRect();
}

