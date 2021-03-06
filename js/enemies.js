/*let img;
let c;

/*function preload() {
    img = loadImage ("Billeder/slime.png");
}

function setup() {
    Image(img, 0, 0);
}

/*function setup() {
    img.loadPixels();
    c = img.get(img.width / 2, img.height / 2);
}*/

let aktiv2 = true; 

 class Enemy { 
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.yspeed = 0; 
        this.height = 50; 
        this.width = 50;
        //this.aktiv = true;
        this.xspeed = -7; 
    }
    
    move() {  
        if(aktiv2) {
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
                    this.xspeed *= -1; 
                }
                //Samme funktion blot på y-aksen. 
                if (undersoegKollision(vertikalRekt, obstacleRekt)) {
                    while (undersoegKollision(vertikalRekt, obstacleRekt)) {
                        vertikalRekt.y -= Math.sign(this.yspeed); 
                    }
                    this.y = vertikalRekt.y; 
                    this.yspeed *= -1; 
                }
            } 
    
            this.x += this.xspeed;
            this.y += this.yspeed;
    
            this.x = constrain(this.x, 0, 1230);
            this.y = constrain(this.y, 0, canvas.height);

            // Bounce
            // for (let i = 0; i < enemies.length; i++) {
            //     var d = this.x;
            //     if (d === 0 || d === 1230) {
            //         this.xspeed *= -1;
            //     }
            // }

            //Bounce-funktionen
            if(this.x === 0 || this.x === 1230) this.xspeed *= -1
        }
    }

    draw() {
        //Enemyimg = loadImage ("Billeder/slime.png");
        context.fillStyle = "blue"; 
        context.fillRect(this.x, this.y, this.width, this.height); 
        //drawimage(Enemyimg)
    }
}