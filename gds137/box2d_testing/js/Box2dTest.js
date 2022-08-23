//Shortening the standard objects in Box2dWeb by defining them as simpler variables.
var b2Vec2 = Box2D.Common.Math.b2Vec2
var b2BodyDef = Box2D.Dynamics.b2BodyDef
var b2Body = Box2D.Dynamics.b2Body
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef
var b2Fixture = Box2D.Dynamics.b2Fixture
var b2World = Box2D.Dynamics.b2World
var b2MassData = Box2D.Collision.Shapes.b2MassData
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

//Setting up timer.
window.setInterval(update, 1000 / 60);

//Defining update function for timer above.
function update() {
   world.Step(1 / 60, 10, 10);
   world.DrawDebugData();
   world.ClearForces();
};

function randomRange(high, low) {
   return (Math.random() * (high - low) + low);
}

//Creating a world with gravity. The 10 is gravity at 10 m/s/s.
world = new b2World(
   new b2Vec2(0, 10)
   , true
)

//Defining a body for the object we will create, this is what will actually move later.
var bodyDef = [];
var fixDef = [];
var body = [];

for (let i = 0; i < 25; i++) {
   bodyDef[i] = new b2BodyDef();
   bodyDef[i].type = b2Body.b2_dynamicBody;
   bodyDef[i].position.x = randomRange(15, 7);
   bodyDef[i].position.y = 0;

   //Defining a fixture that will sit on the body, this is what we see moving.
   fixDef[i] = new b2FixtureDef();
   fixDef[i].density = 1.0;
   fixDef[i].friction = 0.5;
   fixDef[i].restitution = randomRange(1.5, 0.5);
   fixDef[i].shape = new b2CircleShape(1*fixDef[i].restitution); //Built into Box2D!!! Shortened by variable up top.

   //Creating the actual body for our object.
   body[i] = world.CreateBody(bodyDef[i])
   body[i].CreateFixture(fixDef[i]);
   body[i].SetLinearVelocity(new b2Vec2(randomRange(15, -15), 2));

   //Creating the fixture attached to the body.
   //body.CreateFixture(fixDef);
}
//Calling the world's Step method. (Size of the time step, number of velocity iterations, number of position iterations.)
world.Step(1 / 60, 10, 10);

function setupDebugDraw() {
   var b2DebugDraw = Box2D.Dynamics.b2DebugDraw
   var debugDraw = new b2DebugDraw();
   debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
   debugDraw.SetDrawScale(30.0);
   debugDraw.SetFillAlpha(0.3);
   debugDraw.SetLineThickness(1.0);
   debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
   world.SetDebugDraw(debugDraw);
};

//This is creating the floor, for some reason it has to sit right before drawing.
for (let i = 0; i < bodyDef.length; i++) {
   bodyDef[i].type = b2Body.b2_staticBody;
   bodyDef[i].position.x = 5;
   bodyDef[i].position.y = 12.3;
   fixDef[i].shape = new b2PolygonShape;
   fixDef[i].shape.SetAsBox(15, 0.2);
   world.CreateBody(bodyDef[i]).CreateFixture(fixDef[i]);

   //This creates the walls.
   bodyDef[i].position.x = 0.2;
   bodyDef[i].position.y = 0;
   fixDef[i].shape.SetAsBox(0.2, 12);
   world.CreateBody(bodyDef[i]).CreateFixture(fixDef[i]);
   bodyDef[i].position.x = 20 - 0.2;
   bodyDef[i].position.y = 0;
   world.CreateBody(bodyDef[i]).CreateFixture(fixDef[i]);

   bodyDef[i].type = b2Body.b2_staticBody;
   bodyDef[i].position.x = 5;
   bodyDef[i].position.y = 0;
   fixDef[i].shape = new b2PolygonShape;
   fixDef[i].shape.SetAsBox(15, 0.2);
   world.CreateBody(bodyDef[i]).CreateFixture(fixDef[i]);
}
update();
setupDebugDraw();
