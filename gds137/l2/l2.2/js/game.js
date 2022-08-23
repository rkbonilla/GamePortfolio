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

    //Move the paddle up and down.
	if(up)
	{
		console.log("Moving Up");
		player1.y += -2;
	}
	if(down)
	{
		console.log("Moving Down");
		player1.y += 2;
	}
	

    //Drawing new ball instance to screen.
    player1.drawRect();
}
