
var character;
var myGameArea = {
  canvas : document.createElement("canvas"),
  start: function(){
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas,document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea,50);
    window.addEventListener('keydown',function (key){
      myGameArea.keys = (myGameArea.keys ||[]);
      myGameArea.keys[key.keyCode] = true;
    })
    window.addEventListener('keyup', function(key){
      myGameArea.keys[key.keyCode] = false;
    })
  },
  clear : function(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
  }
}
function startGame() {
  myGameArea.start();
  character = new Character(30, 30, "red", 10, 120);
  square1 = new gridSquare(150,150);
}

function Character(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.acceleration
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
 
  }
this.movePlayer = function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
function gridSquare(x,y){
  this.width = 30;
  this.height = 30;
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = "green";
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}
 function updateGameArea() {
  myGameArea.clear();
  character.speedX = 0;
  character.speedY = 0;
  if (myGameArea.keys && myGameArea.keys[37]) {character.speedX = -5 ;}
  if (myGameArea.keys && myGameArea.keys[39]) {character.speedX = 5 ;}
  if (myGameArea.keys && myGameArea.keys[38]) {character.speedY = -5 ;}
  if (myGameArea.keys && myGameArea.keys[40]) {character.speedY = 5 ;}
  character.movePlayer();
  character.update();
  square1.update();
}
