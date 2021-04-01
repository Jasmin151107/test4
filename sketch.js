var starImg,bgImg,starImg2
var star, starBody;
var fairy,fairyImg,fairyVoice
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	starImg2 = loadImage ("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound();
	fairyVoice.play

	//create fairy sprite and add animation for fairy
	fairy = createSprite(100,500,30,30);
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale = 0.25;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.04;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.y > 470 && starBody.position.y > 470 ){
	  matter.Body.setStatic(starbody,true)
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown(RIGHT_ARROW)){
		fairy.velocityX = 5;
	}
	if(keyDown(LEFT_ARROW)){
		fairy.velcoityY = -5
	}
	
}