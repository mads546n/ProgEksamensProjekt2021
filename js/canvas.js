//Opstilling af variabler til canvas.
var canvas;
var context; 

//Input-variabler til bevægelse af spilleren
var upKey;
var rightKey;
var downKey;
var leftKey; 

//Opstilling af variabler til spillet.
var gameLoop;
var player;

//Kører, når siden loades.
window.onload = function() {
    //Canvas-variabler tildeles en mening.
    canvas = document.getElementById("game-canvas"); 
    context = canvas.getContext("2d"); 

    //Opstilling af kontrol-taster.
    setupInputs(); 

    //Skab spilleren.
    player = new Player(100, 400); 

    //Start game loop. Kalder "skridt-funktionen" 30 gange i sekundet. Skaber illusion af bevægelse.
    gameLoop = setInterval(skridt, 1000/30); 
}

function skridt() {
    //Spillerens skridt
    player.skridt();

    //Draw'er alting. Kalder function "draw", da vi canvas skal tegnes, hver gang vi bevæger os.
    draw();  
}

function draw() {
    //Clear vores canvas, så spillerens, fjendernes osv. - placering konstant opdateres.
    //Variablen bruges til at tegne en hvid firkant på canvas.
    context.fillStyle = "white"; 
    context.fillRect(0, 0, 600, 600);  

    //Draw spilleren
    player.draw();
}
//Opstiller kontrollerne, som styrer spillerens bevægelse. Hvis en af de følgende knapper nedtrykkes, ændres den tilhørende boolean-variables værdi. 
function setupInputs() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = true; 
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = true; 
        } else if (event.key === "s" || event.key === "ArrowDown") {
            DownKey = true; 
        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = true; 
        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = false; 
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = false; 
        } else if (event.key === "s" || event.key === "ArrowDown") {
            DownKey = false; 
        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = false; 
        }
    });
}

