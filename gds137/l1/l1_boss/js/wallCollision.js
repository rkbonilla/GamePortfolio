//Setting up the Canvas, setting interval to 60fps, and setting an animation timer.
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000 / 60;
var timer = setInterval(animate, interval);
var player;
var score = 0;

function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

//Creating instance of player.
player = new Ball();

//Setting player's speed on each axis.
player.vx = 2;
player.vy = 2;

function animate() {

    //Clearing the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Moving player with move() function from Player.js.
    player.move();

    //Bouncing off right wall.
    if (player.x > canvas.width - player.width / 2) {
        player.vx = -randomRange(50, 2);
        player.color = `rgb(${randomRange(255, 0)},${randomRange(255, 0)},${randomRange(255, 0)})`;
        score++

    }

    //Bouncing off left wall.
    if (player.x < 0 + player.width / 2) {
        player.vx = randomRange(50, 2);
        player.color = `rgb(${randomRange(255, 0)},${randomRange(255, 0)},${randomRange(255, 0)})`;
        score++
    }

    //Bouncing off top wall.
    if (player.y < 0 + player.height / 2) {
        player.vy = randomRange(50, 2);
        player.color = `rgb(${randomRange(255, 0)},${randomRange(255, 0)},${randomRange(255, 0)})`;
        score++
    }

    //Bouncing off bottom wall.
    if (player.y > canvas.height - player.height / 2) {
        player.vy = -randomRange(50, 2);
        player.color = `rgb(${randomRange(255, 0)},${randomRange(255, 0)},${randomRange(255, 0)})`;
        score++
    }

    //Drawing new player instance to screen.
    player.drawBall();

    context.save();
    context.font = "25px Arial";
    context.fillStyle = "black";
    context.fillText("Bounces: " + score.toString(), canvas.width - 200, 30)
    context.restore();
}
