//Shortening the standard objects in Box2dWeb by defining them as simpler variables.
var b2Vec2 = Box2D.Common.Math.b2Vec2
   , b2BodyDef = Box2D.Dynamics.b2BodyDef
   , b2Body = Box2D.Dynamics.b2Body
   , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
   , b2Fixture = Box2D.Dynamics.b2Fixture
   , b2World = Box2D.Dynamics.b2World
   , b2MassData = Box2D.Collision.Shapes.b2MassData
   , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
   , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
   , b2DebugDraw = Box2D.Dynamics.b2DebugDraw;


//Creating a world with gravity. The 10 is gravity at 10 m/s/s.
world = new b2World(
   new b2Vec2(0, 10)
   , true
)

//Defining a body for the object we will create, this is what will actually move later.
var bodyDef = new b2BodyDef;

bodyDef.type = b2Body.b2_dynamicBody;
bodyDef.position.x = 15;
bodyDef.position.y = 10;

//Defining a fixture that will sit on the body, this is what we see moving.
var fixDef = new b2FixtureDef;

fixDef.density = 1.0;
fixDef.friction = 1;
fixDef.restitution = 0;
fixDef.shape = new b2PolygonShape(1); //Built into Box2D!!! Shortened by variable up top.
fixDef.shape.SetAsBox(1, 1);

//Creating the actual body for our object.
var body = world.CreateBody(bodyDef);

//Creating the fixture attached to the body.
body.CreateFixture(fixDef);

//Calling the world's Step method. (Size of the time step, number of velocity iterations, number of position iterations.)
world.Step(1 / 60, 10, 10);

//Setting up timer.
window.setInterval(update, 1000 / 60);

//Defining update function for timer above.
function update() {
   world.Step(1 / 60, 10, 10);
   world.DrawDebugData();
   world.ClearForces();
};

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

bodyDef.type = b2Body.b2_staticBody;
bodyDef.position.x = 10;
bodyDef.position.y = 26.4;
fixDef.shape = new b2PolygonShape;
fixDef.shape.SetAsBox(24, 0.2);
world.CreateBody(bodyDef).CreateFixture(fixDef);

update();
setupDebugDraw();
