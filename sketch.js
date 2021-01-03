var bgImg

function preload(){
	bgImg = loadImage("images/jungle.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}


function draw() {  
  background(bgImg);
  drawSprites();

}



