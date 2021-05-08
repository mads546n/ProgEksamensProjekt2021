function Player(x, y) {
    //Spiller-variabler
    this.x = x; 
    this.y = y;
    //Horisontal velocitet. 
    this.xspeed = 0; 
    //Vertikal velocitet.
    this.yspeed = 0; 
    //Bestemmer hvor lang tid, der skal gå fra at knappen ikke længere er nedtrykket til, at spillerens bevægelse stoppes.
    this.friction = 0.6;
    //Maksimum fart spilleren kan opnå.
    this.maxSpeed = 10;
    this.height = 50; 
    this.width = 50;
    //
    this.aktiv = true; 
    this.score = 0; 
    
    this.skridt = function() {  
        if(this.aktiv) {
            //Horisontal bevægelse. Hvis spilleren ikke bevæger sig til enten en af siderne eller begge sider på samme tid, så vil spilleren ikke få en højere fart.
            if (!leftKey && !rightKey || leftKey && rightKey) {
                //Fart nedsættes
                this.xspeed *=this.friction; 
            } else if (rightKey) {
                //Bevæg til højre
                this.xspeed ++;
            } else if (leftKey) {
                //Bevæg til ventre
                this.xspeed --;
            }

            //Vertikal bevægelse
            if (upKey) {
                this.yspeed -= 15;
            }

            //Tyngdekraft
            this.yspeed += 1; 

            //Angivelse af fart for horisontal bevægelse. Forhindrer at opnå en alt for høj fart.
            if (this.xspeed > this.maxSpeed) {
                this.xspeed = this.maxSpeed; 
            } else if (this.xspeed < -this.maxSpeed) {
                this.xspeed = -this.maxSpeed;
            }
             //Angivelse af fart for vertikel bevægelse
             if (this.yspeed > this.maxSpeed) {
                this.yspeed = this.maxSpeed; 
            } else if (this.yspeed < -this.maxSpeed) {
                this.yspeed = -this.maxSpeed;
            }
            //Angiver x- og yspeeds værdier som hele tal i stedet for decimaler.
            if (this.xspeed > 0) {
                this.xspeed = Math.floor(this.xspeed); 
            } else {
                this.xspeed = Math.ceil(this.xspeed); 
            }
            if (this.yspeed > 0) {
                this.yspeed = Math.floor(this.yspeed); 
            } else {
                this.yspeed = Math.ceil(this.yspeed); 
            }

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

            //Check efter kollisioner mellem Player og Obstacles. Tildeler følgende attributes til obstacle, som player befinder sig på.
            for (let i = 0; i < obstacles.length; i++) {
                let obstacleRekt = {
                    x: obstacles[i].x,
                    y: obstacles[i].y,
                    width: obstacles[i].width,
                    height: obstacles[i].height
                }
                //Angiver xspeed til 0, hvis player kolliderer med en obstacle med de ovenstående attributes på x-aksen.
                if (undersoegKollision(horisontalRekt, obstacleRekt)) {
                    //While-loopet gør, at hvis horisontalRekt og obstacleRekt kolliderer, så flytter horisontalRekt flytter sig få pixels væk obstacle. HorisontalRekt befinder sig i obstacle og flyttes ud af obstacleRekt indtil der er en afstand på 1 pixels, hvor x-speed angives 0, så player fryser.
                    while (undersoegKollision(horisontalRekt, obstacleRekt)) {
                        //Math.sign undersøger, om this.xspeed er negativ eller positiv. Hvis den er positiv og vi bevæger os mod højre, så trækker vi en fra horisontalRekt
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

            //Constrainer Player, så Player ikke kan forlade canvas.
            this.x = constrain(this.x, 0, 1230);
            this.y = constrain(this.y, 0, canvas.height);

            this.doed(); 

            this.collect(); 
        }
    }

    this.draw = function() {
        //Angiver farven på spilleren
        context.fillStyle = "red"; 
        context.fillRect(this.x, this.y, this.width, this.height); 
    }

    this.doed = function() {  
        for (var i = 0; i < enemies.length; i++) {
            var pos = enemies[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
                if (d < 50) { 
                    console.log("starter forfra");
                    this.aktiv = false; 
                    aktiv2 = false; 
                    gameLoop = 0; 
                    alert("Du har indsalet " + this.score + " coins"); 
                    location.reload(); 
            }
        }
    }

    this.collect = function() {
        for (var i = 0; i < coins.length; i++) {
            var pos1 = coins[i];
            var pos2 = coins[i];
            var pos3 = coins[i];

            var d = dist(this.x, this.y, pos1.x, pos1.y);
                if (d < 50) {
                    coins.shift();
                    coins.push(new Coin(floor(random(1200)), 610, 22, 22));
                    //coins.push(new Coin(floor(random(1200)), 310, 22, 22));
                    //coins.push(new Coin(floor(random(1200)), 90, 22, 22));

                    console.log("Coin collected!")
                    this.score++; 
                }
            var d = dist(this.x, this.y, pos2.x, pos2.y);
                if (d < 50) {
                    coins.shift();
                    //coins.push(new Coin(floor(random(1200)), 610, 22, 22));
                    coins.push(new Coin(floor(random(1200)), 310, 22, 22));
                    //coins.push(new Coin(floor(random(1200)), 90, 22, 22));

                    console.log("Coin collected!")
                    this.score++; 
                }
            var d = dist(this.x, this.y, pos3.x, pos3.y);
                if (d < 50) {
                    coins.shift();
                    //coins.push(new Coin(floor(random(1200)), 610, 22, 22));
                    //coins.push(new Coin(floor(random(1200)), 310, 22, 22));
                    coins.push(new Coin(floor(random(1200)), 90, 22, 22));

                    console.log("Coin collected!")
                    this.score++; 
                }
            }
        }
    }

