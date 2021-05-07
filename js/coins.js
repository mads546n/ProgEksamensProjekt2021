
function Coin(x, y){
    this.x = x;
    this.y = y;
    this.width = 22;
    this.height = 22;

    this.draw = function(){
        context.fillStyle = "orange";
        context.fillRect(this.x, this.y, this.width, this.height);
    
    }

}



/*function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " +score, 8, 20);
}*/
