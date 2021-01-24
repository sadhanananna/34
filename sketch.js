//Create variables here
var dog,dogImg,happyDog,database,foods,foodStock;


function preload()
{
  //load images here
  dogImg = loadImage("dog.png");
  happyDog = loadImage("happy dog.png");
}

function setup() {
createCanvas(500, 500);
database = firebase.database();
foodStock = database.ref('food');
foodStock.on("value",readStock);

dog = createSprite(250,350,10,60);
dog.addImage(dogImg);
dog.scale=0.2;
}

function draw() {  
background("green");
if(foods!==undefined){
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foods,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDog);
  }

  drawSprites();
}
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

database.ref('/').update({
  food:x
});
}

function readStock(data){
foods=data.val();
}



