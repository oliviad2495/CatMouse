var cat, catImg1, catImg2, mouse, mouseImg1, mouseImg2;
var background, backgroundImg;


function preload() {
    //load the images here
backgroundImg = loadImage("images/garden.png");
catImg1 = loadImage("images/cat1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
catImg3 = loadAnimation("images/cat4.png");
mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,650,50,50);
        cat.addAnimation("cat",catImg1);
        cat.scale= 0.3;
    
    mouse = createSprite(100,650,30,30);
        mouse.addAnimation("mouse",mouseImg1);
    mouse.scale = 0.3;

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseHappy",mouseImg3);
        mouse.changeAnimation("mouseHappy");
        cat.addAnimation("happyCat",catImg3);
        mouse.changeAnimation("happyCat");
        cat.velocityX = 0;
    }

    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
if(KeyDown("LEFT_ARROW")){
    mouse.addAnimation("mouseteasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");

    cat.addAnimation("catTeased",catImg2);
    cat.changeAnimation("catTeased");
    cat.velocityX = -2;
}

}
