//Setting up the Canvas, setting interval to 60fps, and setting an animation timer.
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000 / 60;
var timer = setInterval(animate, interval);
var prevX;
var p1Wins = 0;
var p2Wins = 0;

//Creating instance of the paddle.
var player1 = new GameObject();
player1.color = "red";
player1.width = 12.5;
player1.height = 125;
player1.x = player1.width / 2;

//Creating player 2 paddle.
var player2 = new GameObject();
player2.color = "green";
player2.width = 12.5;
player2.height = 125;
player2.x = canvas.width - player2.width / 2;

//Creating instance of the ball.
var ball = new GameObject();
ball.vx = -5;
ball.vy = -5;
ball.color = "blue";

//Define Booleans for each key
var up = false;
var down = false;
var up1 = false;
var down1 = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e) {
    //---This logs key codes into the browser's console.
    console.log("Pressed" + e.keyCode);
    if (e.keyCode == 87) {
        up = true;
    }
    if (e.keyCode == 83) {
        down = true;
    }
    if (e.keyCode == 38) {
        up1 = true;
    }
    if (e.keyCode == 40) {
        down1 = true;
    }
}

function release(e) {
    //---This logs key codes into the browser's console.
    console.log("Released" + e.keyCode);
    if (e.keyCode == 87) {
        up = false;
    }
    if (e.keyCode == 83) {
        down = false;
    }
    if (e.keyCode == 38) {
        up1 = false;
    }
    if (e.keyCode == 40) {
        down1 = false;
    }
}

function animate() {
    //Clearing the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Moving the ball
    ball.move();

    //Move player1 up.
    if (up) {
        //console.log("Moving Up");
        player1.y += -5;
        if (player1.y < 0 + player1.height / 2) {
            player1.y = 0 + player1.height / 2;
        }
    }

    //Move player1 down.
    if (down) {
        //console.log("Moving Down");
        player1.y += 5;
        if (player1.y > canvas.height - player1.height / 2) {
            player1.y = canvas.height - player1.height / 2;
        }
    }

    //Move player2 up.
    if (up1) {
        //console.log("Moving Up");
        player2.y += -5;
        if (player2.y < 0 + player2.height / 2) {
            player2.y = 0 + player2.height / 2;
        }
    }

    //Move player2 down.
    if (down1) {
        //console.log("Moving Down");
        player2.y += 5;
        if (player2.y > canvas.height - player2.height / 2) {
            player2.y = canvas.height - player2.height / 2;
        }
    }

    //Bouncing ball off right wall.
    if (ball.x > canvas.width - ball.width / 2) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.vy = -5;
        ball.vx = -5;
        p1Wins++;
    }

    //Bouncing ball off left wall.
    if (ball.x < 0 + ball.width / 2) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.vy = 5;
        ball.vx = 5;
        p2Wins++;
    }

    //Bouncing ball off top wall.
    if (ball.y < 0 + ball.height / 2) {
        ball.vy = 5;
    }

    //Bouncing ball off bottom wall.
    if (ball.y > canvas.height - ball.height / 2) {
        ball.vy = -5;
    }

    //Ball collision with player1.
    if (ball.collision(player1)) {
        //Ball hits top.
        if (ball.y < player1.y - player1.height * (1 / 6)) {
            ball.vx = 5;
            ball.vy = -5;
        }

        //Ball hits bottom.
        else if (ball.y > player1.y + player1.height * (1 / 6)) {
            ball.vx = 5;
            ball.vy = 5;
        }

        //Ball hits middle.
        else {
            ball.vx = -ball.vx;
        }
    }

    //Ball collision with player2.
    if (ball.collision(player2)) {
        //Ball hits top.
        if (ball.y < player2.y - player2.height * (1 / 6)) {
            ball.vx = -5;
            ball.vy = -5;
        }

        //Ball hits bottom.
        else if (ball.y > player2.y + player2.height * (1 / 6)) {
            ball.vx = -5;
            ball.vy = 5;
        }

        //Ball hits middle.
        else {
            ball.vx = -ball.vx;
        }
    }

    context.save();
    context.font = "25px Arial";
    context.textBaseline = 'middle';
    context.textAlign = "center";
    context.fillStyle = "black";
    context.fillText("Player 1 | Player 2", canvas.width / 2, 25);
    context.fillText(p1Wins.toString() + " - " + p2Wins.toString(), canvas.width / 2, 60);
    context.restore;

    //Drawing game objects to the screen.
    ball.drawCircle();
    player1.drawRect();
    player2.drawRect();
}
