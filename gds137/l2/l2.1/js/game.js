//Setting up the Canvas, setting interval to 60fps, and setting an animation timer.
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000 / 60;
var timer = setInterval(animate, interval);

//Creating instance of the paddle..
var player1 = new GameObject();

player1.x = 25;
player1.width = 12.5;
player1.height = 125;

function animate() {

    //Clearing the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Drawing new ball instance to screen.
    player1.drawRect();
}
