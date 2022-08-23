//Setting up the Canvas, setting interval to 60fps, and setting an animation timer.
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000 / 60;
var timer = setInterval(animate, interval);
var score = 0;
var gravity = 1;
var frictionX = 0.99;
var frictionY = 0.99;

var player = new GameObject();
player.y = canvas.height - 50;
player.width = 250;
player.height = 40;
player.color = "cyan";
player.force = 2;
player.ax = 1

var ball = new GameObject();
ball.width = 80;
ball.color = "magenta";
ball.vx = 5;
ball.vy = 0;
ball.force = 5;

//Define Booleans for each key
var left = false;
var right = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e) {
    //---This logs key codes into the browser's console.
    //console.log("Pressed" + e.keyCode);
    if (e.keyCode == 37) {
        left = true;
    }
    if (e.keyCode == 39) {
        right = true;
    }
}

function release(e) {
    //---This logs key codes into the browser's console.
    //console.log("Released" + e.keyCode);
    if (e.keyCode == 37) {
        left = false;
    }
    if (e.keyCode == 39) {
        right = false;
    }
}

function animate() {
    //Clearing the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.vx *= frictionX;
    ball.vy *= frictionY
    ball.vy += gravity

    //Moving the ball
    ball.move();

    //Move player left.
    if (left) {
        //console.log("Moving left.");
        player.vx += -(player.ax * player.force);
    }

    //Move player right.
    if (right) {
        //console.log("Moving right.");
        player.vx += (player.ax * player.force);
    }

    player.vx *= 0.90;
    player.move();

    if (player.x < 0 + player.width / 2) {
        player.x = 0 + player.width / 2;
        player.vx = 0
    }

    if (player.x > canvas.width - player.width / 2) {
        player.x = canvas.width - player.width / 2;
        player.vx = 0
    }

    //Ball collision with paddle.
    if (ball.collision(player)) {

        ball.vy = -35;
        ball.y = player.y - player.height / 2 - ball.width / 2;
        score++;

        //Ball hits far left.
        if (ball.x < player.x - player.width * (1 / 3)) {
            ball.vx += -ball.force * 5;
        }

        //Ball hits midleft.
        if (ball.x < player.x - player.width * (1 / 6)) {
            ball.vx += -ball.force;
        }

        //Ball hits far right.
        if (ball.x > player.x + player.width * (1 / 3)) {
            ball.vx += ball.force * 5;
        }

        //Ball hits midright.
        if (ball.x > player.x + player.width * (1 / 6)) {
            ball.vx += ball.force;
        }
    }

    //Bouncing ball off left wall.
    if (ball.x < 0 + ball.width / 2) {
        ball.x = 0 + ball.width / 2;
        ball.vx = -ball.vx;
    }

    //Bouncing ball off left wall.
    if (ball.x > canvas.width - ball.width / 2) {
        ball.x = canvas.width - ball.width / 2
        ball.vx = -ball.vx;
    }

    //Ball bouncing off top wall.
    if (ball.y < 0 + ball.width / 2) {
        ball.y = 0 + ball.width / 2
        ball.vy = -ball.vy;
    }

    //Ball bouncing off the bottom.
    if (ball.y > canvas.height - ball.width / 2) {
        ball.y = canvas.height - ball.width / 2;
        ball.vy = -ball.vy * 0.67;
        score = 0;
    }

    //Score
    context.save();
    context.font = "16px Arial black";
    context.fillStyle = "#555555";
    context.fillText("Score: " + score.toString(), 80, 25);
    context.restore;

    //Drawing game objects to the screen.
    player.drawRect();
    ball.drawCircle();

    //Line connecting ball and paddle.
    context.save();
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(ball.x, ball.y);
    context.lineTo(player.x, player.y);
    context.closePath();
    context.lineWidth = "1";
    context.stroke();
    context.restore();
}
