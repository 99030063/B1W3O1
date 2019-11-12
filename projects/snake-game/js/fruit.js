function Fruit(){
    this.x; 
    this.y;

    this.pickLocation = function(){
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale
        this.y = (Math.floor(Math.random() * column - 1) + 1) * scale
    
    }

    this.draw = function(){
        c.fillStyle ="#FF4047"
        c.fillRect(this.x, this.y, scale, scale);

        c.strokeStyle = "#000000";
        c.strokeRect (this.x, this.y, scale, scale);
    }
}