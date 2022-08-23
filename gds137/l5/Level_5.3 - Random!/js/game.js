//----------------------------------------------------------Instructions------------------------------------------------
//---------------------In this assignment you will draw multiple squares on the screen in random locations--------------
//---------------------First you will create an array of particles. Then you will move and draw them.-------------------
//---------------------Follow the comments below to complete this assignment--------------------------------------------

var canvas;
var context;
var timer;
var interval;
var player;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

function randomRange(high, low) {
	return Math.floor(Math.random() * (high - low) + low);
}

//----------------------------------------------Step 1: Create particles------------------------------------------------
//Declare an "amount" variable and set it to 12

//Create an array called "particles" to store the particles

//Create a for loop that loops the number of times specified by the "amount" variable

//Within the for loop do the following: 
//	1.Instantiate new GameObject and store it in each index of the particles array
//	2.set each particle's x property to a random number from 0 - the canvas.width 
//	3.set each particle's y property to a random number from 0 - the canvas.height

//---------------------------------------------------------------------------------------------------------------

var amount = 12;

var particles = []

for (i = 0; i < amount; i++) {
	particles[i] = new GameObject({x:randomRange(canvas.width, 0),y:randomRange(canvas.height, 0)});
}

var fX = .85;
var fY = .97;

var gravity = 1;

interval = 1000 / 60;
timer = setInterval(animate, interval);

function animate() {

	context.clearRect(0, 0, canvas.width, canvas.height);

	//--------------------------------------Step 2: Draw Particles---------------------------------------------------------
	//DrawRect()for each particle using a for loop.
	//The for loop should use the particles.length for its limit


	//----------------------------------------------------------------------------------------------------------------------

	for (i = 0; i < particles.length; i++) {
		particles[i].drawRect();
	}
}

//-----------------------------------------------FINAL STEP: View Particles-------------------------------------------------
//Refresh your program a few times to see the particles spawn in random locations!