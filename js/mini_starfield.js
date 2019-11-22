
var miniCanvas = document.getElementById("starfield2d");
miniCanvas.width = 200;
miniCanvas.height = 200;

var D = miniCanvas.getContext("2d") //c is context;
var starDivider = 4;
var numStars = (miniCanvas.width + miniCanvas.height) / starDivider;
var starArray = [];
var size = 1;
var fl = miniCanvas.width;
var centerX = miniCanvas.width / 2;
var centerY = miniCanvas.height / 2;
var speedVar = 2;
var blackHole = 10;

for(var i = 0; i < numStars; i++){
    starArray[i] = new Star();
}

function Star(){
    do{
        this.x = Math.random() * miniCanvas.width;
        this.y = Math.random() * miniCanvas.height;
        this.z = Math.random() * miniCanvas.width;
    }while((this.x>centerX-blackHole && this.x<centerX+blackHole)&&(this.y>centerY-blackHole && this.y<centerY+blackHole));
    
    

    this.move = function(){
        this.z = this.z-speed;
        
        if(this.z<=0){
            this.x = Math.random() * miniCanvas.width;
            this.y = Math.random() * miniCanvas.height;
            this.z = canvas.width;
            do{
                this.x = Math.random() * miniCanvas.width;
                this.y = Math.random() * miniCanvas.height;
                this.z = miniCanvas.width;
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
        D.beginPath();
        D.fillStyle = "white";
        D.arc(x, y, s, 0, Math.PI*2);
        D.fill();
    }
}

function draw(){
    D.fillStyle = "black";
    D.fillRect(0,0,miniCanvas.width, miniCanvas.height);
    fl = miniCanvas.width;
    miniCanvas.width = miniCanvas.width;
    miniCanvas.height= miniCanvas.height;
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


