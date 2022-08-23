//Setting up the Canvas, setting interval to 60fps, and setting an animation timer.
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000 / 60;
var timer = setInterval(animate, interval);
var player;

//Creating instance of player.
player = new Ball();

function animate() {

    //Clearing the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Moving player to the right.
    player.x += 2;

    //Drawing new player instance to screen.
    player.drawBall();
}
