//Opstilling af variabler til canvas.
var canvas;
var context; 

//Opstilling af variabler til spillet.
var gameLoop;
var player;

//Kører, når siden loades.
window.onload = function() {
    //Canvas-variabler tildeles en mening.
    canvas = document.getElementById("game-canvas"); 
    context = canvas.getContext("2d"); 

    //Variablen bruges til at tegne en hvid firkant på canvas.
    context.fillStyle = "white"; 
    context.fillRect(0, 0, 600, 600); 

    //Skab spilleren.
    player = new Player(50, 100); 

    //Start game loop
    
}

