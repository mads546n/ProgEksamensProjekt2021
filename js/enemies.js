 function Enemy(x, y) { 
    this.x = x; 
    this.y = y;
    this.xspeed = 0; 
    this.yspeed = 0; 
    this.height = 50; 
    this.width = 50;
    this.aktiv = true;
    this.xspeed = -1; 

    this.move = function() {  
        if(this.aktiv) {
            //Tyngdekraft
            this.yspeed += 1; 
    
            //Horisontal kollision-rektangler
            let horisontalRekt = {
                x: this.x + this.xspeed,
                y: this.y, 
                width: this.width,
                height: this.height
            } 
    
            //Vertikale kollision-rektangler
            let vertikalRekt = {
                x: this.x,
                y: this.y + this.yspeed,
                width: this.width,
                height: this.height
            }
            for (let i = 0; i < obstacles.length; i++) {
                let obstacleRekt = {
                    x: obstacles[i].x,
                    y: obstacles[i].y,
                    width: obstacles[i].width,
                    height: obstacles[i].height
                }
                if (undersoegKollision(horisontalRekt, obstacleRekt)) {
                    while (undersoegKollision(horisontalRekt, obstacleRekt)) {
                        horisontalRekt.x -= Math.sign(this.xspeed); 
                    }
                    this.x = horisontalRekt.x; 
                    this.xspeed = 0; 
                }
                //Samme funktion blot på y-aksen. 
                if (undersoegKollision(vertikalRekt, obstacleRekt)) {
                    while (undersoegKollision(vertikalRekt, obstacleRekt)) {
                        vertikalRekt.y -= Math.sign(this.yspeed); 
                    }
                    this.y = vertikalRekt.y; 
                    this.yspeed = 0; 
                }
            } 
    
            this.x += this.xspeed;
            this.y += this.yspeed;
    
            this.x = constrain(this.x, 0, canvas.width);
            this.y = constrain(this.y, 0, canvas.height);

            this.bounce(); 
        }
    }

    this.draw = function() {
        context.fillStyle = "blue"; 
        context.fillRect(this.x, this.y, this.width, this.height); 
    }
    
    this.bounce = function() {
        for (i = 0; i < enemies.length; i++) {
            var pos = enemies[i];
            var d = this.x;
            if (d === 0 || d === 1230) {
                console.log(d);
                this.xspeed *= -1;
            } 
        }
    }   
}