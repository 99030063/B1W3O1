function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = scale * 0;
    this.total = 0;
    this.tail = [];



    this.draw = function(){
        for(let i = 0; i < this.tail.length; i++){
            c.fillStyle ="#FFFFFF";
            c.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);

            c.strokeStyle = "#000000"
            c.strokeRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        c.fillStyle = "#00FF00";
        c.fillRect(this.x, this.y, scale, scale);

        c.strokeStyle = "#000000";
        c.strokeRect (this.x, this.y, scale, scale);
    }

    this.update = function(){
        for(let i = 0; i<this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1]
        }

        this.tail[this.total - 1] = { x:this.x, y: this.y };



        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        //border collision check
        if (this.x > canvas.width - 1){
            this.x = 0;
        }

        if (this.y > canvas.height - 1){
            this.y = 0;
        }

        if (this.x < 0){
            this.x = canvas.width;
        }

        if (this.y < 0){
            this.y = canvas.height;
        }
    }
    this.dir = function(x, y){
        this.xSpeed = scale * x;
        this.ySpeed = scale * y;
    }

    this.keyPressed = function(direction){
        if(direction === 'Up'){
            snake.dir(0,-1);
        }else if(direction === 'Down'){
            snake.dir(0, 1);
        }else if(direction === 'Left'){
            snake.dir(-1, 0);
        }else if(direction === 'Right'){
            snake.dir(1, 0);
        }
    }
    this.eat = function(fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            this.total++;
            return true;
        }
        return false;
    }
    
    this.checkCollision = function() {
        for(var i = 0; i<this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                console.log("Colliding")
                this.total = 0;
                this.tail = [];
            }
        }
    }
}