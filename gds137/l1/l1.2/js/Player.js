function Ball() {

    //Player's location.
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    //Player's dimensions.
    this.width = 100;
    this.height = 100;

    //Player's color.
    this.color = "000000";

    //Player's force.
    this.force = 0;

    //Player's velocity on each axis.
    this.vx = 0;
    this.vy = 0;

    //THIS DRAWS A FILLED RECTANGLE.
    /*this.drawRect = function () {

        context.save();
        context.fillStyle = this.color;
        context.translate(this.x, this.y);
        context.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height);
        context.restore();

    }*/

    //THIS DRAWS A FILLED CIRCLE.
    this.drawBall = function () {

        context.save();
        context.fillStyle = this.color;
        context.translate(this.x, this.y);
        context.beginPath();
        context.arc(0, 0, this.width / 2, 0, 360 * Math.PI / 180, true)
        context.closePath();
        context.fill();
        context.restore();
    }

    //Moving player's position.
    this.move = function () {

        this.x += this.vx;
        this.y += this.vy;
    }
}