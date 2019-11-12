var canvas = document.getElementById('canvas2d');
canvas.width = canvas.height = 400;
var c = canvas.getContext("2d") //c is context

var scale = 10;
var rows = canvas.height/scale;
var column = canvas.width/scale;
var speedChoice = 450; // dit heeft invloed op de snelheid (MAX. 500)
var speed = 500 - speedChoice;

var snake;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();

    fruit.pickLocation();
    console.log(fruit)

    window.setInterval(()=>{
        c.clearRect(0, 0, canvas.width, canvas.height);
        snake.checkCollision();
        fruit.draw();
        snake.update();
        snake.draw();

        if(snake.eat(fruit)){
            fruit.pickLocation(); 
        }

        snake.checkCollision();
        document.querySelector(".score").innerText = snake.total;

    }, speed); 
}());

window.addEventListener('keydown',  ((evt)=> {
    console.log(evt);
    const direction = evt.key.replace('Arrow','')
    console.log(direction);
    snake.keyPressed(direction);
}))

