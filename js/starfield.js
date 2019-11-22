
var canvas = document.getElementById('canvas2d');
// window.addEventListener("onresize", windowResize);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d"); //c is context
var starDivider = 4; //lager == meer sterren
var numStars = (canvas.width + canvas.height) / starDivider;
var starArray = [];
var size = 1;
var fl = canvas.width;
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var speedVar = 2;
var blackHole = 50

for(var i = 0; i < numStars; i++){
  starArray[i] = new Star();
}

function Star(){
    do{
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;
    }while((this.x>centerX-blackHole && this.x<centerX+blackHole)&&(this.y>centerY-blackHole && this.y<centerY+blackHole));
    
    

    this.move = function(){
        this.z = this.z-speed;
        if(this.z<=0){
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.z = canvas.width;
            do{
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = canvas.width;
            }while((this.x>centerX-blackHole && this.x<centerX+blackHole)&&(this.y>centerY-blackHole && this.y<centerY+blackHole));
        
        }
    }


    this.show = function (){
        var x,y,s;
        x = (this.x - centerX) * (fl/this.z);
        x = x + centerX;
        y = (this.y - centerY) * (fl/this.z);
        y = y + centerY;


        s = size * (fl/this.z);
        speed=s*speedVar;
        c.beginPath();
        c.fillStyle = "white";
        c.arc(x, y, s, 0, Math.PI*2);
        c.fill();
    }
}

function draw(){
    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width, canvas.height);
    fl = canvas.width;
    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;
    for(var i = 0; i < numStars; i++){
        starArray[i].show();
        starArray[i].move();
    }
}

function update(){
    draw();
    requestAnimationFrame(update);
}
update();

function windowResize(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;
    numStars = (canvas.width + canvas.height) / starDivider;
    centerX = canvas.width/2;
    centerY = canvas.height/2;
    console.log("resized");
    for(var i = 0; i < numStars; i++){
        starArray[i] = new Star();
    }
}


