//Setting up the Canvas, setting interval to 60fps, and setting an animation timer.
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000 / 60;
var timer = setInterval(animate, interval);

//Creating instance of the paddle.
var player1 = new GameObject();

player1.width = 12.5;
player1.height = 125;
player1.x = player1.width / 2;

//Creating instance of the ball.
var ball = new GameObject();
ball.vx = -5;
ball.vy = 5;

//Define Booleans for each key
var up = false;
var down = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e) {
    //---This logs key codes into the browser's console.
    //console.log("Pressed" + e.keyCode);
    if (e.keyCode == 87) {
        up = true;
    }
    if (e.keyCode == 83) {
        down = true;
    }
}

function release(e) {
    //---This logs key codes into the browser's console.
    //console.log("Released" + e.keyCode);
    if (e.keyCode == 87) {
        up = false;
    }
    if (e.keyCode == 83) {
        down = false;
    }
}

function animate() {
    //Clearing the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Moving the ball
    ball.move();

    //Move the paddle up.
    if (up) {
        //console.log("Moving Up");
        player1.y += -5;
        if (player1.y < 0 + player1.height / 2) {
            player1.y = 0 + player1.height / 2;
        }
    }

    //Moving the paddle down.
    if (down) {
        //console.log("Moving Down");
        player1.y += 5;
        if (player1.y > canvas.height - player1.height / 2) {
            player1.y = canvas.height - player1.height / 2;
        }
    }

    //Bouncing ball off right wall.
    if (ball.x > canvas.width - ball.width / 2) {
        ball.vx = -5;
    }

    //Bouncing ball off left wall.
    if (ball.x < 0 + ball.width / 2) {
        ball.vx = 5;
    }

    //Bouncing ball off top wall.
    if (ball.y < 0 + ball.height / 2) {
        ball.vy = 5;
    }

    //Bouncing ball off bottom wall.
    if (ball.y > canvas.height - ball.height / 2) {
        ball.vy = -5;
    }

    //Drawing game objects to the screen.
    ball.drawCircle();
    player1.drawRect();
}
