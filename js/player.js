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
    this.height = 100; 
    this.width = 50;
    //
    this.aktiv = true; 
    
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
                //Bevæg til højre
                this.xspeed --;
            }

            //Vertikal bevægelse

            //Angivelse af fart
            if (this.xspeed > this.MaxSpeed) {
                this.xspeed = this.maxSpeed; 
            } else if (this.xspeed < -this.maxSpeed) {
                this.xspeed = -this.maxSpeed;
            }

            this.x += this.xspeed;
            this.y += this.yspeed;
        }
    }

    this.draw = function() {
        //Angiver farven på spilleren
        context.fillStyle = "red"; 
        context.fillRect(this.x, this.y, this.width, this.height); 
    }
    
}